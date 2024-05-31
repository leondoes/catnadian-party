import styled, { keyframes } from "styled-components";

const swipe = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const CatArm = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
  height: 200px;
  background: url('/path-to-your-cat-arm-image.png') no-repeat;
  background-size: contain;
  transform: translateX(-100%);
  animation: ${props => props.active ? `${swipe} 0.5s forwards` : 'none'};
  z-index: 10;
`;
