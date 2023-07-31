import { v4 as uuid4 } from 'uuid';
import { createContext, useState, useEffect } from 'react';

const feedbackContext = createContext();
export const FeedbackDataProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(
      'http://localhost:5000/feedback?_sort=id&_order=desc'
    );
    const data = await response.json();
    setFeedback(data);
  };

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid4();
    setFeedback([newFeedback, ...feedback]);
  };
  //   delete

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?'))
      setFeedback(feedback.filter((item) => item.id !== id));
  };
};
