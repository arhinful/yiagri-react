import "./JobDetails.css"
import {withCookies} from "react-cookie";
import {Col, Row} from "react-bootstrap";
import JobCard from "./JobCard";
import RightSideWidget from "./RightSideWidget";
const JobDetails = (props)=>{
    return(
        <>
            <div className="main-container mb-5">

                <Row>
                    <Col lg={8}>
                        <Row>
                            <JobCard/>

                            <Col xs={12} className="card-container mt-2">
                                <h3>Whom we are looking for</h3>
                                <div className="card-data">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                    deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
                                    error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                                    ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                    fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                    consectetur.

                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur.
                                </div>
                            </Col>

                            <Col xs={12} className="card-container mt-4">
                                <h3>Experience Requirements</h3>
                                <div className="card-data">
                                    {
                                        Array(5).fill(0).map((_) => {
                                            return(
                                                <div className="my-2">
                                                    <span className="bullet"></span>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor
                                                    incididunt ut labore et dolore magna aliquaut enim ad minim veniam.
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Col>

                            <Col xs={12} className="card-container mt-4">
                                <h3>Job Features & Overviews</h3>
                                <div className="card-data">
                                    {
                                        Array(4).fill(0).map((_) => {
                                            return(
                                                <div className="my-2">
                                                    <span className="bullet"></span>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor
                                                    incididunt ut labore et dolore magna aliquaut enim ad minim veniam.
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Col>

                            <Col xs={12} className="card-container mt-4">
                                <h3>Education Requirements</h3>
                                <div className="card-data">
                                    {
                                        Array(3).fill(0).map((_) => {
                                            return(
                                                <div className="my-2">
                                                    <span className="bullet"></span>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliquaut enim
                                                    ad minim veniam.
                                                </div>
                                            )
                                        })
                                    }
                                </div>
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

export default withCookies(JobDetails)
