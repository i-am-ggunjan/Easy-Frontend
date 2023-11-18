import HeadingCard from '@/components/card/HeadingCard';
import HeaderBannerTitle from '@/components/card/header-bgImage-title';
import { CallIconFooter, EmailIcon, EmailIcon2, LocationFillIcon } from '@/utils/icons/icons';
import axios from 'axios';
import { useState } from 'react';

export default function ContactUs() {
    const [data, setData] = useState({});
    // console.log("l-8------------->", data)
    const handlesubmit = async (e) => {
        e.preventDefault();
        const contactUrl = "http://192.168.29.119:8080/api/v1/modules/student/contactUs";
        try {
            const response = await axios.post(contactUrl, data);
            // console.log("l-16------------>", response)
            if (response.status === 201) {
                alert("Your form submit successfully ")
            }
        } catch (error) {
            console.error('failed to submit form:', error);
        };
    }

    return (
        <div>
            <HeadingCard heading={'Contact Us'} />
            <div className=' relative '>
                 <img  src="https://images.unsplash.com/photo-1559030623-0226b1241edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80" alt="Your Image" className="w-full h-auto md:h-[50vh] object-cover" />
                <div className="absolute  top-[160px] hidden md:block left-[280px] p-4 text-white font-bold bg-opacity-50 text-[40px]">
                    <p > Speak in detail about your quries with us</p>
                    <div className='text-[20px] p-3 font-thin text-center'>
                        <p className='bg-[#0D5276] p-2'>We solve your quries and build your confidence towards your future</p>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row mt-12'>
                <div className='basis-1/2 md:p-12 mx-10'>
                    <h1 className='text-[25px] font-semibold '>Start your carrier with Easyhai online</h1>

                    <p className='text-[#A40000] font-semibold text-[20px] '>We Always Ready To Hear For You, Ideally Contact With Us.</p>
                    <div className='flex mt-8 gap-3'>
                     <LocationFillIcon />
                        <h1 className='text-[20px] font-semibold '>HEAD OFFICE</h1>

                    </div>


                    <p>2 ND FLOOR, c - 56/21 sector 62 noida uttar pardesh- 201309 </p>
                    <div className='flex mt-8 gap-3'>
                    <EmailIcon color='black ' />
                        <h1 className='text-[20px] font-semibold '>CONTACT</h1>

                    </div>

                    <p>INFO@EASYHAIONLINE.COM </p>
                    <div className='flex mt-8 gap-3 '>
                    <CallIconFooter />

                        <h1 className='text-[20px] font-semibold '>INDIA SUPPORT NUMBER</h1>

                    </div>

                    <p>+ 91  9289911131</p>
                </div>
                <div className='basis-1/2 m-12'>
                    <form className="w-full max-w-lg" onSubmit={handlesubmit}>
                        <div className="flex flex-wrap -mx-3 mb-6 ">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name" type="text" placeholder="Enter Your Name"
                                    value={data.name}
                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                    required />
                            </div>
                            <div className="w-full md:w-1/2 px-3">

                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  " id="grid-last-name" type="text" placeholder="Enter Your Email"
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                    required value={data.email} />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6 ">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none " id="grid-first-name" type="text" placeholder="Enter Your Phone Number"
                                    onChange={(e) => setData({ ...data, phoneNo: e.target.value })}
                                    required value={data.phoneNo} />
                            </div>
                            <div className="w-full md:w-1/2 px-3">

                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  " id="grid-last-name" type="text" placeholder="Enter Your Subject"
                                    onChange={(e) => setData({ ...data, subject: e.target.value })}
                                    required value={data.subject} />
                            </div>
                        </div>

                        <div className="w-full  ">

                            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none  " id="grid-last-name" type="text" placeholder="Leave a comment*"
                                onChange={(e) => setData({ ...data, message: e.target.value })}
                                required value={data.message} />
                        </div>

                        <button className="shadow mt-5 bg-[rgb(13,80,115)] hover:bg-[rgb(255,193,0)] hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            Send a message
                        </button>
                    </form>

                </div>
            </div>
            <div>
                <div className="relative w-full h-96 mb-12 mt-12">
                    <iframe className="absolute top-0 left-0 w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                        frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

