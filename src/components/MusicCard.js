import ageAlbum from '../images/age-of-the-octopus.jpg';
import cosmicArt from '../images/cosmic-single-art.webp';
import { Container, Row, Col, Image } from 'react-bootstrap';

const MusicCard = () => {
  const cardArr = [
    {
      name: 'Cosmic Outlaw (Single)',
      link: 'https://open.spotify.com/track/4fcIymQJLJkxu4QlnpcvdJ',
      art: { cosmicArt },
      description: 'Cosmic Outlaw single artwork',
    },
    {
      name: 'Age of the Octopus (Album)',
      link: 'https://supersonicoctopus.bandcamp.com/album/age-of-the-octopus',
      art: { ageAlbum },
      description: 'Age of the octopus album artwork',
    },
  ];

  return (
    <div>
      <Col md={6} sm={12} className="music-card">
        <a
          href="https://open.spotify.com/track/4fcIymQJLJkxu4QlnpcvdJ"
          target="blank"
        >
          <Image
            width="300px"
            thumbnail
            src={cosmicArt}
            alt="Cosmic Outlaw single artwork"
          ></Image>
        </a>
        <p>Cosmic Outlaw (Single)</p>
      </Col>
    </div>
  );
};

export default MusicCard;
