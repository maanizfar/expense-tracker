import React from "react";
import styled from "styled-components";

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 8px;
  border-right-width: 8px;
  border-right-color: ${(props) => props.color};
  padding: 0.7rem;
  margin: 8px 0;
`;

const HistoryItem = ({ transaction }) => {
  const { type, name, amount } = transaction;
  return (
    <Container color={type === "income" ? "green" : "red"}>
      <span>{name}</span>
      <span>
        {type === "income" ? "+" : "-"} {amount}
      </span>
    </Container>
  );
};

export default HistoryItem;
