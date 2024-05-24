import styled from 'styled-components';

export const DrawerButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
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
  overflow-y: auto;
  padding: 20px;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const CartItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

export const ItemDetails = styled.div`
  flex: 1;
  margin-left: 10px;
`;

export const ItemName = styled.p`
  margin: 0;
  font-weight: bold;
`;

export const ItemPrice = styled.p`
  margin: 0;
`;

export const RemoveItemButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 0.9rem;
  margin-left: auto;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7875;
  }

  &:focus {
    outline: none;
  }
`;

export const ItemQuantity = styled.p`
  font-size: 0.9rem;
  color: #333;
  margin: 5px 0;
  font-weight: bold;
`;
