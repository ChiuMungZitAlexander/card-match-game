import React, { Component } from 'react'

class Card extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clicked: false
    }
    this._handleCardClick = this._handleCardClick.bind(this);
  }

  _handleCardClick () {
    this.setState({
      clicked: true
    });
    this.props.handleCardClick(this.props.index);
  }

  render () {
    return (
      <div className={this.state.clicked ? 'card-flipped' : 'card'}
        onClick={this._handleCardClick}>
        {this.state.clicked
          ? this.props.index
          : ''}
      </div>
    )
  }

}

export default Card
