import "./CarouselComponent.css"
import {withCookies} from "react-cookie";
import {Button, Carousel, Col, Image, Row} from "react-bootstrap";

const CarouselComponent = ()=>{
    return(
        <>
            <Row className="mt-5">
                <Col className="bg-dark p-3 m-2">
                    <div className="text-white">
                        <h5>Creative Designer</h5>
                    </div>
                    <div>
                        <h6 className="font-weight-bolder second-header">Los Angeles</h6>
                    </div>
                    <div className="card-content">
                        <Row>
                            <Col xs={2} className="pt-2">
                                <Image width={70} src="/joblogo.png"/>
                            </Col>
                            <Col>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores at
                                cupiditate delectus ex excepturi exercitationem fugit impedit in libero perspiciatis quas.
                            </Col>
                        </Row>
                        <Button className="font-weight-lighter default-button mt-3" size="sm">
                            VIEW JOB POST
                        </Button>
                    </div>
                </Col>
                <Col className="bg-dark p-3 m-2">
                    <div className="text-white">
                        <h5>Creative Designer</h5>
                    </div>
                    <div>
                        <h6 className="font-weight-bolder second-header">Los Angeles</h6>
                    </div>
                    <div className="card-content">
                        <Row>
                            <Col xs={2} className="pt-2">
                                <Image width={70} src="/joblogo.png"/>
                            </Col>
                            <Col>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores at
                                cupiditate delectus ex excepturi exercitationem fugit impedit in libero perspiciatis quas.
                            </Col>
                        </Row>
                        <Button className="font-weight-lighter default-button mt-3" size="sm">
                            VIEW JOB POST
                        </Button>
                    </div>
                </Col>
            </Row>

            {/*<Carousel touch={true}>*/}
            {/*    <Carousel.Item>*/}
            {/*        <div className="bg-dark p-3 m-2">*/}
            {/*            <div className="text-white">*/}
            {/*                <h5>Creative Designer</h5>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <h6 className="font-weight-bolder second-header">Los Angeles</h6>*/}
            {/*            </div>*/}
            {/*            <div className="card-content">*/}
            {/*                <Row>*/}
            {/*                    <Col xs={2} className="pt-2">*/}
            {/*                        <Image width={70} src="/joblogo.png"/>*/}
            {/*                    </Col>*/}
            {/*                    <Col>*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores at*/}
            {/*                        cupiditate delectus ex excepturi exercitationem fugit impedit in libero perspiciatis quas.*/}
            {/*                    </Col>*/}
            {/*                </Row>*/}
            {/*                <Button className="font-weight-lighter default-button mt-3" size="sm">*/}
            {/*                    VIEW JOB POST*/}
            {/*                </Button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Carousel.Item>*/}
            {/*    <Carousel.Item>*/}
            {/*        <div className="bg-dark p-3 m-2">*/}
            {/*            <div className="text-white">*/}
            {/*                <h5>Creative Designer</h5>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <h6 className="font-weight-bolder second-header">Los Angeles</h6>*/}
            {/*            </div>*/}
            {/*            <div className="card-content">*/}
            {/*                <Row>*/}
            {/*                    <Col xs={2} className="pt-2">*/}
            {/*                        <Image width={70} src="/joblogo.png"/>*/}
            {/*                    </Col>*/}
            {/*                    <Col>*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores at*/}
            {/*                        cupiditate delectus ex excepturi exercitationem fugit impedit in libero perspiciatis quas.*/}
            {/*                    </Col>*/}
            {/*                </Row>*/}
            {/*                <Button className="font-weight-lighter default-button mt-3" size="sm">*/}
            {/*                    VIEW JOB POST*/}
            {/*                </Button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Carousel.Item>*/}
            {/*    <Carousel.Item>*/}
            {/*        <div className="bg-dark p-3 m-2">*/}
            {/*            <div className="text-white">*/}
            {/*                <h5>Creative Designer</h5>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <h6 className="font-weight-bolder second-header">Los Angeles</h6>*/}
            {/*            </div>*/}
            {/*            <div className="card-content">*/}
            {/*                <Row>*/}
            {/*                    <Col xs={2} className="pt-2">*/}
            {/*                        <Image width={70} src="/joblogo.png"/>*/}
            {/*                    </Col>*/}
            {/*                    <Col>*/}
            {/*                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto asperiores at*/}
            {/*                        cupiditate delectus ex excepturi exercitationem fugit impedit in libero perspiciatis quas.*/}
            {/*                    </Col>*/}
            {/*                </Row>*/}
            {/*                <Button className="font-weight-lighter default-button mt-3" size="sm">*/}
            {/*                    VIEW JOB POST*/}
            {/*                </Button>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Carousel.Item>*/}
            {/*</Carousel>*/}

        </>
    )
}

export default withCookies(CarouselComponent)
