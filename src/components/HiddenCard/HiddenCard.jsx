import React from "react";
import { Wrapper, Title } from "./HiddenCard.style";

const HiddenCard = ({ title, episodes, score, rated, type }) => {
  return (
    <Wrapper>
      <Title>
        <p className="title">{title}</p>
        <p>Episodes: {episodes}</p>
        <p>Score: {score}</p>
        <p>Rated: {rated}</p>
        <p>Type: {type}</p>
      </Title>
    </Wrapper>
  );
};

export default HiddenCard;
