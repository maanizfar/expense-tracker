import React, { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../state/State";

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: 0px solid;
  border-radius: 8px;
  border-right-width: 8px;
  border-right-color: ${(props) => props.color};
  padding: 0.7rem;
  margin: 8px 0;
  position: relative;
  -webkit-box-shadow: 2px 2px 15px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 2px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 15px -10px rgba(0, 0, 0, 0.75);

  button {
    display: none;
  }

  :hover {
    button {
      display: block;
    }
  }
`;

const Button = styled.button`
  background-color: red;
  color: white;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-110%, -50%);
  border: none;
  padding: 8px;
  cursor: pointer;
`;

const HistoryItem = ({ transaction }) => {
  const { removeTransaction } = useContext(MyContext);
  const { id, type, name, amount } = transaction;

  return (
    <Item color={type === "income" ? "green" : "red"}>
      <span>{name}</span>
      <span>
        {type === "income" ? "+" : "-"} {amount}
      </span>
      <Button onClick={() => removeTransaction(id)}>X</Button>
    </Item>
  );
};

export default HistoryItem;
