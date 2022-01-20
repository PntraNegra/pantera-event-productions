import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props) {
        super(props);

        this.toggleNav=this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <React.Fragment>
                <Navbar className="mb-4" dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto"><img src="/img/logoGold.png" width="30" alt="Logo" />Pantera</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/reviews">
                                        <i className="fa fa-star fa-lg" /> Reviews
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <i className="fa fa-address-card fa-lg" /> Contact
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/shop">
                                        <i className="fa fa-shopping-cart fa-lg" /> Shop
                                    </NavLink>
                                </NavItem>
                                <NavItem className="dropdown">
                                    <NavLink className="nav-link dropdown-toggle" to="#dropDown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                                        <i className="fa fa-list fa-lg" /> Services
                                    </NavLink>
                                    <NavItem className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropDown">
                                        <NavLink className="dropdown-item" to="/dj"> Dj</NavLink>
                                        <NavLink className="dropdown-item" to="/graphicdesign"> Graphic Design</NavLink>
                                        <NavLink className="dropdown-item" to="/videography"> Videography</NavLink>
                                        <NavLink className="dropdown-item" to="/soundlighting"> Sound-and-Lighting</NavLink>
                                    </NavItem>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;