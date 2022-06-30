import React from "react";
import { useNavigate } from "react-router-dom";
import LinkItem from "../linkItem/LinkItem";
import {
  LinkContainerStyled,
  LogoStyled,
  NavbarContainerStyled,
  TitleStyled,
} from "./NavbarStyles";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainerStyled>
      <LogoStyled onClick={() => navigate("/")}>
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1655752940/coding/ReactQuery/LogoNucba_rtlry0.png"
          alt="Logo"
        />
        <TitleStyled>Betar</TitleStyled>
      </LogoStyled>

      <LinkContainerStyled>
        <LinkItem to="/">Home</LinkItem>
        <LinkItem to="todolist">To Do List</LinkItem>
        <LinkItem to="pokedex">Pokedex</LinkItem>
      </LinkContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;