import React, { useState } from "react";
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
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const getEntity = (entity) => {
    const entities = transactions
      .filter((t) => t.type === entity)
      .map((e) => e.amount);
    return entities.reduce((sum, current) => {
      return sum + current;
    }, 0);
  };

  const getBalance = () => {
    const income = getEntity("income");
    const expense = getEntity("expense");
    return income - expense;
  };

  return (
    <Page>
      <Container>
        <Header>Expense Tracker</Header>

        <Balance balance={getBalance()} />

        <IncomeExpenses
          income={getEntity("income")}
          expense={getEntity("expense")}
        />

        <History transactions={transactions} />

        <AddTransaction onSubmit={addTransaction} />
      </Container>
    </Page>
  );
}

export default App;
