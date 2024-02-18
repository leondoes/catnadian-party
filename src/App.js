import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./styles.css";
import package_json from "../package.json";

import NavBar from '../src/components/NavBar';
import SplashPage from '../src/pages/SplashPage';
import HomePage from '../src/pages/HomePage';
import CandidatesPage from '../src/pages/CandidatesPage';
import ContactPage from '../src/pages/ContactPage';
import EventsPage from '../src/pages/EventsPage';
import DonationsPage from '../src/pages/DonationsPage';
import ManifestoPage from '../src/pages/ManifestoPage';
import MerchandisePage from '../src/pages/MerchandisePage';

const App = () => {
  document.body.style.margin = 0;
  document.title = "Catnadian Party of Canada";
  window.__leonVersion = package_json.version;

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/candidates" element={<CandidatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/donations" element={<DonationsPage />} />
        <Route path="/manifesto" element={<ManifestoPage />} />
        <Route path="/merchandise" element={<MerchandisePage />} />
        <Route path="/" element={<SplashPage/>} />
      </Routes>
    </div>
  );
};

export default App;
