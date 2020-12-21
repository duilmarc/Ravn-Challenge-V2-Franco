import './CharacterList.css'
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import { AiOutlineRight } from "react-icons/ai";

class CharacterList extends Component {
  render() {
    const characters = this.props.characters.edges || [];
    return (
    <>
        {
          characters.map(({node}, idx) => {
            return (
              <Link className="Reference" key={idx} to={`/${node.id}`}>
                <div className="Character">
                <Row>
                  <Col xs={10} >
                      <h2>
                        {node.name}
                      </h2>
                      <p>{node.species === null ? "Human" : node.species.name } from {node.homeworld.name}</p>
                  </Col>
                  <Col xs={2}>
                    <div className="Icon">
                    <AiOutlineRight />
                    </div>
                  </Col>
                </Row>
                </div>
                <hr/>
              </Link>
            )},this.props.onLoadMore())
        }
    </>
    )
  }
}

export default CharacterList;
