import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


export default function NavbarHeader() {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">SimpleTableApp</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#">一覧表</Nav.Link>
            </Nav>
        </Navbar>
    );
}