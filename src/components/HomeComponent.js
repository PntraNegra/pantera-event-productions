import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import 'react-calendar/dist/Calendar.css';
import DJCarousel from './CarouselComponent';
import PanteraCalendar from './CalendarComponent';


function Home() {
    return (
        <React.Fragment>
            <div className="container-fluid black mb-3">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Pantera Event Productions</h1>
                    </div>
                    <div className="col-12 text-center">
                        <h3>Professional Services for Gatherings, Parties and More</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                

                <div className="row">
                    <div className="col-sm-6 mt-1 mb-1">
                    <a href="/dj" className="text-dark">
                        <Card>
                            <CardImg
                            alt="DJ Services Picture"
                            src="/img/djGear.jpg"
                            top
                            width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    DJ Services
                                </CardTitle>
                                <CardText>
                                    Professional DJ services for weddings, graduations, parties and more!
                                </CardText>
                            </CardBody>
                        </Card>
                    </a>
                    </div>
                    <div className="col-sm-6 mt-1 mb-1">
                        <a href="/graphicDesign" className="text-dark">
                            <Card>
                                <CardImg
                                alt="Graphic Design Services Image"
                                src="/img/graphicDesign.jpg"
                                top
                                width="100%"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Graphic Design
                                    </CardTitle>
                                    <CardText>
                                        Professional Graphic Designers to create beautiful designs and graphics guaranteed to capture attention!
                                    </CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 mt-1 mb-1">
                        <a href="/video" className="text-dark">
                            <Card>
                                <CardImg
                                alt="Video Services Image"
                                src="/img/video.jpg"
                                top
                                width="100%"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Videography
                                    </CardTitle>
                                    <CardText>
                                        Hire our experienced video producers, on set, ready for take 1. They create scenes that lasts a life time.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </div>
                    <div className="col-sm-6 mt-1 mb-1">
                        <a href="/photo" className="text-dark">
                            <Card>
                                <CardImg
                                alt="Photography Services Image"
                                src="/img/photographer.jpg"
                                top
                                width="100%"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Photography
                                    </CardTitle>
                                    <CardText>
                                        Professional photographers ready to capture those memorable moments that last a lifetime.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 mt-1 mb-1">
                        <a href="/soundLight" className="text-dark">
                            <Card>
                                <CardImg
                                alt="Sound and Lighting Services Image"
                                src="/img/soundandlighting.jpg"
                                top
                                width="100%"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Sound &amp; Lighting
                                    </CardTitle>
                                    <CardText>
                                        Professional grade sound and lighting equipment at your disposal.
                                    </CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </div>
                    <div className="col-sm-6 mt-1 mb-1">
                        <a href="/shop" className="text-dark">
                            <Card>
                                <CardImg
                                alt="Shop Image"
                                src="/img/shopping.jpg"
                                top
                                width="100%"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        Shop
                                    </CardTitle>
                                    <CardText>
                                        Dress like the Pantera team and grab some exclusive Pantera gear!
                                    </CardText>
                                </CardBody>
                            </Card>
                        </a>
                    </div>
                </div>

                <div className="row bg-dark no-pad mt-3 mb-3 gradient-sm">
                    <div className="col-sm-6 no-pad">
                        <DJCarousel />
                    </div>
                    <div className="col-sm-6 mt-lg-5 mt-md-3">
                        <h1 className="text-light d-lg-block d-none object-align-center">"Pantera helped make my wedding night memorable."</h1>
                        <h3 className="text-light d-sm-block d-none d-lg-none object-align-center">"Pantera helped make my wedding night memorable."</h3>
                        <h1 className="text-light mt-3 d-sm-none object-align-center">"Pantera helped make my wedding night memorable."</h1>
                        <h5 className="text-light">- an anonymous client</h5>
                    </div>
                </div>

                <h1 className="text-center m-4">Check For Your Date</h1>
                <div className="row mt-3 mb-3">
                    <div className="col-md-6">
                        <h3 className="text-center mt-md-3 mb-md-3 pt-3">
                            Are We available?
                        </h3>
                        <h4 className="text-center mt-md-3 mb-md-3">
                            Click on a date to see the services we have available.
                        </h4>
                    </div>
                    <div className="no-pad col-md-6 calendar-component">
                        <PanteraCalendar />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;