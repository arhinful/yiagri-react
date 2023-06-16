import "./MovingCards.css"
import {withCookies} from "react-cookie";
import {Button, Col, Row} from "react-bootstrap";

const MovingCards = ()=>{
    return(
        <>
            <Row className="mt-5" noGutters={false}>
                <Col lg={6} className="bg-dark p-3">
                    <div className="text-white">
                        <h5>Creative Designer</h5>
                    </div>
                    <div>
                        <h6 className="font-weight-bolder second-header">Los Angeles</h6>
                    </div>
                    <Row className="card-content">
                        <Col xs={2}>
                            <Button className="font-weight-lighter view-job-button" size="sm">
                                VIEW JOB POST
                            </Button>
                        </Col>
                        <Col xs={9}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores at
                            cupiditate delectus ex excepturi exercitationem fugit impedit in libero perspiciatis quas.
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default withCookies(MovingCards)
