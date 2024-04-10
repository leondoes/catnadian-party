import styled, {keyframes} from "styled-components";

export const SplashPicture = styled.div`
  width: 50vw;
  margin: 0 auto; // Centers the div horizontally
  display: flex; // Enables flexbox
  justify-content: center; // Centers content horizontally in the flex container
  align-items: flex-start; // Aligns items to the start (top) of the flex container
`;

export const PageContainer = styled.div`
  background-color: #e2d8ce;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease; // Smooth transition for sliding up
  transform: translateY(0); // Start at current position

  &.hidden {
    transform: translateY(-100vh); // Slide up out of view
  }
`;

const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px); // starts the component 100px below its final position
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledManifesto = styled.div`
  opacity: 0; // Start as invisible
  animation: ${slideInFromBottom} 0.5s ease-out forwards;
  &.visible {
    opacity: 1; // Ensure it's visible when the class 'visible' is added
  }
`;

// Repeat for other components as needed, adjusting durations or delays for variety
export const StyledContactForm = styled.div`
  opacity: 0; // Start as invisible
  animation: ${slideInFromBottom} 0.5s ease-out forwards;
  &.visible {
    opacity: 1; // Ensure it's visible when the class 'visible' is added
  }
`;

export const StyledCatnadianEventsList = styled.div`
  opacity: 0; // Start as invisible
  animation: ${slideInFromBottom} 0.5s ease-out forwards;
  &.visible {
    opacity: 1; // Ensure it's visible when the class 'visible' is added
  }
`;

export const Title = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-variant: small-caps;
  font-weight: 900;
  font-size: 4rem;
  color: #d35400;
  text-align: center;
  margin: 20px 0;
  text-shadow: 1px 1px 2px grey;
`;