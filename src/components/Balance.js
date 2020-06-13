import React, { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../state/State";

const Label = styled.p`
  text-transform: uppercase;
  margin: 0;
`;

const BalanceText = styled.h1`
  margin-top: 0.1rem;
  font-size: 2.3rem;
`;

const Balance = () => {
  const { transactions } = useContext(MyContext);

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
      <Label>Your balance</Label>
      <BalanceText>${balance}</BalanceText>
    </div>
  );
};

export default Balance;
