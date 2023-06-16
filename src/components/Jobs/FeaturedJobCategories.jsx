import "./FeaturedJobCategories.css"
import {withCookies} from "react-cookie";
import {Col, Image, Row} from "react-bootstrap";

const FeaturedJobCategories = ()=>{
    return(
        <>
            <Row className="mt-4">
                <Col className="card icon-container shadow-lg m-3 p-4 text-center">
                    <div className="mb-3">
                        <Image src="/icons/icon1.png"/>
                    </div>
                    Farming
                </Col>
                <Col className="card icon-container shadow-lg m-3 p-4 text-center">
                    <div className="mb-3">
                        <Image src="/icons/icon2.png"/>
                    </div>
                    Farming
                </Col>
                <Col className="card icon-container shadow-lg m-3 p-4 text-center">
                    <div className="mb-3">
                        <Image src="/icons/icon3.png"/>
                    </div>
                    Farming
                </Col>
                <Col className="card icon-container shadow-lg m-3 p-4 text-center">
                    <div className="mb-3">
                        <Image src="/icons/icon4.png"/>
                    </div>
                    Farming
                </Col>
                <Col className="card icon-container shadow-lg m-3 p-4 text-center">
                    <div className="mb-3">
                        <Image src="/icons/icon5.png"/>
                    </div>
                    Farming
                </Col>
                <Col className="card icon-container shadow-lg m-3 p-4 text-center">
                    <div className="mb-3">
                        <Image src="/icons/icon6.png"/>
                    </div>
                    Farming
                </Col>
            </Row>
        </>
    )
}

export default withCookies(FeaturedJobCategories)
