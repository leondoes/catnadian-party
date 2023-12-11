import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'; // Import useNavigate
import "./styles.css";
import package_json from "../package.json";

import NavBar from '../src/components/NavBar';
import SplashPage from '../src/pages/SplashPage';
import HomePage from '../src/pages/HomePage';
import CandidatesPage from '../src/pages/CandidatesPage';
import ContactPage from '../src/pages/ContactPage';
import EventsPage from '../src/pages/EventsPage';
import GalleryPage from '../src/pages/GalleryPage';
import ManifestoPage from '../src/pages/ManifestoPage';
import MerchandisePage from '../src/pages/MerchandisePage';

document.body.style.margin = 0;
document.title = "Catnadian Party of Canada";
window.__leonVersion = package_json.version;

const App = () => {
  const [entered, setEntered] = useState(false);
  const navigate = useNavigate(); // Instantiate the useNavigate hook

  const onEnter = () => {
    setEntered(true);
    
    setTimeout(() => {
      document.querySelector('.NavBar').classList.add('show');
      navigate('/home'); // Navigate to the HomePage
    }, 500); // Assuming the splash page transition takes 0.5 seconds
  };

  useEffect(() => {
    document.body.style.overflow = entered ? 'auto' : 'hidden';
  }, [entered]);

  return (
    <div className="App">
  <SplashPage onEnter={onEnter} entered={entered} />
  <div className={entered ? "NavBar show" : "NavBar"}>
    <NavBar />
  </div>
  {entered && (
    <div className="App-content"> {/* This div wraps your Routes */}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/candidates" element={<CandidatesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/manifesto" element={<ManifestoPage />} />
        <Route path="/merchandise" element={<MerchandisePage />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  )}
</div>
  );
};

export default App;
