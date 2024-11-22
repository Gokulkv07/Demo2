import React from "react";
import "./LastPage.css";
import { useNavigate } from "react-router-dom";

const LastPage = () => {
  const navigate = useNavigate();

  const goBackToHome = () => {
    navigate("/home"); // Update the route path based on your routing setup
  };

  return (
    <div className="section">
      <h2>Thank You for Booking with Us!</h2>
      <p>We are excited to have you. Have a great life ahead!</p>
      <button onClick={goBackToHome}>Go to Home Page</button>
    </div>
  );
};

export default LastPage;
