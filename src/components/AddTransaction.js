import React, { useState } from "react";
import styled from "styled-components";

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
  }
`;

const TextInput = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
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

  const typeChangeHandler = (value) => {
    console.log(value);
    setType(value);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({
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
                onChange={(e) => typeChangeHandler(e.target.value)}
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
                onChange={(e) => typeChangeHandler(e.target.value)}
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
