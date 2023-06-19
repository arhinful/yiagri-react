import "./Chats.css"
import {withCookies} from "react-cookie";
import {Image, Stack} from "react-bootstrap";
import {FaBars, FaEdit, FaSearch} from "react-icons/fa";
import {TfiMoreAlt} from "react-icons/tfi";
import {useState} from "react";

const Chats = ()=>{

    const [currentTab, setCurrentTab] = useState("focused")
    return(
        <div className="item-container">
            <div className="p-1 heading border-bottom">
                <Stack direction="horizontal" className="pl-3 pr-4">
                    <div className="fw-bold">Messaging</div>
                    <button className="ms-auto mr-2 icon-btn">
                        <TfiMoreAlt />
                    </button>
                    <button className="icon-btn">
                        <FaEdit />
                    </button>
                </Stack>
            </div>
            <div className="mt-3 pt-1 px-2 heading">
                <Stack direction="horizontal"  className="mb-3">
                    <FaSearch className="input-group-prepend"/>
                    <input
                        type="text"
                        className="form-control outline-none search-input"
                        placeholder="Search message"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <button className="outline-none search-append-button">
                        <FaBars/>
                    </button>
                </Stack>
            </div>

            <div>
                <Stack direction="horizontal">
                    <div className="w-50">
                        <button onClick={()=>setCurrentTab("focused")} className={currentTab==="focused" ? activeTabClasses : tabClasses}>Focused</button>
                    </div>
                    <div className="w-50">
                        <button onClick={()=>setCurrentTab("others")} className={currentTab==="others" ? activeTabClasses : tabClasses}>Others</button>
                    </div>
                </Stack>
            </div>

            <div className="messages-container">

                {
                    currentTab === "focused" ?(
                        <>
                            {
                                Array(50).fill(0).map((_, index)=>{
                                    return(
                                        <Stack key={index} direction="horizontal" className="pl-3 chat-list">
                                            <div className="pt-4 pb-3">
                                                <Image className="chat-img" src="./nii.jpeg"/>
                                            </div>
                                            <div className="ml-2 w-100">
                                                <Stack direction="horizontal" className="">
                                                    <div className="chat-name">Richard Nii Lante</div>
                                                    <div className="ms-auto mr-3">Jun 17</div>
                                                </Stack>
                                                <div>
                                                    <div className="recent-message">Richard Nii: Hello, Kofi</div>
                                                </div>
                                                <div className="border-bottom underline"></div>
                                            </div>
                                        </Stack>
                                    )
                                })
                            }
                        </>
                    ):(
                        <div>
                            <div className="text-center">
                                <img src="./no_message.jpg" className="no-message-img"/>
                            </div>

                            <div className="no-message-yet text-center">
                                No messages yet
                            </div>

                            <div className="text-center mt-3">
                                Reach out and start a conversation to advance your career
                            </div>

                            <div className="mt-3 text-center">
                                <button className="send-a-message-button">Send a message</button>
                            </div>
                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default withCookies(Chats)

const activeTabClasses = "w-100 text-center tab-button active-tab-button";
const tabClasses = "w-100 text-center tab-button";
