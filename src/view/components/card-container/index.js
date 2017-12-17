import React, { Component } from 'react'
import Card from '../card-piece'
import CONST from './const'

let cardIndexArray = []; 
let twoClickedCardsIndex = [];

class CardContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      cardsFlippedStatus: []
    }
    this._handleCardClick = this._handleCardClick.bind(this);
  }

  componentDidMount () {
    let _cardsFlippedStatus = [];
    let amount = CONST.CARD_AMOUNT;
    while (amount--) {
      _cardsFlippedStatus.push({
        pairIndex: this._generateRandomIndex(),
        flipped: false
      });
    }
    this.setState({
      cardsFlippedStatus: _cardsFlippedStatus
    });
  }

  _generateCards () {
    const cardDomArray = [];
    const { cardsFlippedStatus } = this.state

    cardsFlippedStatus.forEach((element, index) => {
      cardDomArray.push(
        <Card key={`card${index}`} index={index} pairIndex={element.pairIndex} flipped={element.flipped}
          handleCardClick={this._handleCardClick}/>
      )
    });
    
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

  _handleCardClick (index, pairIndex) {
    let _cardsFlippedStatus = this.state.cardsFlippedStatus;
    _cardsFlippedStatus[index].flipped = true;
    
    this.setState({
      cardsFlippedStatus: _cardsFlippedStatus
    }, () => {
      this._sameCardCheck(index, pairIndex);
    });
  }

  _sameCardCheck (index, pairIndex) {
    let _cardsFlippedStatus = this.state.cardsFlippedStatus;
    twoClickedCardsIndex.push({
      'index': index,
      'pairIndex': pairIndex
    });
    if (twoClickedCardsIndex.length > 1) {
      if (twoClickedCardsIndex[0].pairIndex !== twoClickedCardsIndex[1].pairIndex) {
        _cardsFlippedStatus[twoClickedCardsIndex[0].index].flipped = false;
        _cardsFlippedStatus[twoClickedCardsIndex[1].index].flipped = false;
        setTimeout(() => {
          this.setState({
            cardsFlippedStatus: _cardsFlippedStatus
          });
        }, 400);
      }
      twoClickedCardsIndex.length = 0;
    } 
  }

  render () {
    return (
      <div className='card-container'>
        <div className='top-bar'>
          <div className='logo-panel'>Game</div>
        </div>
        <div className='cards-area'>
          {this._generateCards(CONST.CARD_AMOUNT)}
        </div>
        <div className='footer'>timer</div>
      </div>
    );
  }
}

export default CardContainer
