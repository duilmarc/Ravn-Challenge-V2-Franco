import React from "react";
import CharacterListQuery  from './../components/CharacterList/CharacterList.query'
import { Row, Col } from 'react-bootstrap';

function HomePage() {
      return (
        <div className="container-page">
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
      );
  }
  
  
  
  export default HomePage;