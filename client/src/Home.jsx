import React, { useState } from 'react';
import css from './app.module.css';
import Set from './Set.jsx';

const Home = ({ setList, getSet }) => {
  return (
    <div className={css.centerColumn}>
      <h2>Choose a set or search for a card!</h2>
      <div className={css.cardDisplayContainer}>
        {setList.map((setInfo) =>
          <Set
            setInfo={setInfo}
            key={setInfo.id}
            getSet={getSet}
          />
        )}
      </div>
    </div>
  )
}

export default Home;