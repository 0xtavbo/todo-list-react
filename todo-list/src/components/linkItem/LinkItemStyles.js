import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkItemStyled = styled(NavLink)`
  font-size: 18px;
  line-height: 24px;

  color: #000000;
  text-decoration: none;

  &.active {
    color: #ffffff;
  }
`;
