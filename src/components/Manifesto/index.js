import React, { useEffect, useRef } from "react";
import { forEach, throttle } from 'lodash';
import { shuffle } from "lodash";
import {
  ManifestoContainer,
  ManifestoList,
  Paragraph,
  ListItem,
  Title,
  StrongText,
} from "./styled";

import chairmanmeow from "../../assets/candidates/chairmanmeow.jpg";
import whiskers from "../../assets/candidates/whiskers.jpg";
import paws from "../../assets/candidates/paws.jpg";
import mittens from "../../assets/candidates/mittens.jpg";
import socks from "../../assets/candidates/socks.jpg";
import boots from "../../assets/candidates/boots.jpg";
import biscuit from "../../assets/candidates/biscuit.jpg";
import coco from "../../assets/candidates/coco.jpg";
import tiger from "../../assets/candidates/tiger.jpg";
import shadow from "../../assets/candidates/shadow.jpg";
import simba from "../../assets/candidates/simba.jpg";
import luna from "../../assets/candidates/luna.jpg";
import ginger from "../../assets/candidates/ginger.jpg";
import felix from "../../assets/candidates/felix.jpg";

const ManifestoComponent = () => {
  const listRef = useRef(null);
  const containerRef = useRef(null);

  const candidatesImages = shuffle([
    chairmanmeow,
    whiskers,
    paws,
    mittens,
    socks,
    boots,
    biscuit,
    coco,
    tiger,
    shadow,
    simba,
    luna,
    ginger,
    felix,
  ]);

  const manifestoPoints = [
    "More Napping Spots: We pledge to increase the number of public and private napping spots, ensuring that every cat has access to comfortable and sunny lounging areas.",
    "Unlimited Catnip: Establishing nationwide catnip dispensaries offering free, organic catnip to invigorate and delight our kitty citizens.",
    "Feline Freedom Act: Enacting laws to abolish curfews for cats, providing freedom to explore, nap, and play 24/7 without human intervention.",
    "Scratch Post Subsidies: Implementing a government program to provide every feline household with a state-of-the-art scratch post, promoting healthy claw maintenance and furniture preservation.",
    "Yarn Ball Stimulus: Distributing free, high-quality yarn balls to encourage play and exercise, ensuring a happy and active feline population.",
    "Fishy Fridays: Introducing a weekly national holiday where every cat is served their favorite fish dish, promoting culinary delight and dietary health.",
    "Mandatory Cat Education: Offering educational programs for humans on proper cat care, communication, and respect for cat autonomy.",
    "Veterinary Health Care for All: Providing comprehensive health care for all cats, including regular check-ups, emergency care, and mental wellness programs.",
    "Cat Council Representation: Establishing a council of wise felines to advise on national policies and ensure the interests of cats are always considered.",
    "Anti-Dogma Laws: Promoting peace and understanding between all pets by reducing negative stereotypes and encouraging interspecies friendships."
  ];

  const checkVisibility = () => {
    const listItems = listRef.current.childNodes;
    forEach(listItems, (item) => {
      const { top } = item.getBoundingClientRect();
      if (top >= 0 && top <= window.innerHeight) {
        item.classList.add('visible');
      } else {
        item.classList.remove('visible');
      }
    });
  };

  const throttledCheckVisibility = throttle(checkVisibility, 100);

  useEffect(() => {
    window.addEventListener('scroll', throttledCheckVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledCheckVisibility);
    };
  }, [throttledCheckVisibility]);

  useEffect(() => {
    const handleScroll = () => {
      const container = listRef.current;
      const isBottom = container.scrollHeight - container.scrollTop === container.clientHeight;
      document.body.style.overflow = isBottom ? "auto" : "hidden";
    };
  
    const container = listRef.current;
    container.addEventListener('scroll', handleScroll);
  
    return () => {
      container.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = "auto"; // Reset the overflow when component unmounts
    };
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', throttledCheckVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledCheckVisibility);
    };
  }, [throttledCheckVisibility]);

  return (
    <ManifestoContainer ref={containerRef}>
      <Title>Catnadian Political Party Manifesto</Title>
      <Paragraph>Welcome to the purr-fect vision of the future! The Catnadian Political Party...</Paragraph>
      <ManifestoList ref={listRef}>
        {manifestoPoints.map((point, idx) => {
          return (
            <ListItem 
              key={idx} 
              className="list-item" 
              style={{ 
                backgroundImage: `url(${candidatesImages[idx % candidatesImages.length]})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            >
              <StrongText>{point.split(':')[0]}:</StrongText> {point.split(': ')[1]}
            </ListItem>
          );
        })}
      </ManifestoList>
      <Paragraph>Join us in making the Catnadian dream a reality for all felines! ...</Paragraph>
    </ManifestoContainer>
  );
};

export default ManifestoComponent;
