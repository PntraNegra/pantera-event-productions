import React from 'react';
import { Card, CardImg } from 'reactstrap';

    
function RenderItem({item}) {
    return (
    <div className="col-md-5 m-1">
        <Card>
            <CardImg top src={item.imageDefault} alt={item.name} />
        </Card>
    </div>
    );
}

function RenderInformation({item}) {
    return (
        <div className="col-md-5 m-1">
            <div className="row">
                <div className="col">
                    <h3 className="text-center">{item.name} - ${item.price}</h3>
                </div>
            </div>
            <div className="row m-3">
                <div className="col">
                    {item.description}
                </div>
            </div>
            <form id="itemForm">
                <div className="form-group row">
                    <label className="col-form-label col-3" htmlFor="shirtSize">Shirt Size</label>
                    <div className="col">
                        <select className="form-control col" name="shirtSize" id="shirtSize">
                            <option value="select">Select...</option>
                            <option value="XS">Extra-Small</option>
                            <option value="S">Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                            <option value="XL"> Extra-Large</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-3" htmlFor="quantity">Quantity</label>
                    <div className="col">
                        <select className="form-control col" name="quantity" id="quantity">
                            <option value="select">Select...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-form-label col-3" htmlFor="shirtSize">Shirt Color</label>
                    <div className="col">
                        <select className="form-control col" name="shirtSize" id="shirtSize">
                            <option value="select">Select...</option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                            <option value="red">Red</option>
                            <option value="blue">Blue</option>
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col">
                        <button type="submit" className="btn btn-primary">Add to Cart - 0</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

function ShopInfo(props){
        if(props.item) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderItem item={props.item} />
                        <RenderInformation item={props.item} />
                    </div>
                </div>
            );
        }
        return <div />
    }
export default ShopInfo;