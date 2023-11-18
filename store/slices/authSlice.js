// authSlice.js
import { reduxStudentAuthKey } from '@/utils/consts';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
    user: null,
    token: null,
    loading: 'idle',
    error: null,
};

export const loginAsync = createAsyncThunk('auth/login', async (credentials) => {
    const { data: loginResponse } = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student/login`, credentials)
    console.log("Login Response Redux ::: ", loginResponse)
    if (loginResponse?.status === 200) {
        localStorage.setItem(reduxStudentAuthKey, loginResponse?.data?.token)
    }
    return loginResponse
})

export const logoutAsync = createAsyncThunk('auth/logout', async (token) => {
    const logoutResponse = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student/logout`, {}, { headers: { "eh-auth-token": token } });
    console.log("Logout Response Redux ::: ", logoutResponse?.data)
    if (logoutResponse?.data?.status === 200) {
        localStorage.removeItem(reduxStudentAuthKey)
    }
    return logoutResponse?.data
})

export const fetchStudentWithTokenAsync = createAsyncThunk('auth/fetchStudent', async (localstoragetoken) => {
    try {
        if (!localstoragetoken) {
            return;
        }
        // console.log("Redux Line 40 ")
        const { data: studentData } = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student/loggedIn`, {}, { headers: { 'eh-auth-token': localstoragetoken, } })

        if (studentData?.status == 200) {
            return studentData
        } else {
            return null
        }
    } catch (error) {
        return null
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log("Set User Reducer ::: ", action.payload)
            state.user = action.payload;
            state.token = action.payload?.token || null;
        },
        clearUser: (state) => {
            state.user = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state, action) => {
                state.loading = 'pending';
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                state.token = action?.payload?.data?.token
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.loading = 'rejected';
            })
            .addCase(fetchStudentWithTokenAsync.pending, (state, action) => {
                state.loading = 'fulfilled';
            })
            .addCase(fetchStudentWithTokenAsync.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                state.user = action?.payload?.data
                state.token = action?.payload?.data?.token
            })
            .addCase(fetchStudentWithTokenAsync.rejected, (state, action) => {
                state.loading = 'fulfilled';
            })
            .addCase(logoutAsync.pending, (state) => {
                state.loading = 'pending';
            })
            .addCase(logoutAsync.fulfilled, (state, action) => {
                state.loading = 'fulfilled';
                state.user = null
                state.token = null
            })
            .addCase(logoutAsync.rejected, (state, action) => {
                state.loading = 'rejected';
                // state.error = action.error.message;
            })
    }
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
