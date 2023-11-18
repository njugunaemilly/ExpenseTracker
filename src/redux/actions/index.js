export const addTransaction = (transaction) => ({
    type: 'ADD_TRANSACTION',
    payload: transaction,
  });
  
  export const deleteTransaction = (transaction) => ({
    type: 'DELETE_TRANSACTION',
    payload: transaction,
  });
  