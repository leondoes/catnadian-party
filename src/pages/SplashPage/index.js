import React, { useState, useEffect } from 'react';
// Import styled components
import { PageContainer, Title, StyledManifesto, StyledContactForm, StyledCatnadianEventsList } from './styled';
// Import components
import ManifestoComponent from '../../components/Manifesto';
import ContactForm from '../../components/ContactForm';
import CatnadianEventsList from '../../components/Events';

const SplashPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 100; // Adjust as needed
      setIsVisible(scrollCheck);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <PageContainer>
      <Title>The Catnadian Party of Canada</Title>
      <StyledManifesto style={{visibility: isVisible ? 'visible' : 'hidden'}}>
        <ManifestoComponent />
      </StyledManifesto>
      <StyledContactForm style={{visibility: isVisible ? 'visible' : 'hidden'}}>
        <ContactForm />
      </StyledContactForm>
      <StyledCatnadianEventsList style={{visibility: isVisible ? 'visible' : 'hidden'}}>
        <CatnadianEventsList />
      </StyledCatnadianEventsList>
    </PageContainer>
  );
};

export default SplashPage;
