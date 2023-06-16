import "./JobCard.css"
import {withCookies} from "react-cookie";
import {Col, Image, Row, Stack} from "react-bootstrap";

const JobCard = ()=>{
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
                                    <button className="card-buttons mb-2">Art</button>
                                    <button className="card-buttons mb-2">Media</button>
                                    <button className="card-buttons mb-2">Design</button>
                                </div>
                            </Col>
                            <Col xs={9}>
                                <Stack direction="horizontal" gap={3}>
                                    <div className="p-2 text-start">
                                        <h4>Creative Art Design</h4>
                                        <span>Premium Labels Limited</span>
                                    </div>
                                    <div className="p-2 ms-auto">
                                        <button className="card-right-buttons mr-2">FU</button>
                                        <button className="card-right-buttons">APPLY</button>
                                    </div>
                                </Stack>
                                <div className="my-2">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                    eiusmod temporinc ididunt ut dolore magna aliqua.
                                </div>
                                <div className="my-2">
                                    Job Nature: Full time
                                </div>
                                <div className="my-2">
                                    56/8, Panthapath Dhanmondi Dhaka
                                </div>
                                <div className="my-2">
                                    15k - 25k
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
