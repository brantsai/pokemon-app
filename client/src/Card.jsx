import React from 'react';
import css from './app.module.css';

const Card = ({ cardInfo, setCard, setCurrentPage }) => {
  const handleClick = () => {
    setCard(cardInfo);
    setCurrentPage('cardView');
  }

  return (
    <div
      className={css.cardSearchDisplay}
      onClick={handleClick}
      ><img
        src={cardInfo.images.small}
        className={css.cardSearchImage}
      ></img>
      <div
        className={css.cardSearchText}
      >{cardInfo.name}</div>
      <div
        className={css.cardSearchText}
      >{cardInfo.set.name}</div>
    </div>
  )
}

export default Card;