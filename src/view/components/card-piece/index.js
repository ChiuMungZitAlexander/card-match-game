import React, { Component } from 'react'

class Card extends Component {
  constructor (props) {
    super(props);
    this._handleCardClick = this._handleCardClick.bind(this);
  }

  _handleCardClick () {
    this.props.handleCardClick(this.props.index);
  }

  render () {
    return (
      <div className={this.props.flipped ? 'card flipped' : 'card'}
        onClick={this._handleCardClick}>
        {this.props.flipped
          ? this.props.pairIndex
          : ''}
      </div>
    )
  }

}

export default Card
