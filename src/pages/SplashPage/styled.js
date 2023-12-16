import styled from "styled-components";

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

export const Title = styled.div`
  font-family: 'Kalnia', sans-serif; /* Example font */
  font-variant: small-caps;
  font-weight: 700;
  font-size: 4rem; /* Example size */
  color: #d35400; /* Example color */
  text-align: center;
  margin: 20px 0;
  text-shadow: 1px 1px 2px grey;
`;