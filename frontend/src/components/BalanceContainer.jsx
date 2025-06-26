import React from 'react';
import CurrencyItem from './CurrencyItem';

const BalanceContainer = ({ expenses }) => {
  const income = expenses
    .filter((exp) => exp.amount > 0)
    .reduce((sum, exp) => sum + exp.amount, 0);

  const expense = expenses
    .filter((exp) => exp.amount < 0)
    .reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="balance-container">
      <CurrencyItem title="Income" amount={income} type="income" />
      <CurrencyItem title="Expense" amount={expense} type="expense" />
      <CurrencyItem title="Balance" amount={income + expense} type="balance" />
    </div>
  );
};

export default BalanceContainer;
