import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CatArm, CatArmContent } from './styled'; // import styled components

const CatArmSwipe = ({ path, children }) => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setActive(true);
    setTimeout(() => {
      navigate(path);
      setActive(false);
    }, 500); // Match this duration with the animation duration
  };

  return (
    <CatArm $active={active} onClick={handleClick}>
      <CatArmContent>{children}</CatArmContent>
    </CatArm>
  );
};

export default CatArmSwipe;
