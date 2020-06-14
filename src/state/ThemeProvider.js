import React, { createContext, useReducer } from "react";
import reducer from "./ThemeReducer";

const initialState = { theme: "light" };

export const ThemeContext = createContext(initialState);

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function setTheme(theme) {
    dispatch({
      type: "SET_THEME",
      payload: theme,
    });
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: state.theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
