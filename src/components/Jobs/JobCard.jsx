import "./JobCard.css"
import {withCookies} from "react-cookie";
import {Col, Image, Row, Stack} from "react-bootstrap";
import {BsDatabase, BsHeart, BsMap} from "react-icons/bs";
import {Link} from "react-router-dom";

const JobCard = (props)=>{
    return(
        <>
            <Col xs={12} className="my-3">
                <Row>
                    <Col xs={12} className="card-container">
                        <Row>
                            <Col xs={3}>
                                <div className="my-4">
                                    <Image src="/yiagri.png" width={80}/>
                                </div>
                                <div>
                                    <button className="card-buttons fs-15 mb-2">Art</button>
                                    <button className="card-buttons fs-15 mb-2">Media</button>
                                    <button className="card-buttons fs-15 mb-2">Design</button>
                                </div>
                            </Col>
                            <Col xs={9}>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="text-start">
                                        <Link to="jobs/1" className="text-decoration-none">
                                            <h5>{props.title}</h5>
                                        </Link>

                                        <span>Premium Labels Limited</span>
                                    </div>
                                    <div className="ms-auto">
                                        <button className="card-right-buttons fs-15 mr-2">
                                            <BsHeart/>
                                        </button>
                                        <Link to="jobs/1">
                                            <button className="card-right-buttons fs-15">APPLY</button>
                                        </Link>
                                    </div>
                                </Stack>
                                <div className="my-2 job-content fs-15">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod temporinc ididunt ut dolore magna aliqua.
                                </div>
                                <div className="my-2 job-info fs-15">
                                    Job Nature: Full time
                                </div>
                                <div className="my-2 job-info fs-15">
                                    <BsMap/> 56/8, Panthapath Dhanmondi Dhaka
                                </div>
                                <div className="my-2 job-info fs-15">
                                    <BsDatabase/> 15k - 25k
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </Col>
        </>
    )
}

export default withCookies(JobCard)
