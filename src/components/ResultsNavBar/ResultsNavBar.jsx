import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner.component";
import Search from "../../images/search-icon.svg";
import Footer from "../Footer/Footer";
import API from "../../Api";

import {
  Wrapper,
  LinkTag,
  Content,
  ImgContainer,
  Image,
  Info,
  Character,
  CharacterInfo,
  CardHolder,
  ArrowLeft,
  ArrowRight,
} from "./ResultsNavBar.style";

const initialImageDetails = {
  characters: [],
};

const ResultsNavBar = () => {
  const { id } = useParams();
  const [singleDetails, setSingleDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [imgData, setImgData] = useState(initialImageDetails);
  const [no, setNo] = useState(0);
  const maxNo = useRef(0);

  useEffect(() => {
    API.single_details(id).then((data) => setSingleDetails({ ...data }));
    API.characters_staff(id).then((data) =>
      setImgData({ characters: [...data.characters] })
    );
  }, [id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [imgData]);

  return (
    <>
      <Wrapper>
        <LinkTag to="/" className="back">
          BACK
        </LinkTag>
        {/* <LinkTag to="/" className="home">
          HOME
        </LinkTag> */}
      </Wrapper>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Content>
            <Info>
              <h3>{singleDetails.title}</h3>
              <h2>
                <span>Title (Eng):</span> {singleDetails.title_english}
              </h2>
              <h2>
                <span>Title (Japanese): </span>
                {singleDetails.title_japanese}
              </h2>
              <p>
                <span>Aired: </span>
                {singleDetails.aired.from}
              </p>
              <p>
                <span>Broadcast: </span>
                {singleDetails.broadcast}
              </p>
              <p>
                <span>Premiered: </span>
                {singleDetails.premiered}
              </p>
              <p>
                <span>Episodes: </span>
                {singleDetails.episodes}
              </p>
              <p>
                <span>Genres: </span>
                {singleDetails.genres.map((item) => item.name + " ")}
              </p>
              <p>
                <span>Rank: </span>
                {singleDetails.rank}
              </p>
              <p>
                <span>Rating: </span>
                {singleDetails.rating}
              </p>
              <p>
                <span>Score: </span>
                {singleDetails.score}
              </p>
              <p>
                <span>Scored By: </span>
                {singleDetails.scored_by}
              </p>
              <p>
                <span>Status: </span>
                {singleDetails.status}
              </p>
              <p>
                <span>Studios Name:</span>
                {singleDetails.studios.map((item) => item.name + " ")}
              </p>
              <p>
                <span>Synopsis: </span>
                {singleDetails.synopsis}
              </p>
              <a href={singleDetails.url} target="_blank" rel="noreferrer">
                Check Out More...
              </a>
              {/* {console.log(imgData.characters.length)} */}
            </Info>
            <ImgContainer>
              <CardHolder>
                <Character>
                  <Image
                    src={
                      imgData.characters[no] !== undefined
                        ? imgData.characters[no].image_url
                        : Search
                    }
                  />
                  {/* {console.log(imgData.characters[no])} */}
                </Character>
                <CharacterInfo>
                  <p className="CharacterInfo">
                    Name:{" "}
                    {imgData.characters[no] !== undefined
                      ? imgData.characters[no].name
                      : "Not Found"}
                  </p>
                  <p className="CharacterInfo">
                    Role:{" "}
                    {imgData.characters[no] !== undefined
                      ? imgData.characters[no].role
                      : "Not Found"}
                  </p>
                  <p className="CharacterInfo">
                    Voice Actors:
                    {imgData.characters[no] !== undefined
                      ? imgData.characters[no].voice_actors.map(
                          (item) => item.name + ""
                        )
                      : "Not Found"}
                  </p>
                </CharacterInfo>
              </CardHolder>

              <ArrowLeft
                onClick={() => {
                  no > 0 ? setNo(no - 1) : setNo(0);
                }}
              />
              <ArrowRight
                onClick={() => {
                  maxNo.current = imgData.characters.length - 1;
                  if (maxNo.current > no) {
                    setNo(no + 1);
                  }
                }}
              />
            </ImgContainer>
          </Content>
          <Footer />
        </>
      )}
    </>
  );
};

export default ResultsNavBar;
