import React from 'react';
import { ModalContainer, ModalContent, CloseButton } from './styled'; // Define these styled components according to your styling solution

const ProductModal = ({ children, isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <ModalContainer onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
        <CloseButton onClick={closeModal}>Close</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ProductModal;