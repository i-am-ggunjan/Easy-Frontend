import { SubmitBtn } from '@/utils/icons/icons'
import axios from 'axios';

import React, { useState } from 'react'
import useAlert from '@/components/hooks/useAlert';
function NewsLetter() {
    const [data, setData] = useState({ email: null });
    const [openAlert, AlertWrapper] = useAlert();
    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/subscribers`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                setData({ email: '' });

                openAlert("Thank you for subscribing!");
            } else {
                openAlert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error('Error submitting subscription:', error);
        }
    }




    return (
        <>
            <div>
                <section className="lg:px-32 md:px-30 sm:px-10 px-4 py-10 sm:py-16 bg-[#f8f7f5]">
                    <AlertWrapper />
                    <main className="flex flex-col items-center gap-4 text-center ">
                        <h5 className="text-[20px] md:text-[30px] text-[#231F40]  font-extrabold">SUBSCRIBE TO GET THE LATEST NEWS ABOUT US</h5>
                        <p className='w-[80%] m-auto text-[12px] sm:text-[14px] text-[#6F6B80] text-justify sm:text-center ' >"At Easyhai Online, we're committed to empowering learners from diverse backgrounds. Our mission is to help you achieve your educational goals by providing the latest developments and educational insights."</p>
                        <div className="flex justify-center items-center border-l  border-y border-[#FFC81D] rounded-full bg-white">
                            <input placeholder="ENTER YOUR EMAIL ADDRESS"
                                type='email'
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                className="text-[12px] px-4 py-3 text-gray w-[60vw] sm:w-[30vw] outline-none rounded-full placeholder:text-[#FFC81D] placeholder:font-bold " />
                            <button type='btn' className='' onClick={handleSubmit}><SubmitBtn /></button>

                        </div>
                    </main>
                </section>
            </div>
        </>
    )
}

export default NewsLetter