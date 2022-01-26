import React from 'react';
import css from './app.module.css';
import Card from './Card.jsx';

const SearchView = ({ cardList, setCard, setCurrentPage }) => {
  const listCards = cardList.map((card) =>
    <Card
      cardInfo={card}
      key={card.id}
      setCard={setCard}
      setCurrentPage={setCurrentPage}
    />
  )

  if (cardList.length <= 0) {
    return (
      <div>No cards to show!</div>
    )
  } else {
    return (
      <div className={css.centerColumn}>
        <div className={css.cardDisplayContainer}>
          {listCards}
        </div>
      </div>
    )
  }
}

export default SearchView;