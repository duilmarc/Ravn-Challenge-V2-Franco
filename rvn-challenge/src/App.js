import React, { Component } from "react";
import "./App.css";
import { Row, Col } from 'react-bootstrap';
import CharacterListQuery  from './components/CharacterList/CharacterList.query'

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
        <div className="body">
          <div className="Registerview">
              <Row>
                <Col xs={4}>
                  <div className="Left">
                    <CharacterListQuery></CharacterListQuery>
                  </div>
                </Col>
                <Col xs={8}>
                  <div className="Right">UserCharacters</div>
                </Col>
              </Row>
          </div>
        </div>
      </div>

    );
  }
}


export default App;