import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLoader } from '@/components/hooks/useLoader';
import { DateIconBlogDetailPage, Men, Timer, Topic } from "@/utils/icons/icons";
import { reduxStudentAuthKey } from '@/utils/consts';
import Link from "next/link";
import { useSelector } from "react-redux";
import useAlert from "@/components/hooks/useAlert";

// const ServerURI = "192.168.29.13:8080"; //Local server
// const ServerURI = "https://www.api.easyhaionline.com";
const WebexApiKey = "Y2JjYjNkNjEtMjEzZi00ZDI5LTgzODAtZTUxNGM0NTI3M2UwNWRiYTg4ZjYtZDky_P0A1_63808cdd-7608-4991-8f79-b2df9bee232a";
function getTimeComponents(timeString) {
    const dateObj = new Date(timeString);

    const time = dateObj.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });
    const day = dateObj.toLocaleDateString("en-US", { weekday: "short" });
    const date = dateObj.toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
    });

    return `${time}, ${day}, ${date}`;
}
const livelecture = () => {
    const [openAlert, AlertWrapper] = useAlert();
    const [data, setData] = useState(null);
    const [openLoader, closeLoader, Loader] = useLoader();
    const [loading, setLoading] = useState(false);
    const [showJoinButton, setShowJoinButton] = useState(true);
    const { user, token } = useSelector(state => state?.authState)

    const handleJoinClick = async (item) => {
        setLoading(true);
        let data = {
            ishost: false,
            studentEmail: user?.email,
            meetingNumber: item.meetingNumber,
            studentName: user?.name?.firstName + " " + user?.name?.lastName,
            apiKey: WebexApiKey,
        }

        try {
            const response = await fetch("http://192.168.29.13:8080/api/v1/modules/live/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            console.log("Res Data ::: l -58 :: ", response)
            if (response?.status === 403) {
                openAlert("Please Wait for Teacher Joining","error")
            } else {
                const responseData = await response.json()
                console.log("Res Data ::: l -58 :: ", responseData)
                window.open(responseData.data.link, "_blank")
            }
            setLoading(false);
        } catch (error) {
            console.log("Error in API  ::: ", error)
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [token]);



    const getData = async () => {
        try {
            const purchasedCourseIds = user?.purchasedCourse?.map(value => value?.id)
            console.log("purchasedCourseIds Array ::: ", purchasedCourseIds)

            if (user) {
                const response = await axios.post(
                    "http://192.168.29.13:8080/api/v1/modules/live/avail",
                    { user: "student", streamsArray: purchasedCourseIds }, // Use purchasedCourseIds directly
                    { headers: { Authorization: `Bearer ${reduxStudentAuthKey}` } }
                )
                console.log("l-88 :: Fetched live lectures for purchased courses:", response.data);
                setData(response?.data?.data?.meetings)
            }
        } catch (error) {
            console.log("Error fetching data:", error)
        }
    }

    return (
        <>
            <Loader active={loading} />
            <AlertWrapper />
            {data ? (
                <div className="p-3">
                    <div className="flex flex-wrap justify-center gap-5">
                        {data?.map((item, index) => (
                            <div key={index} className="card">
                                <div className="heading text-[#0B405D]"><h5>{item.title}</h5></div>

                                <div className="text-justify">
                                    <p><span className="font-bold text-[grey] text-[17px]">Agenda :</span> {item.agenda}</p>

                                    <p><span className="font-bold text-[grey] text-[17px]">Start Timing :</span> {getTimeComponents(item.start)}</p>
                                    <p><span className="font-bold text-[grey] text-[17px]">End Timing :</span> {getTimeComponents(item.end)}</p>
                                    <p className="flex"><span className="font-bold text-[grey] text-[17px]">Host Name :</span>  <>{item.hostUserName}</></p>

                                </div>
                                <div className="overlay"></div>
                                {/* <button class="card-btn" >Join Now</button> */}
                                {showJoinButton && (
                                    <button
                                        className="card-btn"
                                        onClick={() => {
                                            handleJoinClick(item);
                                        }}

                                    >
                                        Join Now
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            ) : (
                <p>Loading...</p>
            )}


        </>
    );
};

export default livelecture;

livelecture.getLayout = function PageLayout(page) {
    return (<>{page}</>)
}