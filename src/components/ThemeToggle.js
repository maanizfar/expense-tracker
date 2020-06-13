import React, { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../state/State";
import { colors } from "../styles/theme";

const Toggle = styled.button`
  background-color: red;
  border-radius: 8px;
  img {
    max-width: 2.5rem;
    height: auto;
    transition: all 0.3s linear;

    &:first-child {
      transform: ${({ theme }) =>
        theme === "light" ? "translateY(0)" : "translateY(-100px)"};
    }

    &:nth-child(2) {
      transform: ${({ theme }) =>
        theme === "light" ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;

const ThemeToggle = () => {
  const { theme, setTheme, transactions } = useContext(MyContext);

  const onClickHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Toggle onClick={onClickHandler} theme={theme}>
      <img
        src="https://image.flaticon.com/icons/svg/1164/1164954.svg"
        width="224"
        height="224"
        alt="Sun free icon"
        title="Sun free icon"
      />
      <img
        src="https://image.flaticon.com/icons/svg/2033/2033921.svg"
        width="224"
        height="224"
        alt="Moon free icon"
        title="Moon free icon"
      />
    </Toggle>
  );
};

export default ThemeToggle;
