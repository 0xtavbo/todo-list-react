import styled from "styled-components";
import { mobile } from "../../media/queries";

export const NavbarContainerStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  margin: 0 auto;
  padding: 22px 20px;

  width: 92%;
  height: 50px;
`;

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  & img {
    height: 50px;
    margin-right: 15px;
    filter: invert(100);
  }
`;

export const TitleStyled = styled.h2`
  margin: 0;
  align-items: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;

  color: white;

  ${mobile} {
    display: none;
  }
`;

export const LinkContainerStyled = styled.div`
  display: flex;

  gap: 45px;

  a:last-child {
    font-size: 20px;
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 5px;
  }
`;
