import "./Chat.css"
import {withCookies} from "react-cookie";
import {Image, Stack} from "react-bootstrap";
import {TfiMoreAlt} from "react-icons/tfi";
import {BsCardImage, BsStar} from "react-icons/bs";
import {BiRadioCircle} from "react-icons/bi";
import {RxDotFilled} from "react-icons/rx";
import {IoCheckmarkCircle} from "react-icons/io5";
import {ImAttachment} from "react-icons/im";
import {AiOutlineGif} from "react-icons/ai";
import {SlOptions} from "react-icons/sl";
import {RiArrowDropUpLine, RiVideoAddFill} from "react-icons/ri";
import {Link} from "react-router-dom";

const Chat = ()=>{
    return(
        <>
            <div className="chat-items-container">
                <div className="p-1 heading border-bottom">
                    <Stack direction="horizontal" className="pl-3 pr-4">
                        <div className="fw-normal">
                            <Link className="link-hover-underline-blue">Richard Nii Lante</Link>
                            <div className="header-name"><BiRadioCircle className="text-success"/> Available on mobile</div>
                        </div>
                        <button className="ms-auto mr-2 icon-btn">
                            <TfiMoreAlt />
                        </button>
                        <button className="icon-btn">
                            <RiVideoAddFill />
                        </button>
                        <button className="icon-btn">
                            <BsStar />
                        </button>
                    </Stack>
                </div>
                <div className="chat-container">
                    <div className="mt-3 pt-1 px-2 heading">
                        <Stack direction="vertical"  className="mb-3">
                            <div>
                                <Image src="./nii.jpeg" className="chat-image"/>
                            </div>
                            <Link className="mx-2 link-hover-underline-dark">
                                Richard Nii Lante Lawson
                            </Link>
                            <div className="profile-title mx-2">
                                Technical Co-Founder || Open Source Advocate || Software Engineer || M.L. Researcher ||
                                Tech Event Organizer
                            </div>
                        </Stack>
                    </div>

                    <div className="mb-3">
                        <Stack direction="horizontal">
                            <div className="border-bottom w-75"></div>
                            <div className="w-25 text-center chat-date">JUN 7</div>
                            <div className="border-bottom ms-auto w-75"></div>
                        </Stack>
                    </div>

                    <div>
                        {
                            Array(7).fill(0).map((_, index)=>{
                                return(
                                    <Stack key={index} direction="horizontal" className="pl-3 my-2 justify">
                                        <div className="pt-1">
                                            <Image className="user-chat-image" src="./arhinful.jpeg"/>
                                        </div>
                                        <div className="ml-2 w-100">
                                            <Stack direction="horizontal" className="mb-1">
                                                <div className="user-chat-name">
                                                    <Link className="link-hover-underline-blue">Arhinful Emmanuel</Link>
                                                    <span className="ml-2 chat-time">
                                                    <RxDotFilled/>8:14 PM
                                                </span>
                                                </div>
                                            </Stack>
                                            <div>
                                                <Stack direction="horizontal" className="message-content-container p-2">
                                                    <div className="message-content">
                                                        Hope, everything nice for your end ckjascnkajndcikasndiasjndkiajns
                                                        ckjascnkajndcikasndiasjndkiajns
                                                        ckjascnkajndcikasndiasjndkiajns
                                                    </div>
                                                    <div className="ms-auto mr-3">
                                                        <IoCheckmarkCircle className="message-checked"/>
                                                    </div>
                                                </Stack>
                                            </div>
                                        </div>
                                    </Stack>
                                )
                            })
                        }

                    </div>
                </div>

                <div className="pt-2 message-input-container">
                    <Stack direction="horizontal">
                        <textarea className="message-input p-2 ml-2" placeholder="Write a message"></textarea>
                        <div className="dropdown-button">
                            <RiArrowDropUpLine/>
                        </div>
                    </Stack>
                    <div className="border-top mt-1 mx-3 pt-3">
                        <Stack direction="horizontal">
                            <Stack direction="horizontal">
                                <span className="icon-buttons"><BsCardImage className="ico"/></span>
                                <span className="icon-buttons"><ImAttachment className="ico"/></span>
                                <span className="icon-buttons"><AiOutlineGif className="ico"/></span>
                            </Stack>
                            <div className="ms-auto">
                                <Stack direction="horizontal">
                                    <div className="mr-2">
                                        <button className="send-message-button px-3">Send</button>
                                    </div>
                                    <div className="send-message-options">
                                        <SlOptions/>
                                    </div>
                                </Stack>
                            </div>
                        </Stack>
                    </div>
                </div>

            </div>
        </>
    )
}

export default withCookies(Chat)
