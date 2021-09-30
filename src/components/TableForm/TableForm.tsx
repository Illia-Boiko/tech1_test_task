import React from 'react';
import './TableForm.scss';

export const TableForm: React.FC = () => {
  return (
    <form
      className="TableForm"
    >
      <div className="TableForm__items">
        <div className="TableForm__item">
          <span
            className="TableForm__item-description"
          >
            Buy advice exchange
          </span>
          <input
            className="TableForm__input"
            name="buyPrice"
            type="number"
          />
        </div>
        <div className="TableForm__item">
          <span
            className="TableForm__item-description"
          >
            Buy advice currency
          </span>
          <input
            className="TableForm__input"
            name="sellPrice"
            type="number"
          />
        </div>
        <div className="TableForm__item">
          <span
            className="TableForm__item-description"
          >
            Sell advice currency
          </span>
          <input
            className="TableForm__input"
            name="profit"
            type="number"
          />
        </div>
      </div>
      <div className="TableForm__buttons">
        <button
          className="TableForm__clear-button"
          type="button"
        >
          Clear Filter
        </button>
        <button
          className="TableForm__submit-button"
          type="submit"
        >
          Filter Arbitrage
        </button>
      </div>
    </form>
  );
};
