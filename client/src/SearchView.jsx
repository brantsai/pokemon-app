import React from 'react';
import css from './app.module.css';
import Card from './Card.jsx';

const SearchView = ({ cardList }) => {
  const listCards = cardList.map((card) =>
    <Card cardInfo={card} key={card.id}/>
  )

  return (
    <div className={css.centerColumn}>
      <div className={css.cardDisplayContainer}>
        {listCards}
      </div>
    </div>
  )
}

export default SearchView;