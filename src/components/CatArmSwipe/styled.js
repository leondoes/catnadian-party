import styled, { keyframes, css } from 'styled-components';
import testclaw from '../../assets/testclaw.png'; // Ensure the path is correct

// Define the swipe animation
const swipe = keyframes`
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;

// Styled component for CatArm with conditional animation
export const CatArm = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100px; // Adjust based on the size of the testclaw image
    height: 100px; // Adjust based on the size of the testclaw image
    background: url(${testclaw}) no-repeat center center;
    background-size: contain;
    transform: translateY(-50%);
    opacity: 0; // Initially hide the claws
    transition: opacity 0.2s ease-in-out; // Transition for showing/hiding claws
    ${props => props.$active && css`
      opacity: 1;
      animation: ${swipe} 0.5s forwards;
    `}
  }
`;

export const CatArmContent = styled.div`
  display: inline-block;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  position: relative; // Ensure it's positioned correctly within CatArm
  z-index: 1; // Ensure the content is above the ::after element
`;
