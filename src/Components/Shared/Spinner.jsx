import spinner from '../Assets/Spinner/spinner.gif';

function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading gif"
        style={{ width: '100px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
}

export default Spinner;
