import React from "react";
import { Image, Wrapper, PTag } from "./Card.style";

const Card = ({ img_url }) => {
  return (
    <Wrapper>
      <PTag>Know More</PTag>
      <Image src={img_url} alt="img" />
    </Wrapper>
  );
};

export default Card;
