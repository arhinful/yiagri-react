import "./Jobs.css"
import {withCookies} from "react-cookie";
import {Button, Col, Form, Row} from "react-bootstrap";
import SearchForm from "./SearchForm";
import StableCards from "./StableCards";
import CarouselComponent from "./CarouselComponent";
import FeaturedJobCategories from "./FeaturedJobCategories";
import JobsComponent from "./JobsComponent";

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

                <CarouselComponent/>

                <div className="text-center featured-job-header mb-4">
                    <h1>Featured Job Categories</h1>
                    <div>
                        Who are in extremely love with eco friendly system.
                    </div>
                </div>

                <FeaturedJobCategories/>

                <JobsComponent/>

            </div>
        </>
    )
}

export default withCookies(Jobs)
