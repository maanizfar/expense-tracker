import React from "react";
import styled from "styled-components";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";

const Page = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 2rem;
  max-width: 600px;
`;

const Header = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 32px;
`;

function App() {
  return (
    <Page>
      <Container>
        <Header>Expense Tracker</Header>

        <Balance />

        <IncomeExpenses />

        <History />

        <AddTransaction />
      </Container>
    </Page>
  );
}

export default App;
