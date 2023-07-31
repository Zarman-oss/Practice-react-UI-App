import { createContext, useState } from 'react';

const feedbackContext = createContext();
export const FeedbackDataProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
};
