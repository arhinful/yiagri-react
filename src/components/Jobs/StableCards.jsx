import "./StableCards.css"
import {Col, Row} from "react-bootstrap";
import {withCookies} from "react-cookie";

const StableCards = ()=>{
    return(
        <>
            <Row className="cards-container">
                <Col className="card m-3 p-4 border-0 text-center">
                    <div>
                        <h5>Searching</h5>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </Col>
                <Col className="card m-3 p-4 border-0 text-center">
                    <div>
                        <h5>Applying</h5>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </Col>
                <Col className="card m-3 p-4 border-0 text-center">
                    <div>
                        <h5>Security</h5>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </Col>
                <Col className="card m-3 p-4 border-0 text-center">
                    <div>
                        <h5>Notifications</h5>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </Col>
            </Row>
        </>
    )
}

export default withCookies(StableCards)
