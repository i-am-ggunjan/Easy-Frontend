import { FilterIcon, PassbookIcon } from '@/utils/icons/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Testheader() {
    const [activeTab, setActiveTab] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const currentPath = router.asPath;
        if (currentPath.includes('/mytest')) {
            setActiveTab('mytest');
        } else if (currentPath.includes('/improvetest')) {
            setActiveTab('improvetest');
        } else if (currentPath.includes('/filter')) {
            setActiveTab('filter');
        }
    }, [router.asPath]);

    return (
        <div className='flex justify-between flex-wrap gap-y-5 p-2 font-semibold'>
            <div className='flex flex-wrap justify-between gap-2 sm:gap-6 items-center max-sm:text-[14px]'>
                <Link href="/dashboard/test/mytest">
                    <button className={`border-2 border-[#6F6B80] text-black p-2 rounded-[8px] ${activeTab === 'mytest' && 'active'}`}>MyTest</button>
                </Link>
                <Link href="/dashboard/test/improvetest">
                    <button className={`border-2 border-[#6F6B80] text-black p-2 rounded-[8px] ${activeTab === 'improvetest' && 'active'}`}>Improve</button>
                </Link>

            </div>
           
        </div>
    );
}

export default Testheader;
