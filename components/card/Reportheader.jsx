import { FilterIcon, PassbookIcon } from '@/utils/icons/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Reportheader() {
    const [activeTab, setActiveTab] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const currentPath = router.asPath;
        if (currentPath.includes('/testreport')) {
            setActiveTab('testreport');
        } else if (currentPath.includes('/questionreport')) {
            setActiveTab('questionreport');
        } else if (currentPath.includes('/camparisonreport')) {
            setActiveTab('camparisonreport');
        }
        else if (currentPath.includes('/subjectreport')) {
            setActiveTab('subjectreport');
        }

        else if (currentPath.includes('/filter')) {
            setActiveTab('filter');
        }
    }, [router.asPath]);

    return (
        <div className='flex justify-between flex-wrap gap-y-5 p-2 font-semibold'>
            <div className='flex flex-wrap justify-between gap-2 sm:gap-6 items-center max-sm:text-[14px]'>
                <Link href="/dashboard/report/testreport">
                    <button className={`border-2 border-[#6F6B80] text-black p-2 rounded-[8px] ${activeTab === 'testreport' && 'active'}`}>Test Report</button>
                </Link>
                <Link href="/dashboard/report/questionreport">
                    <button className={`border-2 border-[#6F6B80] text-black p-2 rounded-[8px] ${activeTab === 'questionreport' && 'active'}`}>Question Report</button>
                </Link>
                <Link href="/dashboard/report/camparisonreport">
                    <button className={`border-2 border-[#6F6B80] text-black p-2 rounded-[8px] ${activeTab === 'camparisonreport' && 'active'}`}>Comparison Report</button>
                </Link>
                <Link href="/dashboard/report/subjectreport">
                    <button className={`border-2 border-[#6F6B80] text-black p-2 rounded-[8px] ${activeTab === 'subjectreport' && 'active'}`}>Subject Report</button>
                </Link>

            </div>
            <div className='flex gap-2 sm:gap-6 justify-between max-sm:text-[14px]'>

                <Link href="/dashboard/doubt/filter">
                    <button className={`border-2 p-2 border-[#6F6B80] flex rounded-[8px] ${activeTab === 'filter' && 'active'} flex gap-2`}>  <FilterIcon /> Filter</button>
                </Link>
            </div>
        </div>
    );
}

export default Reportheader;
