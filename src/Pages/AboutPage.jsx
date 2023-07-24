import { Link } from 'react-router-dom';
import Card from '../Components/Shared/Card';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About Us</h1>
        <p>
          <Link to="/About">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
