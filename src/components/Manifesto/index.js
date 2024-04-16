import React from "react";
import { useInView } from 'react-intersection-observer';
import {
  ManifestoContainer,
  ManifestoList,
  Paragraph,
  ListItem,
  Title,
  StrongText,
} from "./styled";

const manifestoItems = [
  {
    title: "More Napping Spots",
    description: "We pledge to increase the number of public and private napping spots, ensuring that every cat has access to comfortable and sunny lounging areas."
  },
  {
    title: "Unlimited Catnip",
    description: "Establishing nationwide catnip dispensaries offering free, organic catnip to invigorate and delight our kitty citizens."
  },
  {
    title: "Feline Freedom Act",
    description: "Enacting laws to abolish curfews for cats, providing freedom to explore, nap, and play 24/7 without human intervention."
  },
  {
    title: "Scratch Post Subsidies",
    description: "Implementing a government program to provide every feline household with a state-of-the-art scratch post, promoting healthy claw maintenance and furniture preservation."
  },
  {
    title: "Yarn Ball Stimulus",
    description: "Distributing free, high-quality yarn balls to encourage play and exercise, ensuring a happy and active feline population."
  },
  {
    title: "Fishy Fridays",
    description: "Introducing a weekly national holiday where every cat is served their favorite fish dish, promoting culinary delight and dietary health."
  },
  {
    title: "Mandatory Cat Education",
    description: "Offering educational programs for humans on proper cat care, communication, and respect for cat autonomy."
  },
  {
    title: "Veterinary Health Care for All",
    description: "Providing comprehensive health care for all cats, including regular check-ups, emergency care, and mental wellness programs."
  },
  {
    title: "Cat Council Representation",
    description: "Establishing a council of wise felines to advise on national policies and ensure the interests of cats are always considered."
  },
  {
    title: "Anti-Dogma Laws",
    description: "Promoting peace and understanding between all pets by reducing negative stereotypes and encouraging interspecies friendships."
  }
];

const ManifestoComponent = () => {
  return (
    <ManifestoContainer>
      <Title>Catnadian Political Party Manifesto</Title>
      <Paragraph>Welcome to the purr-fect vision of the future! The Catnadian Political Party...</Paragraph>
      <ManifestoList>
        {manifestoItems.map((item, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.5  // Adjust this value as needed for your design
          });

          return (
            <ListItem ref={ref} className={inView ? 'visible' : ''} key={index}>
              <StrongText>{item.title}:</StrongText> {item.description}
            </ListItem>
          );
        })}
      </ManifestoList>
      <Paragraph>Join us in making the Catnadian dream a reality for all felines! ...</Paragraph>
    </ManifestoContainer>
  );
};

export default ManifestoComponent;
