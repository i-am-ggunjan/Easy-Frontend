import Reportheader from '@/components/card/Reportheader';
import React from 'react'

function Comparisonreport() {
  const Array = [
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
  ]
  return (
    <>

      <Reportheader />
      <div className='    '>
        <table className="table-auto border-2 w-full   bg-white p-2 m-2 mt-5 ">
          <thead className='border-2  '>
            <tr className='h-12 bg-[#D9D9D930]'>
              <th className='border-2 '>Topper List</th>
              <th className='border-2 '>Marks</th>
              <th className='border-2 '>Rank</th>
              <th className='border-2 '>Accuracy</th>
              <th className='border-2 '>Time</th>
              <th className='border-2 '>Que Attempt</th>
            </tr>
          </thead>
          <tbody>
            {
              Array.map((value, index) => (

                <tr key={index} className=' text-center h-10 bg-[#D9D9D930] text-[#6F6B80] font-semibold'>
                  <td className='border-r-2 bg-[#F4F4F4]' >Raj</td>
                  <td className='border-r-2 bg-[#F5E5E5]'>499/500 </td>
                  <td className='border-r-2 bg-[#E5EFE8]'>First</td>
                  <td className='border-r-2 bg-[#FFF4D2]'>44.44%</td>
                  <td className='border-r-2 bg-[#F3ECFC]'>2:27:34</td>
                  <td className='border-r-2 bg-[#E6EBEE]'>112</td>
                </tr>

              ))
            }


          </tbody>

        </table>
      </div>
    </>
  )
}

export default Comparisonreport;
Comparisonreport.getLayout = function PageLayout(page) {
  return (<>{page}</>)
}