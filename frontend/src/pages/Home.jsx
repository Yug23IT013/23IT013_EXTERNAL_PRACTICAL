import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EventFrom from "../components/EventFrom";
import EventList from "../components/EventList";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="econtainer">
      <h1>Event Management Sytem</h1>
      <button onClick={handleLogout}>Logout</button>
      <div className="create-event">
        <h2>Create Event</h2>
        {<EventFrom />}
      </div>
      <div className="update-event">
        <h2>Update Event</h2>
        {}
      </div>
      <div className="delete-event">
        <h2>Delete Event</h2>
        {}
      </div>
      <div className="get-event">
        <h2>Get Event</h2>
        {}
      </div>
      <div className="event-list">
        <h2>Events</h2>
        {<EventList />}
      </div>
    </div>
  );
};

export default Dashboard;
