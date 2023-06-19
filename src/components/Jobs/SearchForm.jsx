import "./SearchForm.css"
import {withCookies} from "react-cookie";
import {Button, Col, Form, Row} from "react-bootstrap";
import categories from "../../Models/categories";
import cities from "../../Models/cities";

const SearchForm = ()=>{
    return(
        <>
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
                                {
                                    cities.map((city, index)=>(<option key={index}>{city}</option>))
                                }
                            </select>
                        </Col>
                        <Col>
                            <select className="form-control all-categories outline-none">
                                <option selected>All Categories</option>
                                {
                                    categories.map((category, index)=>{
                                        return (
                                            <option key={category.field} >{category.profession}</option>
                                        )
                                    })
                                }
                            </select>
                        </Col>
                        <Col>
                            <Button type="submit" className="search-button default-button outline-none">SEARCH</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default withCookies(SearchForm)
