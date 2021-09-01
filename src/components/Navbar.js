import React, { Component } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';


export default class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Posts</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#">Features</Nav.Link>
                            <Nav.Link href="#">about</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
