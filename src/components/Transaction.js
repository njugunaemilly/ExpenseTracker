import React from 'react';

const Transaction = ({ name, amount, type, onDelete }) => {
  return (
    <>
      <h3 className='transactions' style={{fontWeight:'normal'}}>
        {name} : ({type === 'income' ? '+' : '-'} ${amount})
      </h3>
      <button style={{padding:'10px', fontSize:'12px'}}onClick={onDelete}>Delete</button>
    </>
  );
};

export default Transaction;