import React, { useState, useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../state/State";
import { colors } from "../styles/theme";

const Heading = styled.h3`
  border-bottom: 1px solid;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
  }

  div {
    display: flex;
    justify-content: space-around;

    label {
      padding-left: 4px;
    }
  }
`;

const TextInput = styled.input`
  padding: 0.5rem;
  border: 1px solid;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem;
  width: 100%;
  color: white;
  background-color: ${(props) => props.color || "green"};
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;

  :hover {
    cursor: pointer;
  }
`;

const AddTransaction = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState(0);

  const { addTransaction, theme } = useContext(MyContext);

  return (
    <div
      style={{
        color: theme === "light" ? colors.light.text : colors.dark.text,
      }}
    >
      <Heading>Add new transaction</Heading>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTransaction({
            id: new Date().getTime(),
            name,
            type,
            amount,
          });
        }}
      >
        <FormGroup>
          <label htmlFor="name">Name</label>
          <TextInput
            type="text"
            id="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <p>Select type of transaction</p>
          <div>
            <div>
              <input
                type="radio"
                name="type"
                id="income"
                value="income"
                checked={type === "income"}
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="income">Income</label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                id="expense"
                value="expense"
                checked={type === "expense"}
                onChange={(e) => setType(e.target.value)}
              />
              <label htmlFor="expense">Expense</label>
            </div>
          </div>
        </FormGroup>
        <FormGroup>
          <label htmlFor="amount">Amount</label>
          <TextInput
            type="number"
            name="amount"
            id="amount"
            value={amount}
            required
            onChange={(e) => {
              e.target.value && setAmount(parseInt(e.target.value));
            }}
          />
        </FormGroup>
        <Button type="submit">Add Transaction</Button>
      </form>
    </div>
  );
};

export default AddTransaction;
