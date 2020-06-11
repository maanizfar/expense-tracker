import React from "react";
import styled from "styled-components";

const Label = styled.p`
  text-transform: uppercase;
  margin: 0;
`;

const BalanceText = styled.h1`
  margin: 0;
`;

const Balance = () => {
  return (
    <div>
      <Label>Your balance</Label>
      <BalanceText>$260.55</BalanceText>
    </div>
  );
};

export default Balance;
