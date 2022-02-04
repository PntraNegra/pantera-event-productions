import React from 'react';
import CheckoutForm from './CheckoutForm';

function renderCheckout({item}){
    <div className="row">
        <div className="col">
            {item.price}
        </div>
    </div>
}

function Checkout(props) {

    const checkoutProp = props.items.map(item => {
        return(
            <div key={item.id}>
                <renderCheckout item={item} />
            </div>  
        );
    })

    return(
        <React.Fragment>
            <div className="container-fluid black mb-3">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Checkout</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <CheckoutForm />
                    </div>
                    <div className="col-md-4 border mb-3 p-2">
                        <div className="row">
                            <div className="col">
                                <h5 className="text-center"><u>Order Summary</u></h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h5 className="text-center">{checkoutProp}</h5>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default Checkout;