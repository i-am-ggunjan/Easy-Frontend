import Link from 'next/link';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLoader } from '@/components/hooks/useLoader';
import useAlert from '@/components/hooks/useAlert';
import { validatePhoneNumber } from '@/utils/common-function';
import { useRouter } from 'next/router';
import { loginAsync } from '@/store/slices/authSlice';
import { DownwardArrow, ShowPasswordIcon, ShowPasswordIcon2 } from '@/utils/icons/icons';

function index() {
  const dispatch = useDispatch();
  const [data, setData] = useState({ phoneNumber: null, password: "" });
  const [error, setError] = useState(null);
  const [openLoader, closeLoader, Loader] = useLoader();
  const [openAlert, AlertWrapper] = useAlert();
  const { user } = useSelector(state => state?.authState)
  console.log("Login User ::: ", user)


  const [data2, setData2] = useState({ password: '', showPassword: false });

  const handleShowPassword = () => {
    setData2({ ...data2, showPassword: !data2.showPassword });
  };

  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(data.phoneNumber)) {
      openAlert('Incorrect Mobile Number!', 'error');
      setError('Incorrect Mobile Number!');
      return;
    }
    setError(null);
    openLoader('Validating your data, Please Wait!');

    const loginAsyncWithCloseLoader = async (credentials) => {
      try {
        const response = await dispatch(loginAsync(credentials));
        console.log('Login API response:', response)
        if (response?.error?.message === "Request failed with status code 403") {
          openAlert("User Not Found", 'error')
        }
        if (response?.error?.message === "Request failed with status code 401") {
          openAlert("Please Enter Correct Password", 'error')
        }
      } catch (error) {
        console.error('API request failed:', error)
        openAlert('Failed to authenticate. Please try again.', 'error');
      } finally {
        closeLoader()
      }
    }

    loginAsyncWithCloseLoader(data)
  };

  useEffect(() => {
    console.log("Router in Login ::: ", router)
    if (user) {
      if (router?.query.callback) {
        router.replace(router?.query.callback)
      }
      else {
        router.replace('/dashboard')
      }
    }
  }, [user])

  return (
    <>
      <Loader />
      <AlertWrapper />
      <div className="flex flex-wrap flex-col md:flex-row">
        <div className="basis-1/2 bg-[#FFF]  hidden md:block ">
          <div className=" p-7">
            <img
              className="p-12 mt-12 "
              src="/loginimg2.jpg"
            />
            <p className="justify-normal p-10 mt-[-40px] items-center ">
              You can now access world-class prepration with just on tap.
            </p>
          </div>
        </div>
        <div className="basis-1/2 bg-[#FFC81933] justify-center items-center">
          <div
            className="bg-[#FFF] 
                    m-[20px]  md:m-[80px] md:p-[50px] md:rounded-[30px] rounded-md"
          >
            <div className=" text-center p-5 md:p-0">
              <h3 className="md:text-[35px]   text-[25px] text-[#231F40] font-bold">
                Student Portal
              </h3>
              <p className="p-2">Welcome</p>
              <p>To log in, kindly provide your mobile number</p>
            </div>
            <div className="w-full max-w-xs m-auto">
              <form
                className="bg-white  px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 text-[20px]"
                    htmlFor="username"
                  >
                    Phone Number
                  </label>
                  <input
                    className=" text-[14px] adow appearance-none border rounded w-full py-2 px-3 text-gray-700 "
                    id="username"
                    type="number"
                    placeholder="Mobile Number"
                    name="phoneNumber"
                    // value={data?.phoneNumber}
                    onChange={(e) =>
                      setData({ ...data, phoneNumber: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 text-[20px]"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="flex relative">
                    <input
                      className="border rounded w-full py-2 px-3 text-gray-700 mb-3 text-[14px]"
                      id="password"
                      type={data2.showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      name="password"
                      value={data.password}
                      onChange={(e) => setData({ ...data, password: e.target.value })}
                      required
                    />
                    <button
                      type="button"
                      onClick={handleShowPassword}
                      className="mr-2 focus:outline-none cursor-pointer absolute right-0 top-3"
                    >
                      {data2.showPassword ? (
                        <ShowPasswordIcon  />
                      ) : (
                        <ShowPasswordIcon2 />

                      )}
                    </button>


                  </div>

                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <p className="inline-block align-baseline font-bold text-sm ">
                      Remember me
                    </p>
                  </div>
                  <p className="inline-block  font-bold text-sm text-blue-500 hover:text-blue-800">
                    <Link href="/auth/forgot-password"> Forgot Password?</Link>
                  </p>
                </div>
                <div className="md:w-full mt-3">
                  {error && (
                    <div className="text-red-700 font-bold text-right">
                      <p>{error}</p>
                    </div>
                  )}
                  <button
                    className="w-full shadow  bg-[#0B405D] hover:bg-[rgb(255,200,29)] hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="border border-[#6F6B80] basis-[42%]"></div>
                  <div className="text-[#231F40] text-[14px] font-bold ">
                    Or
                  </div>
                  <div className="border border-[#6F6B80] basis-[42%]"></div>
                </div>
                <div className="md:w-full flex gap-3 ">
                  <button
                    className="mt-3 w-full shadow hover:bg-[rgb(255,200,29)] hover:text-black    focus:shadow-outline focus:outline-none   py-2 px-4 rounded"
                    type="button"
                  >
                    <img
                      className="h-[30px] m-auto"
                      src="/logo/loginicon.png"
                    />
                  </button>
                  <button
                    className="mt-3 w-full shadow hover:bg-[rgb(255,200,29)] hover:text-black     focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                  >
                    <img
                      className="h-[30px] m-auto"
                      src="/logo/loginicon2.png"
                    />
                  </button>
                </div>

                <p className="mt-3 text-center text-[rgba(0, 0, 0, 1)] text-md p-1 md:p-0">
                  Dont have an account?{' '}
                  <span className="font-bold text-sm text-blue-500 cursor-pointer">
                    <Link href="/auth/register">Sign up</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default index;
