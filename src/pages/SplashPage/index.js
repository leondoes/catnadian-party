import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import img from '../../assets/logo.png';
import { SplashPicture, PageContainer, Title } from './styled';

const SplashPage = () => {
  const [showMeta, setShowMeta] = useState(true);

  useEffect(() => {
    // Set a delay of 5000 milliseconds (5 seconds) to show the meta tag
    const timer = setTimeout(() => setShowMeta(true), 3000);

    // Cleanup to prevent memory leak if the component unmounts before the timer fires
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
        <Title>The Catnadian Party of Canada</Title>{showMeta && (
        <div>
          sdsadsa
        </div>
      )}
        <SplashPicture>
          <img src={img} alt="Splash" />
        </SplashPicture>
      </PageContainer>
    </div>
  );
};

export default SplashPage;
