import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { useHistory } from "react-router-dom";
import { Route, Switch , BrowserRouter as Router} from "react-router-dom";
import { startPage, mainPage, resetPassword} from "./pages";


//main file for the website i'm guessing (index sounds very HTML/PHP to me)
//router for switching between pages if the history deems it (this is why the import from pages.js is important)
ReactDOM.render(
      <Router>
        <Switch>
          <Route exact path="/" component={startPage} />
          <Route exact path="/mainPage" component={mainPage} />
          <Route exact path="/resetPassword" component={resetPassword} />
        </Switch>
      </Router>,

      //test

  //gets the root of the HTML page to mess with
  document.getElementById('root')
);

