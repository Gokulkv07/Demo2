import React ,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PGDetailsPage.css';

function PGDetailsPage() {
    const navigate = useNavigate();

    const bookNow = () => {
        navigate('/booking'); 
    };

    return (
        <div className="pg-container">
            <header>
                <h2><u><b>Our PG</b></u></h2>
            </header>

            <section className="pg-details">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDfcYea3fdNGgJTqeSyMBKDEUav2mid2CsZP95hx5qdBlNt0oGtATAY4&s"
                    alt="Exterior view of the PG accommodation"
                    className="pg-image"
                />
                <p id="pg-Address">
                    23, 4th cross, Chikkabegur gate, Hosur main road, Kudlugate, Bangalore-68
                </p>
            </section>

            <section className="facilities">
                <h2>Facilities</h2>
                <ul id="pgFacilities">
                    <li>Wi-Fi</li>
                    <li>24x7 Security</li>
                    <li>Hot Water</li>
                    <li>North and South Indian food available</li>
                    <li>Gym Access</li>
                </ul>
            </section>

            <section className="sharing-options">
                <h2>Sharings with price</h2>
                <ul id="sharingDetails">
                    <li><strong>4 sharing:</strong> 5000 per month</li>
                    <li><strong>3 sharing:</strong> 7000 per month</li>
                    <li><strong>2 sharing:</strong> 8500 per month</li>
                    <li><strong>1 sharing:</strong> 10000 per month</li>
                </ul>
            </section>

            <button id="bookNowButton" onClick={bookNow}>
                Book Now
            </button>
            <button onClick={() => navigate('/')}>Back to Home Page</button>
        </div>
    );
}

export default PGDetailsPage;




