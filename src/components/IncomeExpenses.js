import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid;
  margin: 1rem 0;

  div:first-child {
    border-right: 1px solid;
  }
`;

const StatContainer = styled.div`
  padding: 0 2rem;
  margin: 1.5rem 0;
`;

const Label = styled.p`
  text-align: center;
  text-transform: uppercase;
  margin: 0;
`;

const BalanceText = styled.h1`
  margin: 0.5rem 0 0 0;
  font-size: 1.5rem;
  color: ${(props) => props.color};
`;

const IncomeExpenses = ({ income, expense }) => {
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
