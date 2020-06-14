import React, { useContext } from "react";
import styled from "styled-components";
import HistoryItem from "./HistoryItem";
import { TransactionContext } from "../state/TransactionProvider";
import { ThemeContext } from "../state/ThemeProvider";
import { colors } from "../styles/theme";

const Container = styled.ul`
  width: 100%;
  list-style: none;
  margin: 1rem 9;
  padding: 0;

  p {
    color: ${(props) =>
      props.theme === "light" ? colors.light.text : colors.dark.text};
  }
`;

const Heading = styled.h3`
  border-bottom: 1px solid;
  color: ${(props) =>
    props.theme === "light" ? colors.light.text : colors.dark.text};
`;

const History = () => {
  const { transactions } = useContext(TransactionContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Heading theme={theme}>History</Heading>
      <Container theme={theme}>
        {transactions.length === 0 ? (
          <p style={{ textAlign: "center" }}>No transactions</p>
        ) : (
          transactions.map((transaction, index) => (
            <HistoryItem key={index} transaction={transaction} />
          ))
        )}
      </Container>
    </div>
  );
};

export default History;
