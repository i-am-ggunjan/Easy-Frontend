import React from 'react'

function BookDemo() {
    return (
        <>
            <div className='bg-[#FFC81933]  p-4 md:p-10'>
                <div className='flex bg-[#fff]   border-2 rounded-3xl  justify-center'>
                    <div className='basis-1/2   rounded-3xl hidden md:block    '>
                        <img className='p-2' src='https://img.freepik.com/free-vector/demo-concept-illustration_114360-7742.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=ais' />
                    </div>
                    <div className='basis-1/2 p-3 '>
                        <div className='bg-[#fff] '>
                            <h1 className='text-black font-bold text-[28px] pt-3 justify-center flex '>Book a  <span className='text-orange-500 ml-2 mr-2 text-30px]'>free demo</span> session now</h1>
                            <div className='bg-[#FFF] md:m-[50px]'>

                                <div className="w-full max-w-xs m-auto md:m-0 mt-5">
                                    <form className="w-full max-w-lg" >
                                        <div className='w-full mb-6 md:mt-2'>
                                            <input className=" cursor-pointer w-full md:w-[480px] appearance-none block bg-[#F5F5F5] text-gray-700  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" type="text" placeholder='Enter Your Name' />
                                        </div>
                                        <div className='w-full mb-6 md:mt-2'>
                                            <select className=" cursor-pointer w-full md:w-[480px] appearance-none block bg-[#F5F5F5] text-gray-700  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" type="text">
                                                <option>Choose Your Class</option>
                                                <option>LKG</option>
                                                <option>UKG</option>
                                                <option>Class 1</option>
                                                <option>Class 2</option>
                                                <option>Class 3</option>
                                                <option>Class 4</option>
                                                <option>Class 5</option>
                                                <option>Class 6</option>
                                                <option>Class 7</option>
                                                <option>Class 8</option>
                                                <option>Class 9</option>
                                                <option>Class 10</option>
                                                <option>Class 11</option>
                                                <option>Class 12</option>




                                            </select>
                                        </div>
                                        <div className='w-full mb-6 md:mt-2'>
                                            <select className=" cursor-pointer w-full md:w-[480px] appearance-none block bg-[#F5F5F5] text-gray-700  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" type="text">
                                                <option>Choose Your Medium</option>
                                                <option>Hindi</option>
                                                <option>English</option>

                                            </select>
                                        </div>
                                        <div className='w-full mb-6 md:mt-2'>
                                            <select className=" cursor-pointer w-full md:w-[480px] appearance-none block bg-[#F5F5F5] text-gray-700  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" type="text">
                                                <option>Whose Available with You</option>
                                                <option>Father</option>
                                                <option>Brother</option>
                                                <option>Sister</option>
                                                <option>Alone</option>
                                                <option>Not Sure</option>

                                            </select>
                                        </div>
                                        <div className="w-full mb-6 md:mt-2">
                                            <textarea
                                                className="w-full md:w-[480px] appearance-none block bg-[#F5F5F5] text-gray-700  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none" type="text" placeholder="Any Messege"></textarea>
                                        </div>



                                        <button type="submit" className="shadow  bg-[rgb(13,80,115)] hover:bg-[rgb(255,193,0)] hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"  >
                                            Submit
                                        </button>
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookDemo