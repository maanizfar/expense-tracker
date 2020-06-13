import React, { useContext } from "react";
import styled from "styled-components";
import HistoryItem from "./HistoryItem";
import { MyContext } from "../state/State";
import { colors } from "../styles/theme";

const Container = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: visible;

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
  const { transactions, theme } = useContext(MyContext);

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
