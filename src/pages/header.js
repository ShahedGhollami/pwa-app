import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Item><Link to='/'>Home</Link></Nav.Item>
                        <Nav.Item  className="mx-3" ><Link to='/users'>Users</Link></Nav.Item>
                        <Nav.Item ><Link to='/about'>About</Link></Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Header