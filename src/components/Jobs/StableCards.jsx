import "./StableCards.css"
import {Col, Row} from "react-bootstrap";
import {withCookies} from "react-cookie";

const StableCards = ()=>{

    const headings = [
        "Searching",
        "Applying",
        "Security",
        "Notifications"
    ]

    return(
        <>
            <Row className="cards-container">
                {headings.map((header)=>{
                    return(
                        <Col className="card m-3 p-4 border-0 text-center">
                            <div>
                                <h5>Searching</h5>
                            </div>
                            <div style={{fontSize:15}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing.
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default withCookies(StableCards)
