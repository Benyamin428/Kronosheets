import {Button, Form, Col, Row, Image, Container, Table, Nav, NavDropdown,Navbar, FormControl} from 'react-bootstrap';
import { Link, Switch, Route, BrowserRouter as Router, useHistory , Redirect } from 'react-router-dom';
import axios from 'axios';
import {headShake} from 'react-animations';
import {StyleSheet, css} from 'aphrodite';
import React, { useState } from "react";

//utilising react bootstrap, giving us access to the equivalent XML objects as in the orignal bootstrap. pretty pog?

//XAMPP connection (changed my XAMPP to read from the backend/laravel folder. check the link below to do it to!)
// https://stackoverflow.com/questions/18902887/how-to-configuring-a-xampp-web-server-for-different-root-directory
const API_PATH = 'http://localhost:80/index.php';

//using functional JS because class based pissed me off a little. If you don't like it i can change it ):
function Login() {
    //form states (email variable and set email method + password and set password method)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shouldShake, setShake] = useState(false);
    const myRef = React.createRef();

    //tried to get this shaking button on wrong login thing working but it isn't so kill me.
    //will be back later to sort it out (after thorough researching of aphrodite) but there aren't too many tutorials online
    //so trial and error innit
    const styles = StyleSheet.create({
      headShake: {
          animationName: headShake,
          animationDuration: '30000s'
      }
  });

    //history (need to enable this in every function that uses redirections i believe)
    let history = useHistory();

    //for allowing user to submit (can't submit if they haven't typed anything)
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    //for handling when the user HAS submitted. 
    function handleSubmit(event) {
        event.preventDefault();
        fetchMethod()
    }

    //for contacting the backend (using axios) the backend php only accepts application/json
    const fetchMethod = () => {
      console.log(password);
      axios({
        method: 'post',
        url: `${API_PATH}`,
        headers: { 'content-type': 'application/json' },
        data: {
          'email': email,
          'password': password,
      }
      })
      //for dealing with response from server. haven't figured out how to stop the redirect
      //but i have only spent 5 minutes on it lol
        .then(result => {
          //setEmail(result)
          console.log(typeof result.data, result.data)
          if(result.data){history.push('/mainPage', { from: "Login" })}
          else{//pass
            setShake(true)
          }
        })
        //catches any error returned by the axios connection (didn't connect?)
        .catch(error => console.log({ error: error.message }));
    };

    //the visuals
    return (
    //added this loginBox id for styling purposes
    <div id = "loginBox">
        {/* 
        react bootstrap container class and row class, you **NEED** to include the CSS for the positioning stuff to work
        however, it kinda messed up the styling i made for the login ):
        find the import in the /pages/mainPage.js file (signified with //!, because i have the better comments VSC extensions and i like colours)
        */}
        <Container id = "child" fluid>
            <Row>
                <Col xs={6} md={4}>
                  {/* wasn't sure how to reference the local gif image path so i just did trusty imgur*/}
                <Image src='https://i.imgur.com/EJpdpRm.gif' style={{height:'100px',width:'100px'}} alt ="logo" roundedCircle />
                </Col>
            </Row>
            {/* using the handle submit method to communicate with backend server */}
            <form>
                <Form.Group id = "sections" controlId="formBasicEmail">
                    <Form.Label style = {{color: '#f68800'}}>Email address: </Form.Label>
                    {/* value and the anonymous method to update the state defined at the start */}
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} className = "input" type="email" placeholder="Enter email" />
                </Form.Group>

                {/* controlID is a bootstrap thing i think? sections is for my styling once more */}
                <Form.Group id = "sections" controlId="formBasicPassword">
                <Form.Label style = {{color: '#f68800', padding: '27px'}}>Password: </Form.Label>
                {/* value and the anonymous method to update the state defined at the start */}
                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} className = "input" type="password" placeholder="Password" />
                </Form.Group>
                <br/>
                {/* reiteration of handleSubmit. haven't testing which one ACTUALLY submits, but it works lol */}
                <div>
                  <Button className = {css(styles.headShake)} ref={myRef} onClick={handleSubmit} disabled={!validateForm()} variant="primary" type="submit">
                    Login
                  </Button>
                </div>
                {/* //! inline CSS is kinda trash. should probably reference this in app.css (applied in the pages.js file) */}
                <p style = {{fontSize: '17px'}}>forgot your password? <Link style = {{color: '#f68800'}} to="/mainPage">reset</Link></p>
            </form>
        </Container>
    </div>
    )
}


//exporting this function to be used in pages.js
export {Login}