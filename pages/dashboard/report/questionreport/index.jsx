import Reportheader from '@/components/card/Reportheader';
import React from 'react'

function Questionreport() {
    return (
        <>
            <div>
                <Reportheader/>
                Questionreport</div>
        </>
    )
}

export default Questionreport;
Questionreport.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}