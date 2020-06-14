import React, { createContext, useReducer } from "react";
import reducer from "./TransactionReducer";

const initialState = { transactions: [], theme: "light" };

export const TransactionContext = createContext(initialState);

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  function removeTransaction(id) {
    dispatch({
      type: "REMOVE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
