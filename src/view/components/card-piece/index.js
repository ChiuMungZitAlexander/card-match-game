import React, { Component } from 'react'

class Card extends Component {
  constructor (props) {
    super(props);
    this._handleCardClick = this._handleCardClick.bind(this);
  }

  _handleCardClick () {
    if (this.props.flipped) {
      return;
    }
    this.props.handleCardClick(this.props.index, this.props.pairIndex);
  }

  _selectBackgroundByPairIndex (pairIndex) {
    switch (pairIndex) {
      case 0:
        return 'dc';
      case 1:
        return 'ga';
      case 2:
        return 'kb';
      case 3:
        return 'kd';
      case 4:
        return 'ki';
      case 5:
        return 'kl';
      case 6:
        return 'lbj';
      case 7:
        return 'sc';
      default:
        return 'kb';
    }
  }

  render () {
    const flipped = this.props.flipped;
    return (
      <div className='card-wrapper' onClick={this._handleCardClick}>
        <div className={flipped ? 'card flipped' : 'card'} />
        <div className={flipped 
          ? 'card-top flipped2 ' + this._selectBackgroundByPairIndex(this.props.pairIndex)
          : 'card-top ' + this._selectBackgroundByPairIndex(this.props.pairIndex)}>
        </div>
      </div>
    )
  }

}

export default Card
