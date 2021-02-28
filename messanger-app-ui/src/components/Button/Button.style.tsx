import styled from "styled-components";

interface ButtonProps {
  height: string;
  width: string;
}

export const Button = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-decoration: none;
  &:hover {
    background-color: #4095c6;
  }
`;
