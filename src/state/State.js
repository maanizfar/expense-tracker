import React, { createContext, useReducer } from "react";
import reducer from "./TransactionReducer";

const initialState = { transactions: [] };

export const MyContext = createContext(initialState);

export const MyProvider = ({ children }) => {
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
    <MyContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
