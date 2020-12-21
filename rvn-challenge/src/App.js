import React, { Component } from "react";
import "./App.css";
import HomePage from './pages/homePage'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  } 
  render() {

    return (
      <div className="App">
        <nav className="navbar navbar-rvn fixed-top">
            <p> Ravn Star Wars Registry</p>
        </nav>
        <BrowserRouter>
          <Switch>
            <Route exact path="/:id" component={HomePage}/>
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;