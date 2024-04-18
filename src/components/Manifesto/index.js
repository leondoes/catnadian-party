import React from "react";
import {
  ManifestoContainer,
  ManifestoList,
  Paragraph,
  ListItem,
  Title,
  StrongText,
} from "./styled";

const ManifestoComponent = () => {
  return (
    <ManifestoContainer>
      <Title>Catnadian Political Party Manifesto</Title>
      <Paragraph>
        Welcome to the purr-fect vision of the future! The Catnadian Political
        Party...
      </Paragraph>
      <ManifestoList>
        <ListItem>
          <StrongText>More Napping Spots:</StrongText> We pledge to increase the
          number of public and private napping spots, ensuring that every cat
          has access to comfortable and sunny lounging areas.
        </ListItem>
        <ListItem>
          <StrongText>Unlimited Catnip:</StrongText> Establishing nationwide
          catnip dispensaries offering free, organic catnip to invigorate and
          delight our kitty citizens.
        </ListItem>
        <ListItem>
          <StrongText>Feline Freedom Act:</StrongText> Enacting laws to abolish
          curfews for cats, providing freedom to explore, nap, and play 24/7
          without human intervention.
        </ListItem>
        <ListItem>
          <StrongText>Scratch Post Subsidies:</StrongText> Implementing a
          government program to provide every feline household with a
          state-of-the-art scratch post, promoting healthy claw maintenance and
          furniture preservation.
        </ListItem>
        <ListItem>
          <StrongText>Yarn Ball Stimulus:</StrongText> Distributing free,
          high-quality yarn balls to encourage play and exercise, ensuring a
          happy and active feline population.
        </ListItem>
        <ListItem>
          <StrongText>Fishy Fridays:</StrongText> Introducing a weekly national
          holiday where every cat is served their favorite fish dish, promoting
          culinary delight and dietary health.
        </ListItem>
        <ListItem>
          <StrongText>Mandatory Cat Education:</StrongText> Offering educational
          programs for humans on proper cat care, communication, and respect for
          cat autonomy.
        </ListItem>
        <ListItem>
          <StrongText>Veterinary Health Care for All:</StrongText> Providing
          comprehensive health care for all cats, including regular check-ups,
          emergency care, and mental wellness programs.
        </ListItem>
        <ListItem>
          <StrongText>Cat Council Representation:</StrongText> Establishing a
          council of wise felines to advise on national policies and ensure the
          interests of cats are always considered.
        </ListItem>
        <ListItem>
          <StrongText>Anti-Dogma Laws:</StrongText> Promoting peace and
          understanding between all pets by reducing negative stereotypes and
          encouraging interspecies friendships.
        </ListItem>
      </ManifestoList>
      <Paragraph>
        Join us in making the Catnadian dream a reality for all felines! ...
      </Paragraph>
    </ManifestoContainer>
  );
};

export default ManifestoComponent;