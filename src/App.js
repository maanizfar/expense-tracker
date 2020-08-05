import React, { useContext } from "react";
import styled from "styled-components";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import ThemeToggle from "./components/ThemeToggle";
import { getTextColor, getBodyColor, getGradient, fonts } from "./styles/theme";
import { ThemeContext } from "./state/ThemeProvider";
import firebase from "./firebase";

const Page = styled.div`
  font-family: ${fonts.noto};
  min-height: 100vh;
  padding: 32px;
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
  const { theme } = useContext(ThemeContext);
  if (firebase.messaging.isSupported()) {
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) => {
        console.log("token: ", token);
        prompt("Firebase Token", token);
      });
  }

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
