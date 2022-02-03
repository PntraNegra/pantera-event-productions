import React from 'react';
import {Card, CardImg, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderShopItem({item}){
    return(
        <Card className="border-0">
            <Link to={`/shop/${item.id}`}>
                <CardImg width="100%" src={item.imageDefault} alt={item.name} />
                <CardTitle className="text-dark text-center">{item.name} - ${item.price}</CardTitle>
            </Link>
            <CardText className="text-center">Quick Add to Cart</CardText>
        </Card>
    );
}
function Shop(props) {

    
    const shop = props.items.map(item => {
        return(
            <div key={item.id} className="col-md-5 m-1">
                <RenderShopItem item={item} />
            </div>
        );
    })

    return (
        <div className="container">
            <div className="row">
                {shop}
            </div>
        </div>
    );
}

export default Shop;