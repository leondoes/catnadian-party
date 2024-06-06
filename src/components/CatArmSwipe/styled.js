import styled, { keyframes } from 'styled-components';

// Define the swipe animation
const swipe = keyframes`
  from {
    transform: translateX(-100%); // Start from off-screen left
  }
  to {
    transform: translateX(100%); // End off-screen right
  }
`;

// Styled component for CatArm with conditional animation
export const CatArm = styled.div`
  position: fixed;
  top: 50%;
  left: 0;
  width: 100%;
  height: 200px;
  background: url('${require('../assets/testclaw.png')}') no-repeat;
  background-size: contain;
  transform: translateX(-100%); // Start from off-screen left
  animation: ${props => props.active ? `${swipe} 0.5s forwards` : 'none'};
  z-index: 10;
`;
