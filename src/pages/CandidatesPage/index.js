// src/pages/CandidatesPage/index.js
import React from 'react';
import CandidateList from './CandidateList';
import PageLayout from "../../layout/PageLayout";

const CandidatesPage = () => {
  return (
    <PageLayout>
      <CandidateList />
    </PageLayout>
  );
};

export default CandidatesPage;
