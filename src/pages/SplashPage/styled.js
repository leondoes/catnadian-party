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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly; // Centers buttons horizontally
  align-items: center; // Centers buttons vertically
  position: relative; // Position relative to allow absolute positioning inside
  height: 50px; // Set a fixed height for your container
  width: 100%; // Full width to center properly
`;

export const EnterButton = styled.button`
  font-family: 'Kalnia', sans-serif;
  font-weight: 400;
  font-size: 4rem;
  color: #d35400;
  background-color: transparent;
  border: 0px solid #d35400;
  border-radius: 5px;
  margin: 0; // Start with no margin
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  width: 200px; // Set a fixed width for both buttons
  text-shadow: 1px 1px 2px grey;

  &:hover {
    color: #ffffff;
    background-color: #d35400;
    transform: scale(1.05);
  }
`;

// Apply a manual offset if needed using margin
export const EnglishButton = styled(EnterButton)`
`;

export const FrenchButton = styled(EnterButton)`
  width: 250px;
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