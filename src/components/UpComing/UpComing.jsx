import React from "react";
import Card from "../Card/Card";
import HiddenCard from "../HiddenCard/HiddenCard";

import {
  Wrapper,
  ItemContainer,
  LinkTag,
  WrapperContainer,
} from "./UpComing.style";

const TopUpComing = ({ value, title }) => {
  return (
    <WrapperContainer>
      <p className="heading">{title}</p>
      <Wrapper id="UpComing">
        {
          value.map(
            (item, index) =>
              index < 16 && (
                <LinkTag to={`/single_list/${item.mal_id}`} key={item.mal_id}>
                  <ItemContainer>
                    <Card img_url={item.image_url} id={item.mal_id} />
                    <HiddenCard
                      title={item.title}
                      episodes={item.episodes}
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

export default TopUpComing;
