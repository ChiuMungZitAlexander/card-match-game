import React, { Component } from 'react'

class CardContainer extends Component {
  render () {
    return (
      <div className='card-container'>
        <div className='top-bar'>
          <div className='logo-panel'>Game</div>
        </div>
        <div className='cards-area'></div>
        <div className='footer'>timer</div>
      </div>
    );
  }
}

export default CardContainer
