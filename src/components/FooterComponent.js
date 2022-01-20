import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 text-center">
                        <h5 className="text-light">Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-6 text-center">
                        <h5 className="text-light">Contact</h5>
                        <a role="button" className="btn btn-link text-light" href="tel:+12097771553"><i className="fa fa-phone" /> +1(209)777-1553</a><br />
                        <a role="button" className="btn btn-link text-light" href="mailto:Chrisvargas@panteraevents.com"><i className="fa fa-envelope-o" /> Chrisvargas@panteraevents.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;