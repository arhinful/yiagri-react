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

                <div className="border p-3 mt-5 w-100">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Control
                                    className="outline-none"
                                    style={{width: "300px"}}
                                    placeholder="what are you looking for?"
                                />
                            </Col>
                            <Col>
                                <select className="form-control outline-none">
                                    <option selected>Select area</option>
                                </select>
                            </Col>
                            <Col>
                                <select className="form-control">
                                    <option selected>All categories</option>
                                </select>
                            </Col>
                            <Col>
                                <Button type="submit" className="button-primary outline-none">SEARCH</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default withCookies(Jobs)
