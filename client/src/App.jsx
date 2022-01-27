import React, { useState, useEffect } from 'react';
import dummyData from './dummyData.js';
import CardView from './CardView.jsx';
import css from './app.module.css';
import axios from 'axios';
import SearchView from './SearchView.jsx';
import Home from './Home.jsx';

const App = () => {
  const [cardList, setCardList] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState('home');
  const [card, setCard] = useState('');
  const [setList, setSetList] = useState([]);
  const [set, setSet] = useState([]);

  useEffect(() => {
    axios.get('/api/sets')
      .then((response) => {
        setSetList(response.data.data);
      })
      .catch((error) => {
        console.log('client-side ERROR', error);
      });
  }, []);

  const getSet = (setId) => {
    axios.get('/api/cards/set', {
      params: {
        q: setId
      }
    })
      .then((response) => {
        setCardList(response.data.data);
        setCurrentPage('searchView');
      })
      .catch((error) => {
        console.log('client-side ERROR', error);
      });
  }

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
    setCurrentPage('home');
  }

  const renderPage = () => {
    if (currentPage === 'home') {
      return (
        <div className={css.mainContainer}>
          <Home
            setList={setList}
            getSet={getSet}
          />
        </div>
      )
    }

    if (currentPage === 'cardView') {
      return (
        <div className={css.mainContainer}>
          <CardView
            setCurrentPage={setCurrentPage}
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
        <form className={css.searchbar}>
          <input onChange={handleSearch} type="text" value={search}></input>
          <input onClick={handleSubmit} type="submit"></input>
        </form>
      </div>
      {renderPage()}
    </div>
  );
}

export default App;
