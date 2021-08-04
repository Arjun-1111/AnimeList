import React, { useContext, useState, useEffect } from "react";
import { Wrapper, Content, Text, DetailsHero } from "./HeroImg.style";
import { GlobalContext } from "../../context/GlobalContext";

import API from "../../Api";

const initialState = {
  title: "",
  episodes: 0,
  score: 0,
  url: "",
};
const detailsInitialState = {
  aired: "",
  rank: 0,
  rating: "",
  status: "",
  title: "",
  title_english: "",
  synopsis: "",
};

const HeroImg = () => {
  const { topAiring } = useContext(GlobalContext);
  const [heroImg, setHeroImg] = useState([]);
  const [heroImgDetails, setHeroImgDetails] = useState(initialState);
  const [details, setDetails] = useState(detailsInitialState);

  // Math.floor(Math.random() * (highestNumber - lowestNumber)) + lowestNumber

  useEffect(() => {
    const random = Math.floor(Math.random() * (35 - 1) + 1);
    const item = topAiring.top[random];
    API.hero_img(item.mal_id).then((data) =>
      setHeroImg(data.pictures[0].large)
    );
    API.single_details(item.mal_id).then((data) =>
      setDetails({
        aired: { ...data.aired },
        rank: data.rank,
        rating: data.rating,
        status: data.status,
        title: data.title,
        title_english: data.title_english,
        synopsis: data.synopsis,
      })
    );
    setHeroImgDetails({
      title: item.title,
      episodes: item.episodes,
      score: item.score,
      url: item.url,
    });
  }, [topAiring]);

  return (
    <Wrapper image={heroImg}>
      <Content>
        <Text>
          <h1>Title: {heroImgDetails.title}</h1>
          <p>Score: {heroImgDetails.score}</p>
          <p>
            Episodes:
            {heroImgDetails.episodes}
          </p>
          <a href={heroImgDetails.url} target="_blank" rel="noreferrer">
            More Info
          </a>
        </Text>
      </Content>
      <DetailsHero>
        <h1 className="title">
          {details.title} / {details.title_english}
        </h1>
        <p>
          <span>Aired: </span> {details.aired.from}
        </p>
        <p>
          <span>Rating: </span>
          {details.rating}
        </p>
        <p>
          <span>Rank: </span>
          {details.rank}
        </p>
        <p>
          <span>Status: </span>
          {details.status}
        </p>
        <p className="synopsis">
          <span>Synopsis: </span>
          {details.synopsis}
        </p>
      </DetailsHero>
    </Wrapper>
  );
};

export default HeroImg;
