import React, { useContext } from "react";
import styled from "styled-components";
import HistoryItem from "./HistoryItem";
import { MyContext } from "../state/State";

const Container = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  max-height: 200px;
  overflow-y: auto;
  overflow-x: visible;
`;

const Heading = styled.h3`
  border-bottom: 1px solid;
`;

const History = () => {
  const { transactions } = useContext(MyContext);

  return (
    <div>
      <Heading>History</Heading>
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
