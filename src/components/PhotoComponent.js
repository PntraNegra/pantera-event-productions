import React from 'react';

function Photo() {
    return(
        <React.Fragment>
            <div className="container-fluid black mb-3">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Professional Photographers</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                
                <div className="row row-content align-items-center mt-2 mb-2">
                    <div className="col-md-4 order-md-last">
                        <h2 className="text-md-right">Best in Modesto</h2>
                    </div>
                    <div className="col-md-4">
                        <img className="d-flex mr-3 img-thumbnail" src="/img/djGear.jpg" alt="Breadcrumb Trail Thumbnail" />
                    </div>
                    <div className="col-md-4">
                        <div className="media">
                            <div className="media-body align-self-center">
                                <h3>Lorem ipsum dolor</h3>
                                <p>Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Sed blandit libero volutpat sed cras. </p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                
                <div className="row row-content align-items-center mt-2 mb-2">
                    <div className="col-md-4">
                        <h2>Best of the best</h2>
                    </div>
                    <div className="col-md-4 order-md-last">
                        <img className="d-flex ml-md-3 img-thumbnail" src="/img/photographer.jpg" />
                    </div>
                    <div className="col-md-4">
                        <div className="media">
                            <div className="media-body align-self-center">
                                <h3>Lorem ipsum dolor</h3>
                                <p>Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Sed blandit libero volutpat sed cras. </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <hr />

                <div className="row row-content align-items-center mt-2 mb-2">
                    <div className="col-md-4 order-md-last">
                        <h2 className="text-md-right">Top Notch</h2>
                    </div>
                    <div className="col-md-4">
                        <img className="d-flex mr-3 img-thumbnail" src="/img/video.jpg" alt="Bootstrap Outfitters" />
                    </div>
                    <div className="col-md-4">
                        <div className="media">
                            
                            <div className="media-body align-self-center">
                                <h3>Lorem ipsum dolor</h3>
                                <p>Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Sed blandit libero volutpat sed cras. </p>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Photo;