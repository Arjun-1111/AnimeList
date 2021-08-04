import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const WrapperContainer = styled.div`
  .heading {
    font-size: 1.8rem;
    text-align: center;
    font-weight: 400;
    text-transform: uppercase;
    margin-top: 1.5rem;
    letter-spacing: 0.2rem;
    position: relative;

    :after {
      content: "";
      position: absolute;
      width: 80%;
      height: 2px;
      background: black;
      bottom: -5px;
      left: 118px;

      @media screen and (max-width: 1024px) {
        width: 100%;
        left: 0;
        bottom: -8px;
      }
    }
  }
`;

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.2rem;
  width: 80%;
  margin: 2.5rem auto;

  animation: animateHeroImage 1s;

  @media screen and (max-width: 414px) {
    position: relative;
    overflow: hidden;
    display: flex;
    width: 150px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.5rem auto;
    animation: animateHeroImage 1s;
  }

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ItemContainer = styled.div`
  height: 200px;
  width: 150px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  box-shadow: 2.5px 1.5px 4px #000;
`;

export const LinkTag = styled(LinkR)`
  text-decoration: none;
`;
