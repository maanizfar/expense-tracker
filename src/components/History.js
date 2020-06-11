import React from "react";
import styled from "styled-components";

const Container = styled.ul`
  list-style: none;
  padding: 0;
`;

const HistoryItem = styled.li`
  display: flex;
  justify-content: space-between;
  border: 1px solid;
  border-radius: 8px;
  border-right-width: 8px;
  border-right-color: ${(props) => props.color};
  padding: 0.7rem;
  margin: 8px 0;
`;

const History = () => {
  return (
    <div>
      <h3>History</h3>
      <Container>
        <HistoryItem color="green">
          <span>Cash</span>
          <span>+500</span>
        </HistoryItem>
        <HistoryItem color="red">
          <span>Book</span>
          <span>-40</span>
        </HistoryItem>
        <HistoryItem color="red">
          <span>Camera</span>
          <span>-100</span>
        </HistoryItem>
      </Container>
    </div>
  );
};

export default History;
