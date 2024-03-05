import styled, {keyframes} from 'styled-components';

export const DonationsContainer = styled.div`
  display: flex;
  flex-direction: row; // Ensure items are laid out horizontally
  overflow-x: hidden; // Hide overflow to enable the carousel effect
  position: relative; // Position relative to allow absolute positioning of items
  width: 100%; // Ensure the container takes full width
  height: 80vh; // Set to the height of the viewport for full screen display
  align-items: center; // Center items vertically
  justify-content: flex-start; // Start aligning items from the left
`;

export const DonationsItem = styled.div`
  min-width: 100%; // Each item takes full width of the container
  max-width: 100%; // Ensure item does not exceed container width
  position: absolute; // Positioned absolutely to allow for translateX manipulation
  will-change: transform; // Optimize for transform changes
  transition: transform 0.5s ease-out; // Smooth transition for the transform
  display: flex;
  flex-direction: column;
  align-items: center; // Center content within each donation item
  justify-content: center;
  height: 100%; // Take full height of the container
`;

export const ImageTitle = styled.h2`
  font-size: 24px; // Increased size for better visibility
  color: #333;
  padding: 20px 15px; // Adjust padding for better spacing
  text-align: center; // Center title text
  background-color: rgba(255, 255, 255, 0.85); // Slightly transparent background for better readability
  width: 100%; // Ensure title background spans entire width
  position: absolute; // Position absolutely to overlay on the bottom of the image
  bottom: 0; // Align to the bottom of the parent
`;

export const CatImage = styled.img`
  max-width: 100%; // Ensure image is responsive but does not exceed the width of its container
  max-height: 80vh; // Adjust based on your design needs
  object-fit: contain; // Keeps the entire image visible
  display: block;
  margin: 0; // Ensure there's no margin
  padding: 0; // Ensure there's no padding
`;



const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  animation: ${rotate} 2s linear infinite;
`;