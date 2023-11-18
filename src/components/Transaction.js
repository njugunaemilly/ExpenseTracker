import React from 'react';

const Transaction = ({ name, amount, type, onDelete }) => {
  return (
    <div>
      <p>
        {name} : ({type === 'income' ? '+' : '-'} ${amount})
        <button onClick={onDelete}>Delete</button>
      </p>
    </div>
  );
};

export default Transaction;