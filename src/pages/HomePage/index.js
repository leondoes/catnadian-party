import React, { useEffect, useRef } from "react";
import {
  PageContainer,
  Title,
  StyledManifesto,
  StyledContactForm,
  StyledCatnadianEventsList,
  SplashPicture,
  Wrapper,
} from "./styled";
import ManifestoComponent from "../../components/Manifesto";
import ContactForm from "../../components/ContactForm";
import CatnadianEventsList from "../../components/Events";
import logo from "../../assets/logo.png";

const HomePage = () => {
  const refManifesto = useRef(null);
  const refContactForm = useRef(null);
  const refEventsList = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const refs = [refManifesto, refContactForm, refEventsList];
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () =>
      refs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
  }, []);

  return (
    <PageContainer>
      <Title>The Catnadian Party of Canada</Title>
      <SplashPicture>
        <img src={logo} alt="Logo" />
      </SplashPicture>
      <Wrapper>
        <StyledManifesto ref={refManifesto}>
          <ManifestoComponent />
        </StyledManifesto>
      </Wrapper>
      <Wrapper>
        <StyledContactForm ref={refContactForm}>
          <ContactForm />
        </StyledContactForm>
      </Wrapper>
      <Wrapper>
        <StyledCatnadianEventsList ref={refEventsList}>
          <CatnadianEventsList />
        </StyledCatnadianEventsList>
      </Wrapper>
    </PageContainer>
  );
};

export default HomePage;
