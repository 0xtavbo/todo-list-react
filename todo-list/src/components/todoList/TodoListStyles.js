import styled from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonStyled = styled.button`
  background-color: black;
  color: white;
  width: 100px;
  height: 40px;
  border: none;
  text-align: center;
  justify-content: center;
  border-radius: 15px;
  cursor: pointer;
  margin-left: 15px;
  font-size: 1em;

  &:hover {
    background-color: #667788;
    border: 1px solid white;
  }
`;

export const InputStyled = styled.input`
  border: none;
  border-radius: 20px;
  width: 55vw;
  height: 35px;
  background-color: black;
  color: white;
  padding-left: 15px;
  margin-bottom: 2rem;
  font-size: 1em;
`;
