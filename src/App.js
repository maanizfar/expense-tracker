import React, { useContext } from "react";
import styled from "styled-components";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import ThemeToggle from "./components/ThemeToggle";
import { colors } from "./styles/theme";
import { MyContext } from "./state/State";

const Page = styled.div`
  min-height: 100vh;
  background-color: ${(props) =>
    props.theme === "light" ? colors.light.background : colors.dark.background};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`;

const Header = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 32px;
  color: ${(props) =>
    props.theme === "light" ? colors.light.text : colors.dark.text};
`;

function App() {
  const { theme } = useContext(MyContext);

  return (
    <Page theme={theme}>
      <ThemeToggle />
      <Container>
        <Header theme={theme}>Expense Tracker</Header>

        <Balance />

        <IncomeExpenses />

        <History />

        <AddTransaction />
      </Container>
    </Page>
  );
}

export default App;
