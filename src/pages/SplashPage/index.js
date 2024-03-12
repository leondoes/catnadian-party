import React from 'react';
import img from '../../assets/logo.png';
import { SplashPicture, PageContainer, Title } from './styled';
import ContactForm from '../ContactForm';
import ManifestoComponent from '../../components/Manifesto';
import CatnadianEventsList from '../../components/Events';

const SplashPage = () => {
  return (
      <PageContainer>
        <Title>The Catnadian Party of Canada</Title>
        <SplashPicture>
          <img src={img} alt="Splash" />
        </SplashPicture>
        <ManifestoComponent/>
        <ContactForm/>
        <CatnadianEventsList/>
      </PageContainer>
  );
};

export default SplashPage;
