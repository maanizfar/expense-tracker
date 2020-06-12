import React from "react";
import styled from "styled-components";

const Label = styled.p`
  text-transform: uppercase;
  margin: 0;
`;

const BalanceText = styled.h1`
  margin: 0;
`;

const Balance = ({ balance }) => {
  return (
    <div>
      <Label>Your balance</Label>
      <BalanceText>${balance}</BalanceText>
    </div>
  );
};

export default Balance;
