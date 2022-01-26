import React, { useState, useEffect } from 'react';
import dummyData from './dummyData.js';
import CardView from './CardView.jsx';
import css from './app.module.css';
import axios from 'axios';
import SearchView from './SearchView.jsx';

const App = () => {
  const [cardList, setCardList] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState('searchView');
  const [card, setCard] = useState('');

  useEffect(() => {
    axios.get('/api/cards/set', {
      params: {
        q: 'evolving'
      }
    })
      .then((response) => {
        setCardList(response.data.data);
      })
      .catch((error) => {
        console.log('client-side ERROR', error);
      })
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get('/api/cards', {
      params: {
        q: search
      }
    })
      .then((response) => {
        setCardList(response.data.data);
        setCurrentPage('searchView');
      })
      .catch((error) => {
        console.log('client-side ERROR', error);
      })
  }

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  const handleHome = () => {
    setCurrentPage('searchView');
  }

  const renderPage = () => {
    if (currentPage === 'cardView') {
      return (
        <div className={css.mainContainer}>
          <CardView
            cardList={cardList}
            setCard={setCard}
            card={card}
          />
        </div>
      )
    }

    if (currentPage === 'searchView') {
      return (
        <div className={css.mainContainer}>
          <SearchView
            cardList={cardList}
            setCard={setCard}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )
    }
  }

  return (
    <div>
      <div className={css.mainHeader}>
        <h1
          onClick={handleHome}
          className={css.homeButton}
          >Pokemon Cards
        </h1>
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
