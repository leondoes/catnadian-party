import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CatArm } from './styled'; // import the styled component

const CatArmSwipe = ({ path }) => {
  const [active, setActive] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    setActive(true);
    setTimeout(() => {
      history.push(path);
      setActive(false);
    }, 500); // Match this duration with the animation duration
  };

  return <CatArm active={active} onClick={handleClick} />;
};

export default CatArmSwipe;
