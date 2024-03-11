import React, { useState, useEffect } from 'react';

const eventsMock = [
  { id: 1, title: 'Purrliament Debate', date: '2024-01-15', description: 'Discussing the most pressing issues in Catnadia!' },
  { id: 2, title: 'Meow Town Hall', date: '2024-02-10', description: 'A public gathering for all feline citizens!' },
  { id: 3, title: 'Fishy Economics Summit', date: '2024-03-05', description: 'Debating the future of fish trade in Catnadia.' },
];

const CatnadianEventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Mock API call to fetch events, replace with real API call in production
    const fetchEvents = async () => {
      // Simulate API call delay
      setTimeout(() => {
        setEvents(eventsMock);
      }, 1000);
    };

    fetchEvents();
  }, []);

  return (
    <div className="catnadian-events-list">
      <h2>Upcoming Catnadian Events</h2>
      {events.length === 0 ? (
        <p>Loading events...</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CatnadianEventsList;
