import React, {useContext} from 'react';
import {Container, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import {Context} from "../index";
import {JADE_ROUTE} from '../utils/consts'
import logo from '../img/1596760141607_big_vlru 2.png'

const NavBar = () => {
    const {user} = useContext(Context)     //needed just in components that rendered different depended on authorization
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <NavLink href={JADE_ROUTE} style={{display:'flex', alignItems: 'center', color:'black'}}>
                    <img src={logo} alt=""/>
                    <p>JADE AUTO</p>
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="ml-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <Nav.Link href="tel:+79089999929"><span>ТЕЛЕФОН:</span> +7(908) 999-99-29</Nav.Link>

                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;