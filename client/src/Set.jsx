import React, { useState } from 'react';
import css from './app.module.css';

const Set = ({ setInfo, getSet }) => {
  const handleSet = () => {
    getSet(setInfo.id)
  }

  return (
    <div
      className={css.setLogoContainer}
      onClick={handleSet}
      ><img
        src={setInfo.images.logo}
        className={css.setLogo}
      ></img>
      <div className={css.setText}>{setInfo.name}</div>
    </div>
  )
}

export default Set;