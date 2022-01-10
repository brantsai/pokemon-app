import React from 'react';
import css from './app.module.css';

const CardView = ({ cardList }) => {
  return (
    <div className={css.centerColumn}>
      <div className={css.cardInfo}>
        <h1>{cardList[1].name}</h1>
        <p>Set name: {cardList[1].set.name}
          <img
            className={css.symbol}
            src={cardList[1].set.images.symbol}
          ></img>
        </p>
      </div>
      <div className={css.cardDescriptionImage}>
        <img
          className={css.cardImage}
          src={cardList[1].images.large}
        ></img>
        <div className={css.cardDescription}>
          <h2>Card Overview</h2>
          <p>
            <b>ID: </b>{cardList[1].id}
          </p>
          <p>
            <b>Card Number/Rarity: </b>{cardList[1].number} / {cardList[1].set.printedTotal} / {cardList[1].rarity}
          </p>
          <p>
            <b>Card Type / HP / Subtypes: </b>
            {cardList[1].types.map((type, index) => {
              if (index === cardList[1].types.length - 1) {
                return type;
              } else {
                return type + " / "
              }
            })} / {cardList[1].hp} /
            &nbsp;{cardList[1].subtypes.map((subtype, index) => {
              if (index === cardList[1].subtypes.length - 1) {
                return subtype;
              } else {
                return subtype + " / "
              }
            })}
          </p>
          <p>
            <b>Artist: </b>{cardList[1].artist}
          </p>
          <h2>
            <a href={cardList[1].tcgplayer.url}>
              TCGplayer Card Prices
            </a>
          </h2>
          <p>
            <b>Average Price: </b>${cardList[1].tcgplayer.prices.holofoil.market}
          </p>
          <p>
            <b>High: </b> ${cardList[1].tcgplayer.prices.holofoil.high}
          </p>
          <p>
            <b>Low: </b> ${cardList[1].tcgplayer.prices.holofoil.low}
          </p>
          <div className={css.rowContainer}>
            <button className={css.button}>
              Buy Now
            </button>
            <button className={css.button}>
              Sell this Card
            </button>
            <button className={css.button}>
              Trade this Card
            </button>
          </div>
        </div>
      </div>
      <div className={css.arrowsContainer}>
        <div className={css.rowContainer}>
          <img
            className={css.arrow}
            src='https://img.icons8.com/small/344/left.png'
          ></img>
          <img
            className={css.arrowCardImage}
            src={cardList[0].images.small}
          ></img>
          {cardList[1].name}<br></br>
          ({cardList[1].number}/{cardList[1].set.printedTotal})
        </div>
        <div className={css.rowContainer}>
          {cardList[1].name}<br></br>
          ({cardList[1].number}/{cardList[1].set.printedTotal})
          <img
            className={css.arrowCardImage}
            src={cardList[2].images.small}
          ></img>
          <img
            className={css.arrow}
            src='https://img.icons8.com/small/344/right.png'
          ></img>
        </div>
      </div>
    </div>
  )
}

export default CardView;