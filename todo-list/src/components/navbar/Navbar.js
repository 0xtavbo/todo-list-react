import React from "react";
import { useNavigate } from "react-router-dom";
import LinkItem from "../linkItem/LinkItem";
import {
  LinkContainerStyled,
  LogoStyled,
  NavbarContainerStyled,
  TitleStyled,
} from "./NavbarStyles";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainerStyled>
      <LogoStyled onClick={() => navigate("/")}>
        <img src={Logo} alt="Logo" />
        <TitleStyled>Todor</TitleStyled>
      </LogoStyled>

      <LinkContainerStyled>
        <LinkItem to="/">Home</LinkItem>
        <LinkItem to="/lists">Lists</LinkItem>
        <LinkItem to="/create">Create</LinkItem>
      </LinkContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
