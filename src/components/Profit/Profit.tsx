import React, { useState } from 'react';
import './Profit.scss';

const currencyList = ['USD', 'UAH', 'RUB', 'PLN'];

type Props = {
  changeCurrency: (value: string) => void;
};

export const Profit: React.FC<Props> = (props) => {
  const { changeCurrency } = props;
  const [currentCurrency, setCurrentCurrency] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeCurrency(event.target.value);
    setCurrentCurrency(event.target.value);
  };

  return (
    <div className="Profit Dashboard__Profit">
      <h3
        className="Profit__title"
      >
        Dashboard profit currency
      </h3>
      <div className="Profit__content">
        <select
          className="Profit__select"
          name="currency"
          value={currentCurrency}
          onChange={handleChange}
        >
          <option value="">
            All
          </option>
          {currencyList.map(item => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
        <p
          className="Profit__text"
        >
          Selected currency will affect all profit in dashboard
        </p>
      </div>
    </div>
  );
};
