import React, { useContext } from "react";
import { Wrapper, ItemContainer, LinkTag } from "./GridContainer.style";
import Card from "../Card/Card";
import HiddenCard from "../HiddenCard/HiddenCard";
import { GlobalContext } from "../../context/GlobalContext";

const GridContainer = () => {
  const { searches } = useContext(GlobalContext);
  return (
    <Wrapper>
      {searches.hasOwnProperty("results") ? (
        searches.results.map((item) => (
          <LinkTag to={`/single_list/${item.mal_id}`} key={item.mal_id}>
            <ItemContainer>
              <Card img_url={item.image_url} id={item.mal_id} />
              <HiddenCard
                title={item.title}
                episodes={item.episodes}
                score={item.score}
                rated={item.rated}
                type={item.type}
              />
            </ItemContainer>
          </LinkTag>
        ))
      ) : (
        <p>No Results Found!!!</p>
      )}
    </Wrapper>
  );
};

export default GridContainer;
