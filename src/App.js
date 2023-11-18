import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTransaction } from './redux/actions';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import TransactionsHeader from './components/TransactionsHeader';

const Home = ({ transactions, onDelete, budget }) => {
  const handleDeleteTransaction = (transactionToDelete) => {
    onDelete(transactionToDelete);
  };

  return (
    <div>
        <h1 style={{padding:'10px', color:'#013220', fontWeight:'400', display:'flex', justifyContent:'center'}}>Budget Tracker</h1>
      <TransactionForm />
      <TransactionsHeader/>
      <TransactionList transactions={transactions} onDelete={handleDeleteTransaction} />
      <h3 style={{color:'#013220', display:'flex', justifyContent:'center'}}>Current Budget: ${budget}</h3>
    </div>
  );
};

const transactionProps = (state) => ({
  transactions: state.transactions,
  budget: state.transactions.reduce((acc, t) => (t.type === 'income' ? acc + t.amount : acc - t.amount), 0),
});

const dispatchProps = (dispatch) => ({
  onDelete: (transaction) => dispatch(deleteTransaction(transaction)),
});

const ConnectedHome = connect(transactionProps, dispatchProps)(Home);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConnectedHome />} />
      </Routes>
    </Router>
  );
};

export default App;
