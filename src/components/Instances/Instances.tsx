import React, { useEffect, useState } from 'react';
import './Instances.scss';

type Props = {
  currency: string;
  activeInstance: number;
};

export const Instances: React.FC<Props> = (props) => {
  const { currency, activeInstance } = props;
  const [totalInstance, setTotalInstance] = useState(0);

  useEffect(() => {
    setTotalInstance(Math.round(Math.random() * 100));
  }, []);

  return (
    <div className="Instances Dashboard__Instances">
      <h3 className="Instances__title">
        Instances
      </h3>
      <div className="Instances__items">
        <div className="Instances__item">
          <p className="Instances__item-title">
            Most profit instance
          </p>
          <span className="Instances__item-content">
            {currency ? (
              `BTC-${currency}`
            ) : (
              'Pleace, choose a currency'
            )}
          </span>
        </div>
        <div className="Instances__border"></div>
        <div className="Instances__item">
          <p className="Instances__item-title">
            Active instance
          </p>
          <span className="Instances__item-content">
            {activeInstance}
          </span>
        </div>
        <div className="Instances__border"></div>
        <div className="Instances__item">
          <p className="Instances__item-title">
            Total instance
          </p>
          <span className="Instances__item-content">
            {totalInstance}
          </span>
        </div>
      </div>
    </div>
  );
};
