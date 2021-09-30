import React from 'react';
import { TableForm } from '../TableForm/TableForm';
import './Table.scss';

type Props = {
  data: Data[];
};

export const Table: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <div className="Table">
      <TableForm />
      <table
        className="Table__sheet"
      >
        <thead
          className="Table__sheet-head"
        >
          <th>Buy exchange pair</th>
          <th>Buy price</th>
          <th>Sell exchange</th>
          <th>Sell price</th>
          <th>Trade amount</th>
          <th>Arb%</th>
          <th>
            Exp.profit
            <br />
            USD
          </th>
          <th>
            Exp.fees
            <br />
            USD
          </th>
          <th>Adj.</th>
        </thead>
        <tbody
          className="Table__sheet-body"
        >
          {data.map(item => (
            <tr key={item.id}>
              <td className="Table__exchange-pair">{item.exchangePair}</td>
              <td>{item.buyPrise}</td>
              <td className="Table__sell-exchange">{item.sellExchange}</td>
              <td>{item.sellPrice}</td>
              <td>{item.tradeAmount}</td>
              <td>{item.arb}</td>
              <td>{item.expProfitUSD}</td>
              <td>{item.expFeesUSD}</td>
              <td>
                <img
                  className="Table__adj"
                  src="PngItem_2173372.png"
                  alt="adj"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
