import { useState } from 'react';
import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import './index.css';
import FeedbackData from './Data/FeedbackData';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?'))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header text={'Review Card'} />
      <div className="container">
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
