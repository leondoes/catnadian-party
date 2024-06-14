import styled, { keyframes, css } from 'styled-components';
import testclaw from '../../assets/testclaw.png'; // Ensure the path is correct
import scratchmark from '../../assets/scratchmark.svg'; // Ensure the path is correct

// Define the swipe animations for both directions
const swipeLeft = keyframes`
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

const swipeRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
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
    width: 200px; // Adjust based on the new size of the testclaw image
    height: 200px; // Adjust based on the new size of the testclaw image
    background: url(${testclaw}) no-repeat center center;
    background-size: contain;
    transform: translateY(-50%);
    opacity: 0; // Initially hide the claws
    transition: opacity 0.2s ease-in-out; // Transition for showing/hiding claws
    ${props => props.$active && css`
      opacity: 1;
      animation: ${props.$direction === 'left' ? swipeLeft : swipeRight} 0.5s forwards;
    `}
  }
`;

// Styled component for ScratchMark
export const ScratchMark = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px; // Adjust the size of the scratch mark
  height: 150px; // Adjust the size of the scratch mark
  background: url(${scratchmark}) no-repeat center center;
  background-size: contain;
  transform: translate(-50%, -50%);
  opacity: 0;
  ${props => props.$active && css`
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  `}
`;

export const CatArmContent = styled.div`
  display: inline-block;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  position: relative; // Ensure it's positioned correctly within CatArm
  z-index: 1; // Ensure the content is above the ::after element
`;
