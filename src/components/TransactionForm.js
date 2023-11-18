import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTransaction } from '../redux/actions';
import './transactionForm.css'

const TransactionForm = ({ onAddTransaction }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || isNaN(amount)) {
      alert('Invalid Input! Please enter valid input');
      return;
    }

    const newTransaction = {
      id: new Date().getTime(),
      name,
      amount: parseFloat(amount),
      type,
    };

    onAddTransaction(newTransaction);

    setName('');
    setAmount('');
    setType('expense');
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label className='label'>
        Description:
        <input className='input'placeholder='Ex.Rent' type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label className='label'>
        Amount:
        <input className='input' placeholder='Ex. 800'type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <label className='label'>
        Type:
        <select className='select' value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </label>
      <button className='btn' type="submit">Add Transaction</button>
    </form>
  );
};

const transT = (dispatch) => ({
  onAddTransaction: (transaction) => dispatch(addTransaction(transaction)),
});

export default connect(null, transT)(TransactionForm);
