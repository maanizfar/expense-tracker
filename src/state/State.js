import React, { createContext, useReducer } from "react";
import reducer from "./Reducer";

const initialState = { transactions: [], theme: "light" };

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

  function setTheme(theme) {
    dispatch({
      type: "SET_THEME",
      payload: theme,
    });
  }

  return (
    <MyContext.Provider
      value={{
        transactions: state.transactions,
        theme: state.theme,
        addTransaction,
        removeTransaction,
        setTheme,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
