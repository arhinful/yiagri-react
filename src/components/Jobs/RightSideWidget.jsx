import "./RightSideWidget.css"
import {withCookies} from "react-cookie";
import {Col, Row, Stack} from "react-bootstrap";
import {BsDatabase, BsMap} from "react-icons/bs";

const RightSideWidget = ()=>{

    const categories = [
        "Agronomists",
        "Horticulturists",
        "Animal scientists",
        "Agricultural engineers",
        "Agricultural economists",
        "Agricultural Extensionists",
        "Food scientists",
        "Agricultural researchers",
        "Agribusiness professionals",
        "Environmental scientists and conservationist"
    ]

    const cities = [
        "Cape Coast",
        "Sunyani",
        "Takoradi",
        "Tamale",
        "Accra",
        "Koforidua",
        "Kumasi"
    ]

    return(
        <>
            <Row className="pl-4">

                <Col xs={12} className="widget-card pb-5 pt-4">
                    <h5>Job by Location</h5>
                    <Row>
                        {cities.map((city) => {
                            return(
                                <Col xs={12}>
                                    <button className="location-buttons">
                                        <Stack direction="horizontal" gap={2}>
                                            <div className="text-start">{city}</div>
                                            <div className="ms-auto">37</div>
                                        </Stack>
                                    </button>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>

                <Col xs={12} className="widget-card pb-5 pt-4 mt-4">
                    <h5>Top rated jobs posts</h5>
                    <Row>
                        <Col xs={12}>
                            <div>
                                <img className="d-block w-100" src="/toprated.jpg" alt="First slide"/>
                            </div>
                            <div className="mt-3 mb-2 fs-15">
                                <h5>Creative Art Designer</h5>
                                <span>Premium Labels Limited</span>
                            </div>

                            <div className="my-2 fs-15">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod temporinc ididunt ut dolore magna aliqua.
                            </div>
                            <div className="my-2 fs-15">
                                Job Nature: Full time
                            </div>
                            <div className="my-2 fs-15">
                                <BsMap/> 56/8, Panthapath Dhanmondi Dhaka
                            </div>
                            <div className="my-2 fs-15">
                                <BsDatabase/> 15k - 25k
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col xs={12} className="widget-card pb-5 pt-4 mt-4">
                    <h5>Jobs by Category</h5>
                    <Row>
                        {categories.map((category) => {
                            return(
                                <Col xs={12}>
                                    <button className="location-buttons">
                                        <Stack direction="horizontal" gap={2}>
                                            <div className="text-start">{category}</div>
                                            <div className="ms-auto">37</div>
                                        </Stack>
                                    </button>
                                </Col>
                            )
                        })}
                    </Row>
                </Col>

            </Row>
        </>
    )
}

export default withCookies(RightSideWidget)
