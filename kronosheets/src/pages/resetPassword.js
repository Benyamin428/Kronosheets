import {Button, Form, Col, Row, Image, Container, Table, Nav, NavDropdown,Navbar, FormControl} from 'react-bootstrap';
import { Link, Switch, Route, BrowserRouter as Router, useHistory , Redirect } from 'react-router-dom';
import React, { useState } from "react";

//TODO: connect this to the DB (probably automate the reset process bc of what client said)
function resetPassword({ location }) {
    return (
        <>
            <p>Reset password</p>
            <p>You were redirected from {location.state.from}</p>
        </>
    );
}

export {resetPassword};