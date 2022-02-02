import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderShopItem({item}){
    return(
        <Card>
            <Link to={`/shop/${item.id}`}>
                <CardImg width="100%" src={item.imageDefault} alt={item.name} />
                <CardImgOverlay>
                    <CardTitle>{item.name}</CardTitle>
                </CardImgOverlay>
            </Link>
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