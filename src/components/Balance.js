import React, { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../state/State";
import { colors } from "../styles/theme";

const Label = styled.p`
  color: ${(props) =>
    props.theme === "light" ? colors.light.text : colors.dark.text};
  text-transform: uppercase;
  margin: 0;
`;

const BalanceText = styled.h1`
  color: ${(props) =>
    props.theme === "light" ? colors.light.text : colors.dark.text};
  margin-top: 0.1rem;
  font-size: 2.3rem;
`;

const Balance = () => {
  const { theme, transactions } = useContext(MyContext);

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
