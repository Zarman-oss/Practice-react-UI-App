import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import './index.css';
import FeedbackData from './Data/FeedbackData';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackContexr from './Context/FeedbackContexr';
import FeedbackForm from './Components/FeedbackForm';
import AboutPage from './Pages/AboutPage';
import AboutIconLink from './Components/AboutIconLink';


function App() {
  




  return (
    <Router>
      <Header text={'Review Card'} />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
