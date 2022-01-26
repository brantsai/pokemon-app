import React, { useState } from 'react';
import css from './app.module.css';

const CardView = ({ card }) => {
  const [tradeModalEnabled, setTradeModalEnabled] = useState(false);

  const handleTrade = () => {
    setTradeModalEnabled(!tradeModalEnabled);
  }

  const renderPrices = () => {
    if (card.tcgplayer.prices.holofoil) {
      return (
        <div>
          <p>
            <b>Average Price: </b>${card.tcgplayer.prices.holofoil.market}
          </p>
          <p>
            <b>High: </b> ${card.tcgplayer.prices.holofoil.high}
          </p>
          <p>
            <b>Low: </b> ${card.tcgplayer.prices.holofoil.low}
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <p>
            <b>Average Price: </b>${card.tcgplayer.prices.normal.market}
          </p>
          <p>
            <b>High: </b> ${card.tcgplayer.prices.normal.high}
          </p>
          <p>
            <b>Low: </b> ${card.tcgplayer.prices.normal.low}
          </p>
        </div>
      )
    }
  }

  return (
    <div className={css.centerColumn}>
      <div className={css.cardInfo}>
        <h1>{card.name}</h1>
        <p>Set name: {card.set.name}
          <img
            className={css.symbol}
            src={card.set.images.symbol}
          ></img>
        </p>
      </div>
      <div className={css.cardDescriptionImage}>
        <img
          className={css.cardImage}
          src={card.images.large}
        ></img>
        <div className={css.cardDescription}>
          <h2>Card Overview</h2>
          <p>
            <b>ID: </b>{card.id}
          </p>
          <p>
            <b>Card Number/Rarity: </b>{card.number} / {card.set.printedTotal} / {card.rarity}
          </p>
          <p>
            <b>Card Type / HP / Subtypes: </b>
            {card.types.map((type, index) => {
              if (index === card.types.length - 1) {
                return type;
              } else {
                return type + " / "
              }
            })} / {card.hp} /
            &nbsp;{card.subtypes.map((subtype, index) => {
              if (index === card.subtypes.length - 1) {
                return subtype;
              } else {
                return subtype + " / "
              }
            })}
          </p>
          <p>
            <b>Artist: </b>{card.artist}
          </p>
          <h2>
            <a href={card.tcgplayer.url}>
              TCGplayer Card Prices
            </a>
          </h2>
          {renderPrices()}
          <div className={css.rowContainer}>
            <button
              className={css.button}
              >Add to Wishlist
            </button>
            <button
              className={css.button}
              onClick={handleTrade}
              >Trade this Card
            </button>
            {tradeModalEnabled ?
              <div className={css.modal_background}>
                <div className={css.model_content}>
                  <div
                  className={css.tradeModal}
                  >Trade</div>
                <div className={css.closeButton} onClick={handleTrade}>Close</div>
                </div>
              </div> :
              <div></div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardView;