import styled from 'styled-components';

export const DrawerButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
`;

export const CartDrawer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.5);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  overflow-y: auto; /* Added to allow scrolling if many items */
  padding: 20px; /* Adds some padding inside the drawer */
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px; /* Spacing between items */
`;

export const CartItemImage = styled.img`
  width: 50px; /* Fixed width for images */
  height: 50px; /* Fixed height for images */
  object-fit: cover; /* Ensure images cover the space without distortion */
  margin-right: 10px; /* Spacing between image and text */
`;

export const ItemDetails = styled.div`
  flex: 1;
  margin-left: 10px; /* Spacing between image and details */
`;

export const ItemName = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const ItemPrice = styled.p`
  margin: 0;
`;

export const RemoveItemButton = styled.button`
  background-color: #ff4d4f; /* A bright color to indicate an action like removal */
  color: white; /* White text to contrast with the background */
  border: none; /* No border for a modern look */
  padding: 5px 10px; /* Padding for button size */
  cursor: pointer; /* Cursor changes to pointer to indicate clickable */
  border-radius: 5px; /* Rounded corners */
  font-size: 0.9rem; /* Font size similar to item details */
  margin-left: auto; /* Push the button to the right */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */

  &:hover {
    background-color: #ff7875; /* Lighter shade on hover */
  }

  &:focus {
    outline: none; /* Removes outline to keep the design clean */
  }
`;

export const ItemQuantity = styled.p`
  font-size: 0.9rem; /* Matches the font size of the RemoveItemButton for consistency */
  color: #333; /* A darker color for good readability */
  margin: 5px 0; /* Adds a little space above and below for visual separation */
  font-weight: bold; /* Makes it stand out slightly, emphasizing the quantity */
`;

