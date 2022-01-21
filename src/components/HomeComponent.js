import React from 'react';
import 'react-calendar/dist/Calendar.css';
import DJCarousel from './CarouselComponent';
import PanteraCalendar from './CalendarComponent';


function Home(props) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Pantera Event Productions</h1>
                    </div>
                    <div className="col-12 text-center">
                        <h3>Professional Services for Gatherings, Parties and More</h3>
                    </div>
                </div>    
                <div className="row bg-dark no-pad mt-3 mb-3">
                    <div className="col-sm-6 no-pad">
                        <DJCarousel />
                    </div>
                    <div className="col-sm-6 mt-lg-5 mt-md-3">
                        <h1 className="text-light d-lg-block d-none">"Pantera helped make my wedding night memorable."</h1>
                        <h3 className="text-light d-sm-block d-none d-lg-none">"Pantera helped make my wedding night memorable."</h3>
                        <h1 className="text-light mt-3 d-sm-none">"Pantera helped make my wedding night memorable."</h1>
                    </div>
                </div>

                <h2 className="text-center">Check for availability</h2>
                <div className="row m-3">
                    <div className="col-md-6">
                        <h3 className="text-center mt-md-5 mb-md-5">
                            Are We Available?
                        </h3>
                        <h4 className="text-center mt-md-5 mb-md-5">
                            Click on date to see services we have available.
                        </h4>
                    </div>
                    <div className="col-md-6 calendar-component">
                        <PanteraCalendar />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;