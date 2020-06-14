import React, { useContext } from "react";
import styled from "styled-components";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import ThemeToggle from "./components/ThemeToggle";
import { getTextColor, getBodyColor, getGradient, fonts } from "./styles/theme";
import { MyContext } from "./state/State";

const Page = styled.div`
  font-family: ${fonts.noto};
  min-height: 100vh;
  padding: 16px;
  color: ${({ theme }) => getTextColor(theme)};
  background-color: ${({ theme }) => getBodyColor(theme)};
  background: ${({ theme }) => getGradient(theme)};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`;

const Header = styled.h1`
  font-size: 1.7rem;
  margin-bottom: 32px;
  text-align: center;
`;

function App() {
  const { theme } = useContext(MyContext);

  return (
    <Page theme={theme}>
      <ThemeToggle />
      <Container>
        <Header>Expense Tracker</Header>
        <Balance />
        <IncomeExpenses />
        <AddTransaction />
        <History />
      </Container>
    </Page>
  );
}

export default App;
