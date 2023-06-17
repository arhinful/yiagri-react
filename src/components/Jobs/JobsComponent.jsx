import "./JobsComponent.css"
import {withCookies} from "react-cookie";
import {Col, Row, Stack} from "react-bootstrap";
import JobCard from "./JobCard";
import RightSideWidget from "./RightSideWidget";

const JobsComponent = ()=>{
    return(
        <>
            <div className="main-container">

                <Row>
                    <Col lg={8}>
                        <Row>
                            <Col xs={12}>
                                <Stack direction="horizontal">
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
                            <JobCard/>
                            <JobCard/>
                            <JobCard/>

                            <Col className="mt-4">
                                <button className="default-button" style={{paddingTop: 7, paddingBottom: 7}}>Load More</button>
                            </Col>
                        </Row>

                    </Col>
                    <Col lg={4}>
                        <RightSideWidget/>
                    </Col>
                </Row>

            </div>
        </>
    )
}

export default withCookies(JobsComponent)
