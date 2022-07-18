import React from "react";
import {
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
        <HomeTitleStyled>Todor</HomeTitleStyled>
        <HomeDescriptionStyled>
          Enjoy your to-do lists, all in one place
        </HomeDescriptionStyled>
      </HomeContentStyled>
    </HomeContainerStyled>
  );
};

export default Home;
