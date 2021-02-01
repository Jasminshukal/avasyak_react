import React, { Component,useState } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from "react-router-dom";

class Heder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevVal: 'test',
      isLoggedIn: ''
    }
  }

  render() {
    
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/home">Avshyak</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/add">Add Product</Link>
          </Nav>
          <Nav>
            
            {this.state.isLoggedIn ? (
              <Link to="/login">Logout {this.state.prevVal}</Link>
            ) : (
              <Link to="/login">Login {this.state.prevVal}</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Heder;
