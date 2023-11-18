import Testheader from '@/components/card/Testheader'
import React from 'react'

function ImproveTest() {
    const Array = [
        {}, {}, {}, {}
    ]
    return (
        <>
            <Testheader />
            <div className='bg-white  m-2 mt-5 border-2 border-[#00000030] rounded-lg'>
                <table className="table-auto bg-white  w-full rounded-lg    ">
                    <thead className='  '>
                        <tr className='h-12 bg-[#D9D9D930]'>
                            <th >S.No</th>
                            <th >Improve Test Name</th>
                            <th className='max-sm:hidden'>Test Date</th>
                            <th >Duration</th>
                            <th >Topic Name</th>
                            <th >Status</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.map((value,index) => (

                                <tr key={index} className=' text-center h-10 bg-[#D9D9D930] text-[#6F6B80] font-semibold'>
                                    <td className=' ' >1</td>
                                    <td className=' '>Physics motion test </td>
                                    <td className='  '>9/10/23</td>
                                    <td className='  '>2 hours</td>
                                    <td className='  '>Atom</td>
                                    <td className='  '>
                                        <button className='bg-[#25831620] text-[#34860E] rounded-md p-1'>Start Test</button>
                                    </td>

                                </tr>

                            ))
                        }


                    </tbody>

                </table>
            </div>
        </>
    )
}

export default ImproveTest;
ImproveTest.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}