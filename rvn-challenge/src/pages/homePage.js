import React from "react";
import CharacterListQuery  from './../components/CharacterList/CharacterList.query'
import  CharacterInfo from './../components/CharacterInfo/CharacterInfo'

import { Row, Col } from 'react-bootstrap';

function HomePage() {
      return (
        <div className="container-page">
        <Row>
                <Col xs={4}>
                  <div className="Left">
                    <CharacterListQuery />
                  </div>
                </Col>
                <Col xs={8}>
                  <div className="Right">
                    <CharacterInfo />
                  </div>
                </Col>
        </Row>
        </div>
      );
  }
  
  
  
  export default HomePage;