import React from "react";
import {
  Wrapper,
  LogoContainer,
  Title,
  LinksContainer,
  List,
  ListItem,
  Links,
} from "./Navbar.style";

const Navbar = () => {
  return (
    <Wrapper id="Home">
      <LogoContainer>
        <Title to="Home" spy={true} smooth={true} offset={-66} duration={500}>
          ANIME LIST
        </Title>
      </LogoContainer>
      <LinksContainer>
        <List>
          <ListItem>
            <Links
              to="topAiring"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Top Airing
            </Links>
          </ListItem>
          <ListItem>
            <Links
              to="UpComing"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Up Coming Week
            </Links>
          </ListItem>
        </List>
      </LinksContainer>
    </Wrapper>
  );
};

export default Navbar;
