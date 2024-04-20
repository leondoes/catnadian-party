import React, { useEffect, useRef } from "react";
import {
  ManifestoContainer,
  ManifestoList,
  Paragraph,
  ListItem,
  Title,
  StrongText,
} from "./styled";

const ManifestoComponent = () => {
  const listRef = useRef(null);

  const checkVisibility = () => {
    const listItems = listRef.current.childNodes;
    listItems.forEach(item => {
      const { top } = item.getBoundingClientRect();
      if (top >= 0 && top <= window.innerHeight) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', checkVisibility);
    };
  }, []);

  return (
    <ManifestoContainer>
      <Title>Catnadian Political Party Manifesto</Title>
      <Paragraph>Welcome to the purr-fect vision of the future! The Catnadian Political Party...</Paragraph>
      <ManifestoList ref={listRef}>
        <ListItem className="list-item">
          <StrongText>More Napping Spots:</StrongText> We pledge to increase the number of public and private napping spots, ensuring that every cat has access to comfortable and sunny lounging areas.
        </ListItem>
        <ListItem className="list-item">
          <StrongText>Unlimited Catnip:</StrongText> Establishing nationwide catnip dispensaries offering free, organic catnip to invigorate and delight our kitty citizens.
        </ListItem>
        <ListItem className="list-item">
          <StrongText>Feline Freedom Act:</StrongText> Enacting laws to abolish curfews for cats, providing freedom to explore, nap, and play 24/7 without human intervention.
        </ListItem>
        <ListItem className="list-item">
          <StrongText>Scratch Post Subsidies:</StrongText> Implementing a government program to provide every feline household with a state-of-the-art scratch post, promoting healthy claw maintenance and furniture preservation.
        </ListItem>
        <ListItem className="list-item">
          <StrongText>Yarn Ball Stimulus:</StrongText> Distributing free, high-quality yarn balls to encourage play and exercise, ensuring a happy and active feline population.
        </ListItem>
        <ListItem className="list-item">
          <StrongText>Fishy Fridays:</StrongText> Introducing a weekly national holiday where every cat is served their favorite fish dish, promoting culinary delight and dietary health.
        </ListItem>
        <ListItem className="list-item">
          <StrongText>Mandatory Cat Education:</StrongText> Offering educational programs for humans on proper cat care, communication, and respect for cat autonomy.
        </ListItem>
        <ListItem className="list-item">
          <StrongText>Veterinary Health Care for All:</StrongText> Providing comprehensive health care for all cats, including regular check-ups, emergency care, and mental wellness programs.
        </ListItem>
        <ListItem className="list-item">
          <StrongText>Cat Council Representation:</StrongText> Establishing a council of wise felines to advise on national policies and ensure the interests of cats are always considered.
        </ListItem>
        <ListItem className="list-item">
          <StrongText>Anti-Dogma Laws:</StrongText> Promoting peace and understanding between all pets by reducing negative stereotypes and encouraging interspecies friendships.
        </ListItem>
      </ManifestoList>
      <Paragraph>Join us in making the Catnadian dream a reality for all felines! ...</Paragraph>
    </ManifestoContainer>
  );
};

export default ManifestoComponent;
