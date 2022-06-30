import React from "react";
import {
  HomeButtonStyled,
  HomeContainerStyled,
  HomeContentStyled,
  HomeDescriptionStyled,
  HomeImageContainer,
  HomeTitleStyled,
} from "./HomeStyles";

const Home = () => {
  return (
    <HomeContainerStyled>
      <HomeContentStyled>
        <HomeTitleStyled>Betar</HomeTitleStyled>
        <HomeDescriptionStyled>
          Enjoy your to-do lists, along with the number 1 Pokémon Encyclopedia of the world!
        </HomeDescriptionStyled>
      </HomeContentStyled>
    </HomeContainerStyled>
  );
};

export default Home;
