import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class JHW_Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { user_info : null};
    }
    render() {
        return (
            <Navbar collapseOnSelect expand='lg' bg='light'>
                <Navbar.Brand href='/'>Just H*ckin Write</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='/#'>Write!</Nav.Link>
                        <Nav.Link href='/#'>View Drafts</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href='/#'>User Info Here</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}