import "./JobsComponent.css"
import {withCookies} from "react-cookie";
import {Col, Image, Row, Stack} from "react-bootstrap";
import JobCard from "./JobCard";

const JobsComponent = ()=>{
    return(
        <>
            <div className="main-container">

                <Row>
                    <Col lg={8}>
                        <Row>
                            <Col xs={12}>
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
                            </Col>
                            <JobCard/>
                        </Row>

                    </Col>
                    <Col lg={4}>

                    </Col>
                </Row>

            </div>
        </>
    )
}

export default withCookies(JobsComponent)
