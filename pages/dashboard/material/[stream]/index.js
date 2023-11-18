import Axios from "axios";
import React, { useState, useEffect } from "react";
import PdfViewer from "@/components/features/PdfViewer";
// import ReactHLSPlayerCMP from "@/components/features/HLSPlayer";
import { useRouter } from "next/router";
import index from "@/pages/auth/change-password";
import Player from "@/components/features/Player";
import { useSelector } from "react-redux";

const findMatchingStream = (purchasedCourse, refId) => {
    for (const item of purchasedCourse || []) {
        const _stream = item?.accessibleStreams.find((_) =>
            String(refId).startsWith(_.id)
        );
        if (_stream) return _stream;
    }
    return null;
}

const fetchPDFsAndVideos = async (refId, setStudyMaterial, setStreamDeatails) => {
    // console.log("Enter the fetchPDFsAndVideos :::: Line 24")
    const { data } = await Axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/super-admin/progams/get-study-materials`, { refId })
    // console.log("L.No ---- 26", data)

    if (data?.success) {
        setStreamDeatails((_) => ({ ..._, titleList: data?.map }));
        setStudyMaterial((_) => ({
            pdfs: data?.pdfs,
            lectures: data?.lectures,
        }))
    } else {
        setStudyMaterial({});
    }
}

const fetchFirst = async (user, refId, setStreamDeatails, setStudyMaterial) => {
    const check_rslt = findMatchingStream(user?.purchasedCourse, refId);
    fetchPDFsAndVideos(refId, setStudyMaterial, setStreamDeatails);
    setStreamDeatails((_) => ({ ..._, parentStream: check_rslt }));
};

export default function StreamShow({ query }) {
    const [streamDetails, setStreamDeatails] = useState(null);
    const [studyMaterial, setStudyMaterial] = useState({ pdfs: [], lectures: [] })
    const [currentPlay, setCurrentPlay] = useState({ type: "", data: "" })
    const { user } = useSelector(state => state?.authState)

    useEffect(() => {
        // console.log("Ref Id ::: 54 ")
        if (query?.ref) {
            // console.log("Line ::: 56 ")
            fetchFirst(user, query?.ref, setStreamDeatails, setStudyMaterial)
        }
        // console.log("Line ::: 58 ")

    }, [query?.stream])

    return (
        <>
            <div className="stream-page flex flex-col flex-wrap gap-5 whitespace-nowrap min-h-screen">
                <LeftPartToShow
                    setCurrentPlay={setCurrentPlay}
                    studyMaterial={studyMaterial}
                />
                <RightPartToShow
                    streamDetails={streamDetails}
                    currentPlay={currentPlay}
                />
            </div>
        </>
    )
}

const LeftPartToShow = ({ studyMaterial, setCurrentPlay }) => {
    return (
        <div>
            <h3 className="bg-[#0A405C] p-4 text-white font-semibold text-[20px] rounded-t-md">Course Outline</h3>
            <div className="border-2 flex flex-col gap-5 p-4">
                <div className="bg-white shadow-md">
                    <h3 className='px-3 py-2 text-[14px] font-semibold border border-[#0A405C] bg-[rgba(11,64,93,0.20)]  text-[#0A405C] rounded-t-md'>Lecture(s)</h3>
                    <div className='px-4 py-2 text-[14px] text-[#6F6B80]'>
                        {studyMaterial?.lectures && studyMaterial.lectures.length ?
                            studyMaterial?.lectures[0]?.playlist?.map((video, index) => (
                                <div className="cursor-pointer" key={index} onClick={() => { setCurrentPlay({ type: "video", data: video }) }}>
                                    <span>{index + 1}.</span> {video.name}
                                </div>
                            ))
                            : <div>No Lectures Found!</div>
                        }
                    </div>
                </div>
                <div className="bg-white shadow-md">
                    <h3 className='px-3 py-2 text-[14px] font-semibold border border-[#0A405C] bg-[rgba(11,64,93,0.20)]  text-[#0A405C] rounded-t-md'>Notes(s)</h3>
                    <div className='px-4 py-2 text-[14px] text-[#6F6B80]'>
                        {studyMaterial?.pdfs && studyMaterial?.pdfs?.length ?
                            studyMaterial?.pdfs?.map((pdf, idx) => (
                                <div className="cursor-pointer" key={idx} onClick={() => { setCurrentPlay({ type: "pdf", data: pdf, }) }}>
                                    <span className="lowercase">{idx + 1}. </span> {pdf.title}
                                </div>
                            ))
                            : <div>No Notes Found!</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

const RightPartToShow = ({ streamDetails, currentPlay }) => {
    return (
        <div>
            <div className="bg-[#0A405C] p-4 text-white rounded-t-md flex flex-col gap-1">
                <div className="font-semibold text-[20px]">{streamDetails?.parentStream?.showStreams}</div>
                <div className="flex">
                    {streamDetails &&
                        streamDetails?.titleList?.map((item, idx) =>
                            (<p key={idx} className="text-[12px]">{idx !== 0 ? "/ " : ""}  {item}</p>)
                        )}
                </div>
            </div>

            <div className="border-2 p-4">
                <div className="flex justify-center">
                    {currentPlay?.type === "video" && currentPlay?.data && (
                        <Player url={currentPlay?.data?.url} playable={true} />
                    )}
                </div>
                <div>
                    {currentPlay?.type === "pdf" && currentPlay?.data && (
                        <PdfViewer url={currentPlay?.data?.accessUrl} />
                    )}
                </div>
            </div>
        </div>
    );
};

StreamShow.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}

export async function getServerSideProps(context) {
    const { query } = context;
    console.log("Query in Terminal Material Dynamic ::: ", query)

    return {
        props: {
            query,
        },
    };
}