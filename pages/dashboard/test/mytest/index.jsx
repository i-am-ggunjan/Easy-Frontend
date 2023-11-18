import Testheader from '@/components/card/Testheader'
import React from 'react'

function Mytest() {
    const Array = [
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
    ]
    return (
        <>
            <Testheader />
            <div className='bg-white  m-2  border-2 border-[#00000030] rounded-lg   '>
                <table className="table-auto bg-white w-full   rounded-lg    ">
                    <thead className='  '>
                        <tr className='h-12 bg-[#D9D9D930] '>
                            <th  >S.No</th>
                            <th >Test Name</th>
                            <th className='max-sm:hidden' >Start Date</th>
                            <th >Duration</th>
                            <th className='max-sm:hidden'>End Date</th>
                            <th >Status</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            Array.map((value, index) => (

                                <tr key={index} className=' text-center h-10 bg-[#D9D9D930] text-[#6F6B80] font-semibold'>
                                    <td className=' ' >1</td>
                                    <td className=' '>Physics motion test </td>
                                    <td className='  max-sm:hidden'>9/10/23</td>
                                    <td className='  '>2 hours</td>
                                    <td className=' max-sm:hidden '>10/09/23, 12:00pm</td>
                                    <td className='  '>
                                        <button className=' bg-[#25831620] text-[#34860E] rounded-md p-1'>Start Test</button>
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

export default Mytest
Mytest.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}