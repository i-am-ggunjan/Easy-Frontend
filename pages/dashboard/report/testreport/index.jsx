import Reportheader from '@/components/card/Reportheader';
import React from 'react'

function testreport() {
    const Array = [
        {}, {}, {}, {}, {}, {}, {},
    ]
    return (
        <>
            <div>
                <Reportheader />
                <table className="table-auto border-2 w-full   bg-white p-2  mt-5 ">
                    <thead className=' b-2 '>
                        <tr className='h-12 bg-[#D9D9D930]'>
                            <th className='border-2 '>S.No</th>
                            <th className='border-2 '>Test Name</th>
                            <th className='border-2 '>Test Date</th>
                            <th className='border-2 bg-[#FFC81D30]'>Score</th>
                            <th className='border-2 bg-[#FFC81D30]'>Out of</th>
                            <th className='border-2 bg-[#FFC81D30]'>Rank</th>
                            <th className='border-2 bg-[#A4000010]'>Right</th>
                            <th className='border-2 bg-[#A4000010]'>Wrong</th>
                            <th className='border-2 bg-[#A4000010]'>Left</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.map((value,index) => (

                                <tr key={index} className=' text-center h-10 bg-[#D9D9D930] text-[#6F6B80] font-semibold'>
                                    <td className='border-r-2 ' >1</td>
                                    <td className='border-r-2 '>Physics motion test </td>
                                    <td className='border-r-2  '>9/10/23</td>
                                    <td className='border-r-2 bg-[#FFC81D30] '>69</td>
                                    <td className='border-r-2 bg-[#FFC81D30] '>Fifth</td>
                                    <td className='border-r-2 bg-[#FFC81D30] '>24</td>
                                    <td className='border-r-2 bg-[#A4000010] text-green-700'>24</td>
                                    <td className='border-r-2 bg-[#A4000010] text-red-900'>22</td>
                                    <td className='border-r-2 bg-[#A4000010]'>11</td>
                                </tr>

                            ))
                        }


                    </tbody>

                </table>
            </div>
        </>
    )
}

export default testreport;
testreport.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}