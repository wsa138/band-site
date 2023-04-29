import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/music.css';
import MusicCard from '../components/MusicCard';

const Music = () => {
  return (
    <div id="music-container">
      <Container>
        <Row className="text-center" id="music-card-container">
          <MusicCard />
        </Row>
      </Container>
    </div>
  );
};

export default Music;
