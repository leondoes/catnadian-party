import React from 'react';
import PropTypes from 'prop-types';

const CandidateCard = ({ name, photo, bio }) => {
  return (
    <div className="candidate-card">
      <img src={photo} alt={`${name}`} className="candidate-photo" />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
};

CandidateCard.propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default CandidateCard;