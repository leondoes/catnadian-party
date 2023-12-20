import React, { useState } from "react";
import CandidateCard from "../../../components/CandidateCard";
import {
  CandidatesContainer,
  CandidatesSidebar,
  CandidateProfile,
  CandidateNameButton,
} from "./styled";

const CandidateList = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const candidates = [
    {
      name: "Chairman Meow",
      photo: "/assets/chairmanmeow.jpg",
      province: "Canada",
      bio: "Chairman Meow, Canada’s prime ministerial hopeful, is the visionary leader with a purr-pose. Promising universal catnip care and a national string toy program, he is the beacon of hope for a purrfect future for all of cat-kind.",
    },
    {
      name: "Whiskers",
      photo: "/assets/whiskers.jpg",
      province: "Alberta",
      bio: "Hailing from the prairies of Alberta, Whiskers is known for his steadfast commitment to nap time reform and laser-pointer regulation. With a soft spot for catnip subsidies, Whiskers promises a future where every feline can enjoy the great outdoors from the comfort of a sunny window.",
    },
    {
      name: "Paws",
      photo: "/assets/paws.jpg",
      province: "British Columbia",
      bio: "Paws of British Columbia is a champion of maritime delights and extended scratching sessions. With a vision to fill the province with luxurious fish treats and towering scratching posts, Paws is pawing his way to the top with an unmatched purr-sonality.",
    },
    {
      name: "Mittens",
      photo: "/assets/mittens.jpg",
      province: "Manitoba",
      bio: "Manitoba’s own Mittens is a fierce advocate for the rights of sunny windowsills and a pioneer in grain silo safety regulations. With a campaign focused on warmth and comfort, Mittens is knitting together a platform of cozy policies for all.",
    },
    {
      name: "Socks",
      photo: "/assets/socks.jpg",
      province: "New Brunswick",
      bio: "Representing the cozy province of New Brunswick, Socks is unraveling the threads of outdated yarn ball policies. As a fluffy candidate with a vision for a snugglier tomorrow, Socks is weaving a tapestry of change.",
    },
    {
      name: "Boots",
      photo: "/assets/boots.jpg",
      province: "Newfoundland and Labrador",
      bio: "Boots, from the rocky shores of Newfoundland and Labrador, is campaigning for leash-free parks and the right to roam. As the seeker of the warmest laps, Boots pledges to ensure every cat enjoys the freedom of the great outdoors.",
    },
    {
      name: "Biscuit",
      photo: "/assets/biscuit.jpg",
      province: "Northwest Territories",
      bio: "From the chilly landscapes of the Northwest Territories, Biscuit is warming hearts with a platform of mandatory treat dispensers and the softest blankets. With the promise of the coldest nose and the warmest heart, Biscuit is a candidate who stands out in the snow.",
    },
    {
      name: "Coco",
      photo: "/assets/coco.jpg",
      province: "Nova Scotia",
      bio: "Coco of Nova Scotia is setting sail with policies that defend the right to chase and fish. As the province’s most skilled fisher-cat, Coco’s campaign is anchored in the traditions of the sea, ensuring a tide of prosperity for all whiskered residents.",
    },
    {
      name: "Tiger",
      photo: "/assets/tiger.jpg",
      province: "Nunavut",
      bio: "Tiger, the brawny candidate from Nunavut, is leading the charge for more public sandboxes and expertise in ice-fishing. Tiger’s vision for a future includes snow digging for all and a paw-print on every policy.",
    },
    {
      name: "Shadow",
      photo: "/assets/shadow.jpg",
      province: "Ontario",
      bio: "Ontario’s own Shadow is sneaking into the spotlight with a stealthy approach to policy reform. Advocating for the abolition of vacuum cleaners, Shadow is the purring politician promising a quieter and more peaceful home environment for all.",
    },
    {
      name: "Simba",
      photo: "/assets/simba.jpg",
      province: "Prince Edward Island",
      bio: "Simba, the fluffy candidate from Prince Edward Island, is standing tall on high shelves and advocating for the protection of the realm of indoor jungles. With a roar for more cat trees, Simba is on a mission to elevate the status of every island kitty.",
    },
    {
      name: "Luna",
      photo: "/assets/luna.jpg",
      province: "Quebec",
      bio: "Quebec’s queen of the moonlit stroll, Luna is campaigning for nighttime curfews on dogs and advocating for the cultural enrichment of all felines. With a whisper of French elegance, Luna is casting a spell of charm across the province.",
    },
    {
      name: "Ginger",
      photo: "/assets/ginger.jpg",
      province: "Saskatchewan",
      bio: "Saskatchewan’s sweetest gingerbread latte sipper, Ginger is purring for a revolution in cat adoption laws. With a sprinkle of cinnamon and a dollop of cream, Ginger’s platform is as sweet as it is transformative.",
    },
    {
      name: "Felix",
      photo: "/assets/felix.jpg",
      province: "Yukon",
      bio: "Felix from Yukon is breaking the ice with innovative policies like the four-day workweek for humans, ensuring more playtime for pets. As a gold panning champion, Felix is the purr-fect blend of wilderness wisdom and domestic charm.",
    },
  ];

  const initialCandidate = selectedCandidate || candidates[0];

  return (
    <CandidatesContainer>
      <CandidatesSidebar>
        {candidates.map(candidate => (
          <CandidateNameButton
            key={candidate.name}
            onClick={() => setSelectedCandidate(candidate)}
            className={selectedCandidate?.name === candidate.name ? 'selected' : ''}
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
