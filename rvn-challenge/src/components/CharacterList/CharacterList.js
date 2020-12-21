import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

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
                  <h2>
                    {node.name}
                  </h2>
                  <p>{node.species === null ? "Human" : node.species.name } from {node.homeworld.name}</p>
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
