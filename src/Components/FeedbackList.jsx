import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import Spinner from './Shared/Spinner';
import FeedbackContext from '../Context/FeedbackContext';

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!!isLoading && (!feedback || feedback.length === 0)) {
    return (
      <div className="feedback-list">
        <h3>No feedback yet!</h3>
      </div>
    );
  }
  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
