import styled from "styled-components";

export const Wrapper = styled.div`
  height: 200px;
  width: 150px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  bottom: 0;
  left: 0;
  transition: all 0.6s ease-in-out;

  :hover {
    bottom: -160px;
    transition: all 0.6s ease-in-out;
  }

  @media only screen and (max-width: 880px) {
    height: 200px;
    width: 150px;
    border-radius: 15px;
    overflow: hidden;
    background: #000;
    position: relative;
    left: 0;
    top: 0;
    transition: all 0.6s ease-in-out;

    :hover {
      left: -130px;
      transition: all 0.6s ease-in-out;
    }
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const PTag = styled.p`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 45px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.85),
    rgba(0, 0, 0, 0.55)
  );
  text-decoration: none;
  color: #fff;
  padding-left: 43px;
  padding-top: 12px;

  @media only screen and (max-width: 880px) {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 42px;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.55)
    );
    text-decoration: none;
    color: #fff;
    padding-left: 5px;
    padding-top: 35px;
  }
`;
