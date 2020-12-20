import React, { Component } from "react";
import "./App.css";
import HomePage from './pages/homePage'

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
          <HomePage />
      </div>
    );
  }
}


export default App;