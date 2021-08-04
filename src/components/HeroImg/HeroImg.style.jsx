import styled from "styled-components";

// Used es6 Destructuring in image => url(${({image}) => image})
export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url(${({ image }) => image}), #1c1c1c;
  background-size: cover;
  background-position: center;
  height: 475px;

  position: relative;
  width: 40%;

  left: -30%;
  margin: 0 auto;
  animation: animateHeroImage 1s;

  @media screen and (max-width: 1024px) and (min-width: 765px) {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 41%,
        rgba(0, 0, 0, 0.7) 100%
      ),
      url(${({ image }) => image}), #1c1c1c;
    background-size: contain;
    background-position: center;
    width: 100%;
    height: 900px;
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    animation: animateHeroImage 1s;
  }

  @media screen and (max-width: 764px) {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 41%,
        rgba(0, 0, 0, 0.7) 100%
      ),
      url(${({ image }) => image}), #1c1c1c;
    background-size: contain;
    background-position: center;
    height: 500px;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
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

  @media only screen and (max-width: 375px) {
    background-size: cover;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 41%,
        rgba(0, 0, 0, 0.7) 100%
      ),
      url(${({ image }) => image}), #1c1c1c;
    background-position: center;
    height: 500px;
    width: 100%;
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    animation: animateHeroImage 1s;
  }
`;

export const Content = styled.div`
  /* max-width: 1280px; */
`;

export const Text = styled.div`
  z-index: 100;
  width: 100%;
  position: absolute;
  bottom: 70px;
  min-height: 130px;
  padding-left: 20px;
  color: #fff;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.55) 41%,
    rgba(0, 0, 0, 0.2) 100%
  );

  h1 {
    font-size: 2.5rem;
    text-shadow: 1px 2px 3px #000;

    @media screen and (max-width: 720px) {
      font-size: 1.85rem;
    }
  }

  p {
    font-size: 1.55rem;

    @media screen and (max-width: 720px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 1024px) and (min-width: 721px) {
      font-size: 2.5rem;
    }
  }

  a {
    font-size: 1.2rem;
    text-decoration: none;
    color: #fff;
    transition: all 0.5s ease-in-out;

    :hover {
      color: #fb0505;
      letter-spacing: 0.05rem;
      text-shadow: 1px 2px 3px #000;
    }

    @media screen and (max-width: 720px) {
      font-size: 1.5rem;

      text-decoration: none;
      color: #fff;
    }

    @media screen and (max-width: 1024px) and (min-width: 721px) {
      font-size: 2.5rem;
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
    z-index: 100;

    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: #fff;
  }
`;

export const DetailsHero = styled.div`
  height: 475px;
  position: absolute;
  width: 140%;
  left: 105%;
  margin: 0 auto;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  h1 {
    color: #000;
    width: 100%;
  }

  p {
    color: #000;
    width: 100%;
    margin-bottom: 3px;
  }

  span {
    color: #000;
    font-size: 1.3rem;
    font-weight: 400;
  }

  .title {
    margin-top: 7px;
    display: block;
    font-weight: 400;
    text-align: center;
  }

  .aired {
    margin-top: 5px;
  }

  @media screen and (max-width: 1024px) and (min-width: 765px) {
    display: none;
  }

  @media screen and (max-width: 764px) {
    display: none;
  }
`;
