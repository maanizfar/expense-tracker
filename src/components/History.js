import React from "react";
import styled from "styled-components";
import HistoryItem from "./HistoryItem";

const Container = styled.ul`
  list-style: none;
  padding: 0;
`;

const History = ({ transactions }) => {
  return (
    <div>
      <h3>History</h3>
      <Container>
        {transactions &&
          transactions.map((transaction, index) => (
            <HistoryItem key={index} transaction={transaction} />
          ))}
      </Container>
    </div>
  );
};

export default History;
