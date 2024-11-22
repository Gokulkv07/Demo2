import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewPage.css';

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]); 
  const [formData, setFormData] = useState({
    username: '',
    rating: '',
    comment: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.rating || !formData.comment) {
      alert('All fields are required!');
      return;
    }

    const newReview = { ...formData };
    setReviews((prevReviews) => [...prevReviews, newReview]); 
    setFormData({ username: '', rating: '', comment: '' }); 
    alert('Review submitted successfully!');
    navigate('/lastpage'); 
  };

  const handleGoBack = () => {
    navigate('/review'); 
  };

  return (
    <div className="review-container">
      <h2>
        <u><b>Reviews</b></u>
      </h2>
      
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name:</label>
        <input
          type="text"
          id="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="rating">Rating:</label>
        <select
          id="rating"
          value={formData.rating}
          onChange={handleChange}
          required
        >
          <option value="">Select Rating</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Average</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Very Good</option>
          <option value="5">5 - Excellent</option>
        </select>

        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          rows="4"
          value={formData.comment}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit Review</button>
      </form>

      <button onClick={handleGoBack}>Go Back to Home Page</button>

      {reviews.length > 0 && (
        <div id="reviews">
          <h3>Submitted Reviews</h3>
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <p><strong>Name:</strong> {review.username}</p>
              <p><strong>Rating:</strong> {review.rating}</p>
              <p><strong>Comment:</strong> {review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
