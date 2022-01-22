import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Reviews from './ReviewsComponent';
import About from './AboutComponent';
import Shop from './ShopComponent';
import SoundLight from './SoundandLighting';
import Dj from './DjComponent';
import GraphicDesign from './GraphicDesignComponent';
import Video from './VideographComponent';
import Photo from './PhotoComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component= {HomePage} />
                    <Route path='/contact' component= {Contact} />
                    <Route path='/reviews' component= {Reviews} />
                    <Route path='/about' component= {About} />
                    <Route path='/shop' component= {Shop} />
                    <Route path='/soundLight' component= {SoundLight} />
                    <Route path='/dj' component= {Dj} />
                    <Route path='/graphicDesign' component= {GraphicDesign} />
                    <Route path='/video' component= {Video} />
                    <Route path='/photo' component= {Photo} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }

}

export default Main;