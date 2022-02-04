import React from 'react';

const HulkHogan = () => {
    return(
        <div className="row align-items-center">
            <div className="order-md-last col-md-2 text-center mb-2 mt-2">
                <h3>Hulk Hogan</h3>
            </div>
            <div className="col-md-2 mb-2 mt-2">
                <img className="d-flex mr-3 img-thumbnail pic" src="/img/behrouz-sasani-cEnSr1WRHUY-unsplash.jpg" alt="Selfie" />
            </div>
            <div className="col-md-8 mb-2 mt-2">
                <p>
                    Lorem ipsum dolor sit amet, id singulis praesent quo, exerci eligendi scaevola nam ut, ex vix inani verterem. In porro quaeque delicata vim, at dicta recteque conclusionemque duo. Cu electram definitiones vis. Pro nibh labitur pertinacia ex. Probo nemore adipisci te sea, an choro veritus tacimates usu. Nec quem quis eu. Inani phaedrum cu per. Vis ignota essent conceptam an, eum augue epicuri ut, ne pro alii timeam platonem. Cum quas nihil docendi cu. Quidam honestatis ad nam. In aliquip viderer vix, eum dicta scribentur in, mei id vide latine. Ius ut dicant alterum. Sea noluisse delicatissimi ut, vidisse numquam repudiandae ei cum.

                </p>
            </div>
        </div>
    )
}

function About() {
    
    return(
        <React.Fragment>
            <div className="container-fluid black mb-3">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Meet the Pantera Team</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                
                
                <div>
                    <HulkHogan />
                </div>
                <hr />
                <div>
                    <HulkHogan />
                </div>
                <hr />
                <div>
                    <HulkHogan />
                </div>
                <hr />
                <div>
                    <HulkHogan />
                </div>
                <hr />
                <div>
                    <HulkHogan />
                </div>
            </div>
        </React.Fragment>
    );
    
}

export default About;