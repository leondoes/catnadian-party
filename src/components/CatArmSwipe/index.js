import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CatArm, CatArmContent, ScratchMark } from './styled'; // import styled components

const CatArmSwipe = ({ path, children }) => {
  const [active, setActive] = useState(false);
  const [direction, setDirection] = useState('left');
  const navigate = useNavigate();

  const handleClick = () => {
    const randomDirection = Math.random() < 0.5 ? 'left' : 'right';
    setDirection(randomDirection);
    setActive(true);
    setTimeout(() => {
      navigate(path);
      setActive(false);
    }, 500); // Match this duration with the animation duration
  };

  return (
    <div>
      <CatArm $active={active} $direction={direction} onClick={handleClick}>
        <CatArmContent>{children}</CatArmContent>
      </CatArm>
      <ScratchMark $active={active} />
    </div>
  );
};

export default CatArmSwipe;