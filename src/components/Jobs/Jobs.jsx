import "./Jobs.css"
import {withCookies} from "react-cookie";
import {Button, Col, Form, Row} from "react-bootstrap";
import SearchForm from "./SearchForm";
import StableCards from "./StableCards";
import MovingCards from "./MovingCards";

const Jobs = (props)=>{
    return(
        <>
            <div className="mt-5 mb-5">
                <div className="text-center">
                    <h2>1500+ Jobs posted last week</h2>
                </div>

                <SearchForm/>

                <div className="text-center mt-4">
                    <span>Search by tags: Tecnology, Business, Consulting, IT Company, Design, Development</span>
                </div>

                <StableCards/>

                <MovingCards/>
            </div>
        </>
    )
}

export default withCookies(Jobs)
