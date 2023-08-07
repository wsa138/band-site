import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styling/music.css';
import MusicCard from '../components/MusicCard';
import { useEffect } from 'react';

const Music = () => {
  useEffect(() => {
    document.title = 'Super Sonic Octopus Music';
  });

  return (
    <div id="music-container">
      <MusicCard />
    </div>
  );
};

export default Music;
