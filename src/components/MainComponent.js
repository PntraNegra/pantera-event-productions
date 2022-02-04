import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Shop from './ShopComponent';
import SoundLight from './SoundandLighting';
import Dj from './DjComponent';
import GraphicDesign from './GraphicDesignComponent';
import Video from './VideographComponent';
import Photo from './PhotoComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ITEMS } from '../shared/items';
import ShopInfo from './ShopInfoComponent';
import Checkout from './Checkout';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: ITEMS,
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }


        const ItemWithId = ({match}) => {
            return(

                <ShopInfo item={this.state.items.filter(item => item.id === +match.params.itemId)[0]} />
                
            );
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component= {HomePage} />
                    <Route path='/contact' component= {Contact} />
                    <Route path='/about' component= {About} />
                    <Route exact path='/shop' render={() => <Shop items={this.state.items} />} />
                    <Route path='/shop/:itemId' component={ItemWithId} />
                    <Route path='/soundLight' component= {SoundLight} />
                    <Route path='/dj' component= {Dj} />
                    <Route path='/graphicDesign' component= {GraphicDesign} />
                    <Route path='/video' component= {Video} />
                    <Route path='/photo' component= {Photo} />
                    <Route path='/checkout' render={() => <Checkout items={this.state.items} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }

}

export default Main;