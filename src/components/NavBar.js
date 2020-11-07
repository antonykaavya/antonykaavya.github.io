import React from 'react';
import './NavBar.css';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <Navbar className="navbar centered-navbar">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav id="nav">
                    <Nav.Link className="nav" href="/">HOME</Nav.Link>
                    <Nav.Link className="nav" href="/AboutMe">ABOUT ME</Nav.Link>
                    <Nav.Link className="nav" href="/Resume">RESUME</Nav.Link>
                    <Nav.Link className="nav" href="/TechNotes">TECH NOTES</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);
