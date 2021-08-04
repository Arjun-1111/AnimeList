import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  background: rgb(0, 125, 89);
  background: linear-gradient(
    281deg,
    rgba(0, 125, 89, 1) 0%,
    rgba(91, 236, 192, 1) 54%,
    rgba(0, 179, 139, 1) 100%
  );
  padding: 0 20px;
`;

export const Content = styled.div`
  position: relative;
  max-width: 1280px;
  width: 100%;
  height: 48px;
  background: #353535;
  margin: 0 auto;
  border-radius: 40px;
  color: #fff;

  img {
    position: absolute;
    left: 15px;
    top: 11px;
    width: 29px;
  }

  input {
    font-size: 28px;
    position: absolute;
    left: 0;
    margin: 4px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: #fff;

    :focus {
      outline: none;
    }
  }
`;
