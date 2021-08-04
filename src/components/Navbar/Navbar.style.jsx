import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Wrapper = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  height: 65px;
  max-height: 115px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background: rgb(0, 125, 89);
  background: linear-gradient(
    281deg,
    rgba(0, 125, 89, 1) 0%,
    rgba(91, 236, 192, 1) 54%,
    rgba(0, 179, 139, 1) 100%
  );
  box-shadow: 1px 2px 3px #000;
  /* position: fixed;
  top: 0;
  left: 0; */

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 115px;
  }

  @media only screen and (max-width: 360px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 105px;
  }

  @media only screen and (max-width: 280px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 70px;
  }

  @media only screen and (max-width: 375px) {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 95px;
    width: 100%;
  }
`;

export const LogoContainer = styled.div`
  /* border: 1px solid red; */
  margin-left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Title = styled(LinkS)`
  color: #fff;
  font-weight: 599;
  font-size: 1.7rem;
  letter-spacing: 0.15rem;
  text-shadow: 1px 2px 3px #000;
  cursor: pointer;
  position: relative;

  transition: all 0.5s ease-in-out;

  :hover {
    color: #fb0505;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  margin-right: 2rem;

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    margin: 1rem auto;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ListItem = styled.li`
  list-style-type: none;
  font-size: 1.3rem;
  margin-right: 1.5rem;

  :last-child {
    margin-right: 0rem;
  }
`;

export const Linkr = styled(LinkR)`
  color: #000;
  background: #fff;
  border-radius: 15px;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  padding: 0.2px 15px;
  padding-bottom: 0.7px;

  transition: all 0.4s ease-in-out;

  :hover {
    background: transparent;
    border-radius: 0;
    text-shadow: 1px 1.5px 3px #fff;
    letter-spacing: 0.1rem;
  }

  @media only screen and (max-width: 375px) and (min-width: 281px) {
    font-size: 1rem;
  }
  @media only screen and (max-width: 280px) {
    font-size: 0.55rem;
  }
`;

export const Links = styled(LinkS)`
  color: #000;
  background: #fff;
  border-radius: 15px;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  padding: 0.2px 15px;
  padding-bottom: 0.7px;

  transition: all 0.4s ease-in-out;

  :hover {
    background: transparent;
    border-radius: 0;
    text-shadow: 1px 1.5px 3px #fff;
  }

  @media only screen and (max-width: 375px) and (min-width: 281px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 280px) {
    font-size: 0.55rem;
  }
`;
