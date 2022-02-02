import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';


    
function RenderItem({item}) {
    return (
    <div className="col-md-5 m-1">
        <Card>
            <CardImg top src={item.imageDefault} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    </div>
    );
}

function ShopInfo(props){
        if(props.item) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderItem item={props.item} />
                    </div>
                </div>
            );
        }
        return <div />
    }
export default ShopInfo;