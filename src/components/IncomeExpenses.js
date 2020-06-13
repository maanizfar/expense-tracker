import React, { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../state/State";

const Container = styled.div`
  display: flex;
  background-color: white;
  border: 0px solid;
  margin: 1rem 0;
  -webkit-box-shadow: 2px 2px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 15px -10px rgba(0, 0, 0, 0.75);

  div:first-child {
    border-right: 1px solid;
  }
`;

const StatContainer = styled.div`
  padding: 0 2rem;
  margin: 1.5rem 0;
  flex-basis: 50%;
`;

const Label = styled.p`
  text-align: center;
  text-transform: uppercase;
  margin: 0;
`;

const BalanceText = styled.h1`
  text-align: center;
  margin: 0.5rem 0 0 0;
  font-size: 1.5rem;
  color: ${(props) => props.color};
`;

const IncomeExpenses = () => {
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

  return (
    <Container>
      <StatContainer>
        <Label>Income</Label>
        <BalanceText color="green">${income}</BalanceText>
      </StatContainer>
      <StatContainer>
        <Label>Expense</Label>
        <BalanceText color="red">${expense}</BalanceText>
      </StatContainer>
    </Container>
  );
};

export default IncomeExpenses;
