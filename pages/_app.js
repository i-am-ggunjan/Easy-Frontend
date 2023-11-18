import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
const Navbar = dynamic(() => import('@/components/features/Navbar'))
const Footer = dynamic(() => import('@/components/features/Footer'))
const StuLayoutCMP = dynamic(() => import('@/components/features/student_panel/layout'))
import '@/styles/globals.css';
import { wrapper } from '../store/index';
import { useDispatch, useSelector } from 'react-redux';
import { reduxStudentAuthKey } from '@/utils/consts';
import { fetchStudentWithTokenAsync } from '@/store/slices/authSlice';

React.StrictMode = React.Fragment;

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.authState)
  let localstoragetoken;
  if (typeof window !== "undefined") {
    localstoragetoken = localStorage.getItem(reduxStudentAuthKey) || null
  }

  useEffect(() => {
    if (token || localstoragetoken) {
      dispatch(fetchStudentWithTokenAsync(localstoragetoken))
    }
  }, [token])

  if (Component.getLayout) {
    return Component.getLayout(<>
      <StuLayoutCMP>
        <Component {...pageProps} />
      </StuLayoutCMP>
    </>)
  }

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default wrapper.withRedux(MyApp);
