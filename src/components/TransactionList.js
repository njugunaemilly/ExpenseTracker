import React from 'react';
import { connect } from 'react-redux';
import { deleteTransaction } from '../redux/actions';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className="transactions-list">
       <ul>
              {transactions.map((transaction) => (
                <TransactionItem key={transaction.id} transaction={transaction} type={transaction.type} onDelete={onDelete} />
              ))}
            </ul>
    </div>
   
  );
};

const transactionData = (state) => ({
  transactions: state.transactions,
});

const transactionOutput = (dispatch) => ({
  onDelete: (transaction) => dispatch(deleteTransaction(transaction)),
});

export default connect(transactionData, transactionOutput)(TransactionList);