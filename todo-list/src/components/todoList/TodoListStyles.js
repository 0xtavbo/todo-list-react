import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
  background-color: black;
  color: white;
  width: 75px;
  height: 50px;
  border: 1px solid white;
  text-align: center;
  justify-content: center;

  &:hover {
    background-color: #667788;
  }

  ${(props) =>
    props.last &&
    css`
      border-top-right-radius: 9px;
      border-bottom-right-radius: 9px;
    `}

  cursor: pointer;
`;

export const InputStyled = styled.input`
  background-color: black;
  color: white;
`;