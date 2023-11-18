import Reportheader from '@/components/card/Reportheader';
import React from 'react'

function Subjectreport() {
    return (
        <>
            <div>

                <Reportheader />
                Subjectreport
            </div>
        </>
    )
}

export default Subjectreport;
Subjectreport.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}