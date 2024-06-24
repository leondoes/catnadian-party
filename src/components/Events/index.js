import React, { useState, useEffect } from 'react';
import { EventsContainer, EventsTitle, EventList, EventItem, EventTitle, EventDescription, Button, ModalOverlay, ModalContent, CloseButton } from './styled';

const eventsMock = [
  { id: 1, title: 'Purrliament Debate', date: '2024-01-15', description: 'Discussing the most pressing issues in Catnadia!' },
  { id: 2, title: 'Meow Town Hall', date: '2024-02-10', description: 'A public gathering for all feline citizens!' },
  { id: 3, title: 'Fishy Economics Summit', date: '2024-03-05', description: 'Debating the future of fish trade in Catnadia.' },
  { id: 4, title: 'Catnip Culinary Festival', date: '2024-04-20', description: 'Celebrating the finest in catnip cuisine. Chefs from across Catnadia compete to see who can create the most purr-licious catnip-infused dishes.' },
  { id: 5, title: 'Whisker Workshop', date: '2024-05-15', description: 'A grooming and self-care seminar for the sophisticated cat. Learn the latest in whisker care, paw maintenance, and fur styling.' },
  { id: 6, title: 'The Great Catnadian Chase', date: '2024-06-10', description: 'A thrilling nationwide hunt for the Golden Mouse. Clues are hidden throughout Catnadia, leading adventurous cats on a journey of discovery.' },
  { id: 7, title: 'Feline Film Festival', date: '2024-07-22', description: 'A celebration of feline-themed cinema, showcasing short films, documentaries, and animations made by cats, for cats.' },
  { id: 8, title: 'Yarn Ball Gala', date: '2024-08-30', description: 'The social highlight of the Catnadian calendar. An evening of elegance, dancing, and, of course, interactive yarn ball installations.' },
  { id: 9, title: 'Mewsic in the Park', date: '2024-09-25', description: 'An open-air concert featuring the best in feline musical talent. From classical to cat-rock, enjoy a day of relaxation and tunes.' },
  { id: 10, title: 'Catnadian Litter-ature Club', date: '2024-10-19', description: 'Monthly book club meetings discussing the latest in feline fiction and non-fiction. Share your favorite reads and discover new ones.' },
];

const adjustDates = (events) => {
  const today = new Date();
  return events.map(event => {
    const eventDate = new Date(event.date);
    if (eventDate < today) {
      const futureDate = new Date(today);
      futureDate.setMonth(today.getMonth() + 1);
      return { ...event, date: futureDate.toISOString().split('T')[0] };
    }
    return event;
  });
};

const CatnadianEventsList = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setTimeout(() => {
        setEvents(adjustDates(eventsMock));
      }, 1000);
    };

    fetchEvents();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button onClick={openModal}>View Upcoming Events</Button>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={closeModal}>Close</CloseButton>
            <EventsContainer>
              <EventsTitle>Upcoming Catnadian Events</EventsTitle>
              {events.length === 0 ? (
                <EventDescription>Loading events...</EventDescription>
              ) : (
                <EventList>
                  {events.map(event => (
                    <EventItem key={event.id}>
                      <EventTitle>{event.title}</EventTitle>
                      <EventDescription>Date: {event.date}</EventDescription>
                      <EventDescription>{event.description}</EventDescription>
                    </EventItem>
                  ))}
                </EventList>
              )}
            </EventsContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default CatnadianEventsList;
