import { useState } from 'react';
import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import './index.css';
import FeedbackData from './Data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header text={'Review Here'} />
      <div className="container">
        <FeedbackList />
      </div>
    </>
  );
}

export default App;
