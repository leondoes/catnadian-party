import React from 'react';
import PropTypes from 'prop-types';
import {Card, Image, Name, Bio } from "./styled";

const CandidateCard = ({ name, photo, bio }) => {
  return (
    <Card>
      <Image src={photo} alt={name} />
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
    </Card>
  );
};

CandidateCard.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default CandidateCard;