import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 200px;
  width: 150px;
  border-radius: 15px;
  overflow: hidden;
  background: rgb(0, 125, 89);
  color: #fff;

  z-index: -1;
`;

export const Title = styled.h5`
  position: absolute;
  font-size: 0.95rem;
  overflow: hidden;
  top: 10px;
  left: 8px;

  @media only screen and (max-width: 880px) {
    text-align: center;
    left: 10px;

    .title {
      padding: 0px 2px 0px 10px;
    }
  }
`;
