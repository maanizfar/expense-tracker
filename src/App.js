import React, { useState } from "react";
import styled from "styled-components";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";

import { MyProvider } from "./state/State";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`;

const Header = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 32px;
`;

function App() {
  return (
    <MyProvider>
      <Container>
        <Header>Expense Tracker</Header>

        <Balance />

        <IncomeExpenses />

        <History />

        <AddTransaction />
      </Container>
    </MyProvider>
  );
}

export default App;
