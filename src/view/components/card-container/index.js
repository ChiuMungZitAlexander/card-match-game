import React, { Component } from 'react'
import Card from '../card-piece'

let cardIndexArray = []; 
let twoClickedCardsIndex = [];

class CardContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cardAmount: 16
    }
  }

  componentDidMount () {
    
  }

  _generateCards (amount) {
    const cardDomArray = [];
    let _amount = amount;

    while (_amount-- > 0) {
      cardDomArray.push(
        <Card key={`card${16 - _amount}`}
          index={this._generateRandomIndex()}
          handleCardClick={this._handleCardClick}/>
      );
    }
    return cardDomArray;
  }

  _generateRandomIndex () {
    while(true) {
      let randomNumber = parseInt(Math.random() * 16);
      if (cardIndexArray.indexOf(randomNumber) === -1) {
        cardIndexArray.push(randomNumber);
        return Math.floor(randomNumber / 2);
      }
    }
  }

  _handleCardClick (index) {
    twoClickedCardsIndex.push(index);
  }

  render () {
    return (
      <div className='card-container'>
        <div className='top-bar'>
          <div className='logo-panel'>Game</div>
        </div>
        <div className='cards-area'>
          {this._generateCards(this.state.cardAmount)}
        </div>
        <div className='footer'>timer</div>
      </div>
    );
  }
}

export default CardContainer
