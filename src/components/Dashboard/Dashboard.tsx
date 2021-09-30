import React, { useState } from 'react';
import { Profit } from '../Profit/Profit';
import { Instances } from '../Instances/Instances';
import { Table } from '../Table/Table';
import './Dashboard.scss';
import dataList from '../../data.json';

export const Dashboard: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const changeSelectedCurrency = (value: string) => {
    setSelectedCurrency(value);
  };

  const getFilteredData = (value: string) => {
    return dataList.filter(item => (
      item.exchangePair.includes(value)
    ));
  };

  const filteredData = getFilteredData(selectedCurrency);

  return (
    <section className="Dashboard">
      <Table
        data={filteredData}
      />
      <div className="Dashboard__items">
        <Profit
          changeCurrency={changeSelectedCurrency}
        />
        <Instances
          currency={selectedCurrency}
          activeInstance={filteredData.length}
        />
      </div>
    </section>
  );
};
