import { useState } from 'react';
import Card from './Shared/Card';
import Button from './Shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [btnDisabled, setbtnDisabled] = useState('true');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    if (text === '') {
      setbtnDisabled(true);
      setMessage('Please enter your feedback');
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Please enter more than 10 characters');
      setbtnDisabled(true);
    } else {
      setMessage('');
      setbtnDisabled(false);
      setText('');
    }
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>Did you like the service?</h2>
        <RatingSelect select={(rating) =>{}} />
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Write a review"
            onChange={handleSubmit}
            value={text}
          />
          <Button isDisabled={btnDisabled} type="submit">
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;