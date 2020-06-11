import React from "react";
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

const AddTransaction = () => {
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <TextInput type="text" id="name" />
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
                defaultChecked
              />
              <label htmlFor="income">Income</label>
            </div>
            <div>
              <input type="radio" name="type" id="expense" value="expense" />
              <label htmlFor="expense">Expense</label>
            </div>
          </div>
        </FormGroup>
        <FormGroup>
          <label htmlFor="amount">Amount</label>
          <TextInput type="number" name="amount" id="amount" />
        </FormGroup>
        <Button type="submit">Add Transaction</Button>
      </form>
    </div>
  );
};

export default AddTransaction;
