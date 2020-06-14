import React, { useContext } from "react";
import styled from "styled-components";
import { TransactionContext } from "../state/TransactionProvider";
import { ThemeContext } from "../state/ThemeProvider";
import { getTextColor } from "../styles/theme";

const Label = styled.p`
  color: ${({ theme }) => getTextColor(theme)};
  text-transform: uppercase;
  margin: 0;
`;

const BalanceText = styled.h1`
  color: ${({ theme }) => getTextColor(theme)};
  margin: 0.1rem 0;

  font-size: 2.3rem;
`;

const Balance = () => {
  const { transactions } = useContext(TransactionContext);
  const { theme } = useContext(ThemeContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .map((t) => t.amount)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .map((t) => t.amount)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);

  const balance = income - expense;

  return (
    <div>
      <Label theme={theme}>Your balance</Label>
      <BalanceText theme={theme}>${balance}</BalanceText>
    </div>
  );
};

export default Balance;
