import React, { Component } from "react";

class CharacterList extends Component {
  handleOnScroll = () => {
    if (this.props.hasnext) {
      this.props.onLoadMore();
    }
  };
  render() {
    if (!this.props.characters && this.props.loading) return <p>Loading....</p>;
    const characters = this.props.characters.edges || [];
    return (
    <>
        {
          characters.map(({node}, idx) => {
            return (
              <div className="link" key={idx} to={`/${node.id}`}>
                <div>
                  <h2>
                    {node.name}
                  </h2>
                  <p>{node.species === null ? "Human" : node.species.name } from {node.homeworld.name}</p>
                </div>
                <hr></hr>
              </div>
            )})
        }
    </>
    )
  }
}

export default CharacterList;
