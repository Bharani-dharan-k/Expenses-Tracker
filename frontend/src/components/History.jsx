import React from 'react';
import ExpenseListItem from './ExpenseListItem';

const History = ({ expenses, deleteExpense, setItemToEdit, itemtoedit }) => {
  return (
    <div className="history-container">
      <h3>History</h3>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseListItem
            key={expense._id}
            id={expense._id}
            title={expense.title}
            amount={expense.amount}
            deleteExpense={deleteExpense}
            setItemToEdit={setItemToEdit}
            currentlyEditingId={itemtoedit?._id}
            expense={expense}
          />
        ))
      )}
    </div>
  );
};

export default History;
