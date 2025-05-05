import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
const EventList = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="event-list">
      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event} onClick={() => handleEventClick(event.id)}>
            {event.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
