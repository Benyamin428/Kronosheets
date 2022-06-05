import {Button, Form, Col, Row, Image, Container, Table, Nav, NavDropdown,Navbar, FormControl} from 'react-bootstrap';
import { Link, Switch, Route, BrowserRouter as Router, useHistory , Redirect } from 'react-router-dom';
import React, { useState } from "react";
//! import 'bootstrap/dist/css/bootstrap.min.css';

//TODO: add a way of dynamically allocating the type of information/page layout for each type of user
//TODO: in my database i have associated the types of users to integers:
//0 - admin,
//1 - finance team member,
//2 - consultant,
//3 - consultant line manager

//major bullshittery happening here
//literally spent 10 minutes on this page and copy + pasted from the react-bootstrap page to make something KIND OF usable lol
//https://react-bootstrap.github.io/getting-started/introduction/
function mainPage() {

    //searched up how to populate tables and this solution came up. pretty cool
    //will hook the main page to the back end eventually (to pull the associated timesheets and all that jazz)
    //i assume we won't need too much to show off the functionality (it should be easy dw!)
    const createTable = () => {
        let table = []
    
        for (let i = 0; i < 100; i++) {
          table.push(<tr>
            {
                <th>{i}</th>
            }
            {
                <th>Savings</th>
            }
            {
                <th>Month</th>
            }
            {
                <th>Savings</th>
            }
          </tr>)
        }
        return table
      }

    //again, the main deal happening here, the display
    return (
        <div className="mainPage">
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        <main>
        <Row>
            <Col md={10}>
                <Container style={{margin:'2px'}} fluid id = "box">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {createTable()}
                                </tbody>
                            </Table>
                </Container>
            </Col>
            <Col md={2}>
                <p>here</p>
            </Col>
        </Row>
        </main>
    </div>
    )
};

export {mainPage}