import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

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
`;

export const LinkTag = styled(LinkR)`
  text-decoration: none;
  border-radius: 15px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.2rem;
  padding: 6.85px 20.5px;
  margin: 10px;
  color: #fff;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.45),
    rgba(0, 0, 0, 0.75)
  );

  @media screen and (max-width: 330px) {
    padding: 8.5px 18px;
    margin: 12px;
    font-size: 0.9rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 97%;
  margin: 10px auto;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Info = styled.div`
  margin-top: 20px;
  border: 1px solid #0006;
  box-shadow: 2.5px 3.5px 3px rgb(0 0 0 / 55%);
  padding: 20px;
  width: 85%;
  margin-right: 25px;
  border-radius: 17px;
  margin-left: 10px;

  h3 {
    font-size: 1.8rem;
    padding-bottom: 15px;
    font-weight: 400;
    text-align: center;
  }
  h2 {
    font-size: 1.45rem;
    padding-bottom: 6px;
  }
  p {
    font-size: 1.1rem;
    padding-bottom: 4px;
  }
  span {
    font-size: 1.35rem;
    font-weight: 400;
  }
  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 1.35rem;
    color: #05372b;
  }

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    margin-top: 20px;
    font-size: 1.4rem;
  }
`;

export const ImgContainer = styled.div`
  border: 1px solid #00000059;
  height: 300px;
  width: 30%;
  position: relative;
  top: 25px;
  right: 5px;
  box-shadow: 1px 2.5px 7px rgb(0 0 0 / 80%);
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 540px) {
    margin: 0 auto;
    width: 50%;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1025px) {
    width: 23%;
    top: 22px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardHolder = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transition: all 0.8s ease;

  :hover {
    transform: rotateY(180deg);
  }
`;

export const Character = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
`;

export const CharacterInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  transform: rotateY(180deg);

  .CharacterInfo {
    text-align: center;

    font-size: 1.3rem;
    font-weight: 400;
    padding-bottom: 8px;

    :first-child {
      margin-top: 12px;
    }
  }
`;

export const ArrowLeft = styled(BsArrowLeftShort)`
  position: absolute;
  color: #000;
  bottom: -35px;
  font-size: 1.9rem;
  left: 10px;
  cursor: pointer;
`;

export const ArrowRight = styled(BsArrowRightShort)`
  position: absolute;
  color: #000;
  bottom: -35px;
  font-size: 1.9rem;
  right: 10px;
  cursor: pointer;
`;

export const Button = styled.button`
  position: absolute;
  color: #000;
  bottom: -45px;
  font-size: 1.9rem;
  right: 10px;
  cursor: pointer;
`;
