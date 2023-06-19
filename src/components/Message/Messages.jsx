import "./Messages.css"
import {withCookies} from "react-cookie";
import {Row, Stack} from "react-bootstrap";
import Chats from "./Chats";
import Chat from "./Chat";
import ProfileInfo from "./ProfileInfo";

const Messages = (props)=>{
    return(
        <>
            <div className="mt-5 row">
                <Stack direction="horizontal" className="p-0 main__container">
                    <Stack direction="horizontal" className="messaging-container">
                        <Chats/>
                        <Chat/>
                    </Stack>
                    <ProfileInfo/>
                </Stack>
            </div>
        </>
    )
}

export default withCookies(Messages)
