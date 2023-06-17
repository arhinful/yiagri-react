import {withCookies} from "react-cookie";
import {Col, Row, Stack} from "react-bootstrap";
import JobCard from "./JobCard";
import RightSideWidget from "./RightSideWidget";

const JobDetails = ()=>{
    return(
        <>
            <div className="main-container">

                <Row>
                    <Col lg={8}>
                        <Row>

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

export default withCookies(JobDetails)
