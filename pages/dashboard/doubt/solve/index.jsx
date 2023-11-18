import Doubtheader from '@/components/card/Doubtheader'
import { studentAuthKey } from '@/utils/consts'
import React, { useEffect, useState } from "react";


const Solve = () => {
const [data, setData] = useState();
console.log("l-8------->",data)

    // const Array = [
    //     {}, {}, {}, {}, {}, {}
    // ]

    
    useEffect(() => {
        getData();
    }, []);
    const doubturl = `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/doubt/allstudentdoubt?solved=true`;
    const getData = async () => {
        const _storageToken = localStorage.getItem(studentAuthKey);
        console.log("l-18---->", studentAuthKey)
        try {
            const response = await fetch(doubturl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'eh-auth-token': _storageToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("l-30--------->data", data);
                setData(data?.data?.availableDoubts);
            } else {
                console.log("Error fetching data:", response.statusText);
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };
    return (
        <>
            <Doubtheader />

            <div className='flex flex-wrap gap-[68px]  p-2 mt-8 font-semibold '>
                {
                    data?.map(value => (
                        <div className='bg-white rounded-[10px] w-[377px] border-2 flex-grow ' >

                            <div className='flex '>
                                <div className='bg-gradient-to-r from-[#EBA132] to-[#F6B375]  w-[211px] text-[12px] pl-2 p-1 pr-4' style={{ borderRadius: "8px 0px 20px 0px " }}>{value?.chapter}</div>
                                <div className=''></div>

                            </div>
                            <div className='flex '>
                                <div className='  p-3 '>
                                    <img className='rounded-md w-[140px] h-[74px] object-cover' src='https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?size=626&ext=jpg&ga=GA1.1.684735313.1698058301&semt=sph' />
                                </div>
                                <div className=' p-2 text-[13px] font-medium text-[grey]'>
                                   {value?.description

}
                                </div>
                            </div>
                            <div className='border-[1px] mt-2'></div>
                            <div className='p-2 text-[13px] font-medium text-[grey] '>
                              {value?.createdAt
}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Solve

Solve.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}