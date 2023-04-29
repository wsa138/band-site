import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/music.css';
import MusicCard from '../components/MusicCard';

const Music = () => {
  return (
    <div id="music-container">
      <MusicCard />
    </div>
  );
};

export default Music;
