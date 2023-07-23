import { FaTimes } from 'react-icons/fa';
import Card from './Shared/Card';

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="red" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
