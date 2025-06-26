import React, { useState, useEffect } from 'react';

const ExpenseForm = (props) => {
  const isEdit = props.itemtoedit ? true : false;
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (props.itemtoedit) {
      setTitle(props.itemtoedit.title);
      setAmount(props.itemtoedit.amount);
    } else {
      setTitle('');
      setAmount('');
    }
  }, [props.itemtoedit]);

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeAmount = (e) => setAmount(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setError('Enter title');
      return;
    }
    if (!amount) {
      setError('Enter amount');
      return;
    }

    if (isEdit) {
       props.editExpense(props.itemtoedit._id, title, parseInt(amount));
    } else {
      props.addExpenses(title, parseInt(amount));
    }

    setError('');
    setTitle('');
    setAmount('');
  };

  const handleClear = () => {
    setTitle('');
    setAmount('');
    setError('');
    if (props.clearEdit) props.clearEdit();
  };

  return (
    <div className="expense-form">
      <form onSubmit={handleSubmit}>
        <h3 className={isEdit ? 'edit' : 'add'}>
          {isEdit ? 'Edit Expense' : 'Add Expense'}
        </h3>
        {error && <h3 className="error">{error}</h3>}
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleChangeTitle}
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount ($):</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleChangeAmount}
            placeholder="Enter amount"
          />
        </div>
        <div className="button-group">
          <button type="submit">
            {isEdit ? 'Edit Expense' : 'Add Expense'}
          </button>
          {isEdit && (
            <button type="button" onClick={handleClear} className="clear-button">
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
