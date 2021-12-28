import React from 'react';

function Home(props) {
    return (
        <React.Fragment>
            <div className="container">
            <div className="row row-content">
                <div class="col-md-8 mx-auto">
                    <div id="homeCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#homeCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#homeCarousel" data-slide-to="1"></li>
                            <li data-target="#homeCarousel" data-slide-to="2"></li>
                            <li data-target="#homeCarousel" data-slide-to="3"></li>
                            <li data-target="#homeCarousel" data-slide-to="4"></li>
                            <li data-target="#homeCarousel" data-slide-to="5"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="/img/alfonso-scarpa-2LGx4cQAMks-unsplash.jpg" alt="random" />
                                <div className="carousel-caption">
                                    <h3>Random Text</h3>
                                    <p className="d-none d-sm-block">Some random new thing we be doing.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="/img/gabriel-barletta-OuLVg5ZKphI-unsplash.jpg" alt="random" />
                                <div className="carousel-caption">
                                    <h3>Haters gunna hate</h3>
                                    <p className="d-none d-sm-block">Haters gunna hate, but we dont care we play.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="/img/john-fornander-yvs7ZH3AZNM-unsplash.jpg" alt="random" />
                                <div className="carousel-caption">
                                    <h3>Hello</h3>
                                    <p className="d-none d-sm-block">Hello goodbye, what you doing foo? lets get some toast.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="/img/alfonso-scarpa-2LGx4cQAMks-unsplash.jpg" alt="random" />
                                <div className="carousel-caption">
                                    <h3>Random Text</h3>
                                    <p className="d-none d-sm-block">Some random new thing we be doing.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="/img/ryoji-hayasaka-0UZj73PQVew-unsplash.jpg" alt="random" />
                                <div className="carousel-caption">
                                    <h3>Haters gunna hate</h3>
                                    <p className="d-none d-sm-block">Haters gunna hate, but we dont care we play.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="/img/gabriel-barletta-OuLVg5ZKphI-unsplash.jpg" alt="random" />
                                <div className="carousel-caption">
                                    <h3>Hello</h3>
                                    <p className="d-none d-sm-block">Hello goodbye, what you doing foo? lets get some toast.</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            <span className="sr-only">Next</span>
                        </a>
                            <button className="btn btn-danger btn-sm" id="carouselButton">
                                <i className="fa fa-pause"></i>
                            </button>
                    </div>
                </div>
            </div>

            <h2>Check for availability</h2>

            <div className="container-fluid mb-4">
                <div className="row">
                    <div className="col month">December</div>
                </div>
                <div className="row">
                    <div className="col day calendar-days">Sun</div>
                    <div className="col day calendar-days">Mon</div>
                    <div className="col day calendar-days">Tue</div>
                    <div className="col day calendar-days">Wed</div>
                    <div className="col day calendar-days">Thu</div>
                    <div className="col day calendar-days">Fri</div>
                    <div className="col day calendar-days">Sat</div>
                </div>
                <div className="row">
                    <div className="col calendar">28</div>
                    <div className="col calendar">29</div>
                    <div className="col calendar">30</div>
                    <div className="col calendar">1</div>
                    <div className="col calendar">2</div>
                    <div className="col calendar">3</div>
                    <div className="col calendar">4</div>
                </div>
                <div className="row">
                    <div className="col calendar">5</div>
                    <div className="col calendar">6</div>
                    <div className="col calendar">7</div>
                    <div className="col calendar">8</div>
                    <div className="col calendar">9</div>
                    <div className="col calendar">10</div>
                    <div className="col calendar">11</div>
                </div>
                <div className="row">
                    <div className="col calendar">12</div>
                    <div className="col calendar">13</div>
                    <div className="col calendar">14</div>
                    <div className="col calendar">15</div>
                    <div className="col calendar">16</div>
                    <div className="col calendar">17</div>
                    <div className="col calendar">18</div>
                </div>
                <div className="row">
                    <div className="col calendar">19</div>
                    <div className="col calendar">20</div>
                    <div className="col calendar">21</div>
                    <div className="col calendar">22</div>
                    <div className="col calendar">23</div>
                    <div className="col calendar">24</div>
                    <div className="col calendar">25</div>
                </div>
                <div className="row">
                    <div className="col calendar">26</div>
                    <div className="col calendar">27</div>
                    <div className="col calendar">28</div>
                    <div className="col calendar">29</div>
                    <div className="col calendar">30</div>
                    <div className="col calendar">31</div>
                    <div className="col calendar">1</div>
                </div>
            </div>
        </div>
    </React.Fragment>
    );
}

export default Home;