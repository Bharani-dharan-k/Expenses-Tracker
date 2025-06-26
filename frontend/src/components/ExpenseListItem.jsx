import React from 'react';

const ExpenseListItem = ({
  title,
  amount,
  id,
  expense,
  deleteExpense,
  setItemToEdit,
  currentlyEditingId,
}) => {
  const type = amount < 0 ? 'expense' : 'income';
  const isEditing = currentlyEditingId === id;

  return (
    <div className={`expense-item ${type} ${isEditing ? 'editing' : ''}`}>
      <div className="expense-title">{title}</div>
      <div className="expense-amount">${Math.abs(amount)}</div>
      <div className="button-overlay">
        <button onClick={() => deleteExpense(id)}>Delete</button>
        <button onClick={() => setItemToEdit(expense)} disabled={isEditing}>
          {isEditing ? 'Editing...' : 'Edit'}
        </button>
      </div>
    </div>
  );
};

export default ExpenseListItem;
