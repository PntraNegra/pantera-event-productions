import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

class CheckoutForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            address: '',
            apt: '',
            city: '',
            state: '',
            zipCode: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert(JSON.stringify(this.state));
        event.preventDefault();

    }

    validate(firstName, lastName, phoneNum, email) {

        const errors = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 2) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or less characters.';
            }
        }

        const reg = /^\d+$/;
        if (this.state.touched.phoneNum && !reg.test(phoneNum)) {
            errors.phoneNum = 'The phone number should contain only numbers.';
        }

        if (this.state.touched.email && !email.includes('@')) {
            errors.email = 'Email should contain a @';
        }

        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }


    render() {
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.phoneNum, this.state.email);

        return (
            <React.Fragment>
                <div className="container">
                    <h5 className="mb-3 mt-3"><u>Please fill out shipping information</u></h5>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="firstName" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        invalid={errors.firstName}
                                        onBlur={this.handleBlur("firstName")}
                                        onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.firstName}</FormFeedback>
                                </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastName" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastName" name="lastName"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    invalid={errors.lastName}
                                    onBlur={this.handleBlur("lastName")}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.lastName}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="address" md={2}>Address</Label>
                            <Col md={10}>
                                <Input type="text" id="address" name="address"
                                    placeholder="Mailing Address"
                                    value={this.state.address}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label md={2}></Label>
                            <Col md={10}>
                                <Input type="text" id="apt" name="apt"
                                    placeholder="Apartment Number"
                                    value={this.state.apt}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="city" md={2}>City</Label>
                            <Col md={10}>
                                <Input type="text" id="city" name="city"
                                    placeholder="City"
                                    value={this.state.city}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="state" md={2}>State</Label>
                            <Col md={10}>
                                <Input type="text" id="state" name="state"
                                    placeholder="State"
                                    value={this.state.state}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="text" md={2}>Zip Code</Label>
                            <Col md={10}>
                                <Input type="text" id="zipCode" name="zipCode"
                                    placeholder="Zip Code"
                                    value={this.state.zipCode}
                                />
                            </Col>
                        </FormGroup>
                        <hr />
                        <h5 className="mb-3 mt-3"><u>Please provide your contact information</u></h5>
                        <FormGroup row>
                            <Label htmlFor="phoneNum" md={2}>Phone Number</Label>
                            <Col md={10}>
                                <Input type="tel" id="phoneNum" name="phoneNum"
                                    placeholder="Phone Number"
                                    value={this.state.phoneNum}
                                    invalid={errors.phoneNum}
                                    onBlur={this.handleBlur("phoneNum")}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.phoneNum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    invalid={errors.email}
                                    onBlur={this.handleBlur("email")}
                                    onChange={this.handleInputChange} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col className="offset-md-2" md={{size: 10}}>
                                <Button className="btn-block" type="submit" color="primary">
                                    Continue to Payment
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </React.Fragment>
        );
    }
}

export default CheckoutForm;