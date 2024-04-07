import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./styles.css";
import package_json from "../package.json";

import NavBar from '../src/components/NavBar';
import HomePage from '../src/pages/HomePage';
import CandidatesPage from '../src/pages/CandidatesPage';
import DonationsPage from '../src/pages/DonationsPage';
import MerchandisePage from '../src/pages/MerchandisePage';

const App = () => {
  document.body.style.margin = 0;
  document.title = "Catnadian Party of Canada";
  window.__leonVersion = package_json.version;

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/candidates" element={<CandidatesPage />} />
        <Route path="/donations" element={<DonationsPage />} />
        <Route path="/merchandise" element={<MerchandisePage />} />
      </Routes>
    </div>
  );
};

export default App;
