import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DJCarousel from './CarouselComponent';
import PanteraCalendar from './CalendarComponent';


function Home(props) {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Pantera Event Productions</h2>
                    </div>
                    <div className="col-12 text-center">
                        <h4>Professional Services for Gatherings, Parties and More</h4>
                    </div>
                </div>    
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <DJCarousel />
                    </div>
                </div>

                <h2 className="text-center">Check for availability</h2>
                <div className="row m-3">
                    <div className="col calendar-component">
                        <PanteraCalendar />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Home;