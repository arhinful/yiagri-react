import "./jobs.css"
import {withCookies} from "react-cookie";
import {Button, Col, Form, Row} from "react-bootstrap";

const Jobs = (props)=>{
    return(
        <>
            <div className="mt-5">
                <div className="text-center">
                    <h2>1500+ Jobs posted last week</h2>
                </div>

                <div className="border p-4 mt-5 form-container">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control
                                    className="outline-none looking-for"
                                    placeholder="what are you looking for?"
                                />
                            </Col>
                            <Col>
                                <select className="form-control outline-none selected-area">
                                    <option selected>Select area</option>
                                </select>
                            </Col>
                            <Col>
                                <select className="form-control all-categories outline-none">
                                    <option selected>All categories</option>
                                </select>
                            </Col>
                            <Col>
                                <Button type="submit" className="search-button default-button outline-none">SEARCH</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>

                <div className="text-center mt-4">
                    <span>Search by tags: Tecnology, Business, Consulting, IT Company, Design, Development</span>
                </div>

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
            </div>
        </>
    )
}

export default withCookies(Jobs)
