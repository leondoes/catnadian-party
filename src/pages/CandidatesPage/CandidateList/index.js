import React, { useState } from "react";
import CandidateCard from "../../../components/CandidateCard";
import {
  CandidatesContainer,
  CandidatesSidebar,
  CandidateProfile,
  CandidateNameButton,
} from "./styled";

import chairmanmeow from "../../../assets/candidates/chairmanmeow.jpg";
import whiskers from "../../../assets/candidates/whiskers.jpg";
import paws from "../../../assets/candidates/paws.jpg";
import mittens from "../../../assets/candidates/mittens.jpg";
import socks from "../../../assets/candidates/socks.jpg";
import boots from "../../../assets/candidates/boots.jpg";
import biscuit from "../../../assets/candidates/biscuit.jpg";
import coco from "../../../assets/candidates/coco.jpg";
import tiger from "../../../assets/candidates/tiger.jpg";
import shadow from "../../../assets/candidates/shadow.jpg";
import simba from "../../../assets/candidates/simba.jpg";
import luna from "../../../assets/candidates/luna.jpg";
import ginger from "../../../assets/candidates/ginger.jpg";
import felix from "../../../assets/candidates/felix.jpg";

const CandidateList = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const candidates = [
    {
      name: "Chairman Meow",
      photo: chairmanmeow,
      province: "Canada",
      bio: `Chairman Meow, a seasoned diplomat in the feline world, has garnered immense support through his charismatic and inclusive approach. His previous initiatives include successful negotiations for extended nap times in all governmental buildings, setting a precedent for feline-friendly workplaces. Chairman Meow’s diplomatic skills are not just limited to the home front; he has also been involved in international treaties focusing on global catnip trade and fair distribution of playtime resources. His leadership style is marked by a blend of stern authority and warm approachability, making him a favorite among both young kittens and elder cats.`,
    },
    {
      name: "Whiskers",
      photo: whiskers,
      province: "Alberta",
      bio: `Whiskers, a true grassroots campaigner, has been a vocal advocate for the underprivileged strays and ferals, ensuring they have equal access to care and shelter. His initiatives have seen the establishment of numerous community-led programs that focus on sustainable living for outdoor cats. Whiskers' environmental policies, particularly his commitment to preserving local bird populations, have earned him accolades from various wildlife organizations. His pragmatic yet compassionate approach to governance has resonated with a broad spectrum of felines, making him a strong and empathetic leader.`,
    },
    {
      name: "Paws",
      photo: paws,
      province: "British Columbia",
      bio: `Paws has been a leading figure in promoting ecological sustainability within the feline community. His efforts to establish green spaces and cat-friendly urban gardens in British Columbia have been highly successful, encouraging a harmonious coexistence between urban development and natural habitats. Paws is not only a visionary but also a cat of the people, often seen mingling with locals at fish markets or leading communal grooming sessions. His policies are deeply rooted in community welfare and environmental stewardship, making him a pioneering leader in sustainable feline governance.`,
    },
    {
      name: "Mittens",
      photo: mittens,
      province: "Manitoba",
      bio: `Mittens has revolutionized the idea of comfort and security in the Manitoba province. Known for her innovative “Warm Paws, Warm Hearts” initiative, she has successfully implemented heating solutions for outdoor shelters, ensuring that no cat is left in the cold. Her efforts in improving the quality of life for senior felines through specialized care programs have been particularly laudable. Mittens' leadership is characterized by her nurturing nature and a deep commitment to the well-being of every cat, regardless of their background.`,
    },
    {
      name: "Socks",
      photo: socks,
      province: "New Brunswick",
      bio: `Socks has made significant strides in the field of feline education, pioneering numerous literacy programs aimed at helping kittens develop essential life skills. His commitment to cultural enrichment includes the establishment of public libraries stocked with cat-friendly literature and interactive learning tools. Socks is also an advocate for mental health, launching initiatives that address stress and anxiety among indoor cats. His comprehensive approach to governance, focusing on both intellectual and emotional well-being, has earned him the respect and admiration of many.`,
    },
    {
      name: "Boots",
      photo: boots,
      province: "Newfoundland and Labrador",
      bio: `Boots is known for his adventurous spirit and his dedication to promoting an active lifestyle among felines. His "Fit Feline" program, which encourages regular exercise through community-led activities, has been a resounding success across Newfoundland and Labrador. Boots is also an avid supporter of senior cat welfare, initiating programs that cater to their unique dietary and healthcare needs. His energetic and inclusive leadership style inspires cats of all ages to live their lives to the fullest.`,
    },
    {
      name: "Biscuit",
      photo: biscuit,
      province: "Northwest Territories",
      bio: `Biscuit’s ability to thrive in the harsh climates of the Northwest Territories has made him a symbol of resilience and adaptability. His “Warm Whiskers” initiative, which focuses on providing insulated shelters and cold-weather gear for outdoor cats, has dramatically improved living conditions in the region. Biscuit is also a keen advocate for mental health, promoting activities that help cats cope with the long, dark winters. His down-to-earth demeanor and practical solutions to everyday problems have made him a beloved figure among his constituents.`,
    },
    {
      name: "Coco",
      photo: coco,
      province: "Nova Scotia",
      bio: `Coco's leadership extends beyond the political arena into the realm of education and skill development. Her "Seafaring Skills for Kittens" program, aimed at teaching young felines the art of fishing and navigation, has been highly popular in Nova Scotia. Additionally, Coco is a staunch advocate for marine conservation, ensuring that fish populations are sustainably managed for future generations. Her blend of traditional knowledge and modern governance makes her a unique and respected leader.`,
    },
    {
      name: "Tiger",
      photo: tiger,
      province: "Nunavut",
      bio: `Tiger's strength lies not just in his physical prowess but also in his commitment to community building. His "Paws Together" initiative focuses on creating communal spaces where cats can gather, play, and share resources. His dedication to preserving the cultural heritage of Nunavut, including traditional hunting and fishing practices, has earned him the respect of both young and old. Tiger's leadership is characterized by a deep connection to his roots and a forward-thinking approach to societal growth.`,
    },
    {
      name: "Shadow",
      photo: shadow,
      province: "Ontario",
      bio: `Shadow's innovative approach to feline welfare includes the development of silent grooming tools and noise-free play areas, making him a pioneer in creating a stress-free living environment for cats. His "Hush Paws" project, aimed at reducing noise pollution, has been widely acclaimed in Ontario. Shadow’s ability to blend into the background and understand the needs of his constituents from a unique perspective makes him a highly effective and empathetic leader.`,
    },
    {
      name: "Simba",
      photo: simba,
      province: "Prince Edward Island",
      bio: `Simba's leadership extends to the arts, with initiatives to promote feline-related arts and crafts, enriching the cultural fabric of Prince Edward Island. His "Climb High" program focuses on building confidence among young kittens through climbing and exploration activities. Simba's rule is marked by a blend of strength and gentleness, making him a beloved leader who fosters creativity and confidence in his community.`,
    },
    {
      name: "Luna",
      photo: luna,
      province: "Quebec",
      bio: `Luna has been a trailblazer in promoting bilingual education among cats, encouraging fluency in both French and English. Her "Moonlit Melodies" program, which promotes music and dance, has brought a unique cultural vibrancy to Quebec. Luna’s leadership is characterized by elegance, intelligence, and a deep commitment to cultural enrichment, making her a role model for cats across the province.`,
    },
    {
      name: "Ginger",
      photo: ginger,
      province: "Saskatchewan",
      bio: `Ginger has been instrumental in pioneering foster care programs for kittens, ensuring they have a loving and nurturing environment. Her "Sweet Whiskers" initiative focuses on providing dietary education to cat owners, promoting healthy eating habits. Ginger's warm and compassionate leadership style, combined with her innovative welfare programs, makes her a cherished figure in Saskatchewan.`,
    },
    {
      name: "Felix",
      photo: felix,
      province: "Yukon",
      bio: `Felix's unique approach to community development includes the creation of cat-friendly mining and exploration areas, promoting a balance between development and environmental stewardship in Yukon. His "Golden Paws" initiative aims at providing vocational training for young cats, preparing them for diverse career paths. Felix's blend of adventurous spirit and practical wisdom makes him a visionary leader, admired for his ability to bridge the gap between the wild and the domestic worlds.`,
    },
  ];

  const initialCandidate = selectedCandidate || candidates[0];

  return (
    <CandidatesContainer>
      <CandidatesSidebar>
        {candidates.map((candidate) => (
          <CandidateNameButton
            key={candidate.name}
            onClick={() => setSelectedCandidate(candidate)}
            className={
              selectedCandidate?.name === candidate.name ? "selected" : ""
            }
          >
            {candidate.name} - {candidate.province}
          </CandidateNameButton>
        ))}
      </CandidatesSidebar>
      <CandidateProfile>
        <CandidateCard
          name={initialCandidate.name}
          photo={initialCandidate.photo}
          bio={initialCandidate.bio}
        />
      </CandidateProfile>
    </CandidatesContainer>
  );
};

export default CandidateList;
