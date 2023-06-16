import "./JobsComponent.css"
import {withCookies} from "react-cookie";
import {Stack} from "react-bootstrap";

const JobsComponent = ()=>{
    return(
        <>
            <div className="main-container">
                <Stack direction="horizontal" gap={3}>
                    <div className="p-2 ms-auto">
                        <button className="card-top-buttons">RECENT</button>
                    </div>
                    <div className="p-2">
                        <button className="card-top-buttons">FULL TIME</button>
                    </div>
                    <div className="p-2">
                        <button className="card-top-buttons">INTERN</button>
                    </div>
                    <div className="p-2">
                        <button className="card-top-buttons">PART TIME</button>
                    </div>
                </Stack>
            </div>
        </>
    )
}

export default withCookies(JobsComponent)
