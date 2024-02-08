import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import img from '../../assets/logo.png';
import { SplashPicture, PageContainer, Title } from './styled';

const SplashPage = () => {
  const [showMeta, setShowMeta] = useState(false);

  useEffect(() => {
    // Set a delay of 5000 milliseconds (5 seconds) to update the state
    const timer = setTimeout(() => setShowMeta(true), 5000);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showMeta && (
        <Helmet>
          <meta name="apple-itunes-app" content="app-id=6456223179" />
        </Helmet>
      )}
      <PageContainer>
        <Title>The Catnadian Party of Canada</Title>
        <SplashPicture>
          <img src={img} alt="Splash" />
        </SplashPicture>
      </PageContainer>
    </div>
  );
};

export default SplashPage;
