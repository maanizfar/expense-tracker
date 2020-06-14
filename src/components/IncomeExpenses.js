import React, { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../state/State";
import { getShadowColor } from "../styles/theme";

const Container = styled.div`
  display: flex;
  background-color: white;
  border: 0px solid;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: ${({ theme }) => getShadowColor(theme)};

  div:first-child {
    border-right: 1px solid black;
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
  color: black;
`;

const BalanceText = styled.h1`
  text-align: center;
  margin: 0.5rem 0 0 0;
  font-size: 1.5rem;
  color: ${(props) => props.color};
`;

const IncomeExpenses = () => {
  const { transactions, theme } = useContext(MyContext);

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
    <Container theme={theme}>
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
