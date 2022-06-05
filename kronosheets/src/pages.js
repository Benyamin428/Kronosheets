import {Button, Form, Col, Row, Image, Container, Table, Nav, NavDropdown,Navbar, FormControl} from 'react-bootstrap';
import { Link, Switch, Route, BrowserRouter as Router, useHistory , Redirect } from 'react-router-dom';
import React, { useState } from "react";
//where app.css is applied
import './App.css';

//imports all other pages to easily pass to index.js
import {Login} from "./pages/login";
import {mainPage} from "./pages/mainPage";
import {resetPassword} from "./pages/resetPassword";

function startPage() {
  //this is where we display login (on a higher level)
    return (
      <Login/>
    );
  };

  //exports to indez.js/ any other js that imports pages.js
  export {startPage, mainPage, resetPassword};