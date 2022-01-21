import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h5 className="text-light">Contact</h5>
                    </div>
                    <div className="col-lg-4 text-center">
                        <a role="button" className="btn btn-link text-light" href="tel:+12097771553"><i className="fa fa-phone" /> +1(209)777-1553</a><br />
                    </div>
                    <div className="col-xl-4 col-lg-5 text-center">
                        <a role="button" className="btn btn-link text-light" href="mailto:Chrisvargas@panteraevents.com"><i className="fa fa-envelope-o" /> Chrisvargas@panteraevents.com</a>
                    </div>
                    <div className="col-xl-4 col-lg-3 text-center">
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;