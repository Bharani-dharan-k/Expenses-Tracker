import React, { useState, useEffect } from 'react';
import History from './History';
import ExpenseForm from './ExpenseForm';
import BalanceContainer from './BalanceContainer';

const ExpenseContainer = () => {
  const [expenses, setExpenses] = useState([]);
  const [itemtoedit, setItemToEdit] = useState(null);

  // ✅ Fetch data from MongoDB when page loads
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const res = await fetch('https://expenses-tracker-9zeo.onrender.com/expense');
        const data = await res.json();
        setExpenses(data);
      } catch (err) {
        console.error('Error fetching expenses:', err);
      }
    };
    fetchExpenses();
  }, []);

  const addExpenses = async (title, amount) => {
    try {
      const response = await fetch('https://expenses-tracker-9zeo.onrender.com/expense', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, amount }),
      });

      if (response.ok) {
        const newExpense = await response.json();
        setExpenses([...expenses, newExpense]);
      } else {
        console.error('Failed to add expense:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const deleteExpense = async (id) => {
    try {
      const res = await fetch(`https://expenses-tracker-9zeo.onrender.com/expense/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setExpenses(expenses.filter((expense) => expense._id !== id));
      } else {
        console.error('Failed to delete expense');
      }
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const editExpense = async (id, title, amount) => {
    try {
      const response = await fetch(`https://expenses-tracker-9zeo.onrender.com/expense/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, amount }),
      });

      if (response.ok) {
        const updated = await response.json();
        setExpenses(
          expenses.map((expense) => (expense._id === id ? updated : expense))
        );
        setItemToEdit(null);
      } else {
        console.error('Failed to update');
      }
    } catch (err) {
      console.error('Update error:', err);
    }
  };

  const clearEdit = () => {
    setItemToEdit(null);
  };

  return (
    <div className="expense-container">
      <h1 style={{ textAlign: 'center' }}>Expense Tracker</h1>
      <BalanceContainer expenses={expenses} />
      <ExpenseForm
        addExpenses={addExpenses}
        itemtoedit={itemtoedit}
        editExpense={editExpense}
        clearEdit={clearEdit}
      />
      <History
        expenses={expenses}
        deleteExpense={deleteExpense}
        setItemToEdit={setItemToEdit}
        itemtoedit={itemtoedit}
      />
    </div>
  );
};

export default ExpenseContainer;
