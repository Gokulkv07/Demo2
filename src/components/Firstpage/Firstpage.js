import React from "react";
import "./Firstpage.css";
import { useNavigate } from "react-router-dom";

const Firstpage = () => {
  const navigate = useNavigate();

  // Click handler for PG column
  const handlePgClick = () => {
    navigate("/home"); // Navigate to the home page
  };

  return (
    <div className="firstpage">
      {/* Header */}
      <header className="heading">
        <h1><b><u>AV Enterprises</u></b></h1>
      </header>

      {/* Columns for IT, PG, and Construction */}
      <div className="columns">
        {/* IT Column */}
        <div className="column">
          <div className="image-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP3A9Cb804Lgo0q9E1CBWz-FUZ3GGS-FDlBQ&s" alt="image not found" />
          </div>
          <h2>INFOTECH</h2>
        </div>

        {/* PG Column */}
        <div className="column" onClick={handlePgClick}>
          <div className="image-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtu0aDVmgFUkOgkYN3H9cIrPn-XP66psZVcmxpTtuRLY6SatFQ3Hv42D8&s" alt="image not found" />
          </div>
          <h2>PG's</h2>
        </div>

        {/* Construction Column */}
        <div className="column">
          <div className="image-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNO7JKvg642ih9LZvNnHOLtTkVaTY17lazf2b8Faom6NaXa7ccbkfUqjA&s" alt="image not found" />
          </div>
          <h2>Constructions</h2>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
