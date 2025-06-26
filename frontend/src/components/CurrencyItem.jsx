import React from 'react';

const CurrencyItem = ({ title, amount, type }) => {
  return (
    <div className="current-item">
      <div className={`title ${type}`}>{title}</div>
      <div className={`amount ${type}`}>${Math.abs(amount)}</div>
    </div>
  );
};

export default CurrencyItem;
