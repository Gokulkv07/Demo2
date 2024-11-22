// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Firstpage from './components/Firstpage/Firstpage';
import HomePage from './components/PG/HomePage/HomePage';
import SignupPage from './components/PG/SignupPage/SignupPage';
import LoginPage from './components/PG/LoginPage/LoginPage';
import PGDeatailsPage from './components/PG/PGDetailsPage/PGDetailsPage';
import BookingPage from './components/PG/BookingPage/BookingPage';
import PaymentPage from './components/PG/PaymentPage/PaymentPage';
import ReviewPage from  './components/PG/ReviewPage/ReviewPage';
import LastPage from './components/PG/LastPage/LastPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/pgdetails" element={<PGDeatailsPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/Payment" element={<PaymentPage />} />   
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/lastpage" element={<LastPage />} />
        </Routes>
    </Router>
  );
}

export default App;

