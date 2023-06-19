import "./ProfileInfo.css"
import {withCookies} from "react-cookie";
import {Image, Stack} from "react-bootstrap";
import {BiDotsHorizontalRounded} from "react-icons/bi";

const ProfileInfo = ()=>{

    return(
        <>
            <div className="profile-info-container">
                <Stack direction="horizontal" className="px-2">
                    <div className="ms-auto">
                        <span style={{fontSize:13}}>Ad</span>
                        <span className="fs-5 ml-2">
                            <BiDotsHorizontalRounded/>
                        </span>
                    </div>
                </Stack>
                <div className="text-center boost-job-search">
                    Arhinful, boost your job search with Premium
                </div>
                <div className="p-3">
                    <Stack direction="horizontal">
                        <div className="ml-auto mr-2">
                            <Image src="./nii.jpeg" className="profile-info-image"/>
                        </div>
                        <div className="mr-auto ml-2">
                            <Image src="./yiagri.jpg" className="profile-info-image-square"/>
                        </div>
                    </Stack>
                </div>
                <div className="text-center see-who">
                    See who's viewed your profile in the last 90 days
                </div>
                <Stack direction="horizontal" className="my-4">
                    <button className="try-for-free-button mx-auto">Try for Free</button>
                </Stack>
            </div>
        </>
    )
}

export default withCookies(ProfileInfo)
