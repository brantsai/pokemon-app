import React, { useState, useEffect } from 'react';
import dummyData from './dummyData.js';
import CardView from './CardView.jsx';
import css from './app.module.css';
import axios from 'axios';

const App = () => {
  const [cardList, setCardList] = useState(dummyData.data);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // route to server
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const renderPage = () => {
    if (currentPage === 'cardView') {
      return (
        <div className={css.mainContainer}>
          <CardView
            cardList={cardList}
          />
        </div>
      )
    }
  }

  return (
    <div>
      <div className={css.mainHeader}>
        <h1>Pokemon Cards</h1>
        <form>
          <input onChange={handleSearch} type="text" value={search}></input>
          <input onClick={handleSubmit} type="submit"></input>
        </form>
      </div>
      {renderPage()}
    </div>
  );
}

export default App;
