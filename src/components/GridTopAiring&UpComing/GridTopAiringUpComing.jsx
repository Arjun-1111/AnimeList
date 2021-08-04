import React from "react";
import Card from "../Card/Card";
import HiddenCard from "../HiddenCard/HiddenCard";

import {
  Wrapper,
  ItemContainer,
  LinkTag,
  WrapperContainer,
} from "./GridTopAiringUpComing.style";

const GridTopAiringUpComing = ({ value }) => {
  return (
    <WrapperContainer>
      <p className="heading">Top Airing</p>
      <Wrapper id="topAiring">
        {/* {value.hasOwnProperty("top") ? ( */}
        {
          value.map(
            (item) =>
              item.rank < 16 && (
                <LinkTag to={`/single_list/${item.mal_id}`} key={item.mal_id}>
                  <ItemContainer>
                    <Card img_url={item.image_url} id={item.mal_id} />
                    <HiddenCard
                      title={item.title}
                      episodes={item.episodes}
                      score={item.score}
                      type={item.type}
                    />
                  </ItemContainer>
                </LinkTag>
              )
          )
          // ) : (
          //   <Spinner />
          // )}
        }
      </Wrapper>
    </WrapperContainer>
  );
};

export default GridTopAiringUpComing;
