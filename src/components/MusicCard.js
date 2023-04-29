import ageAlbum from '../images/age-of-the-octopus.jpg';
import cosmicArt from '../images/cosmic-single-art.webp';
import { Container, Row, Col, Image } from 'react-bootstrap';

const MusicCard = () => {
  const cardArr = [
    {
      name: 'Cosmic Outlaw (Single)',
      link: 'https://open.spotify.com/track/4fcIymQJLJkxu4QlnpcvdJ',
      art: cosmicArt,
      description: 'Cosmic Outlaw single artwork',
    },
    {
      name: 'Kanaloa (Single)',
      link: 'https://open.spotify.com/track/3kfDz05GkqYKSMhYFnwXbr',
      art: ageAlbum,
      description: 'Kanaloa single artwork',
    },
    {
      name: 'Age of the Octopus (Album)',
      link: 'https://supersonicoctopus.bandcamp.com/album/age-of-the-octopus',
      art: ageAlbum,
      description: 'Age of the octopus album artwork',
    },
  ];

  const createCards = cardArr.map((card) => {
    return (
      <Col md={6} sm={12} className="music-card">
        <a href={card.link} target="blank">
          <Image
            width="300px"
            thumbnail
            src={card.art}
            alt={card.description}
          ></Image>
        </a>
        <p>{card.name}</p>
      </Col>
    );
  });

  return (
    <Container>
      <Row className="text-center" id="music-card-container">
        {createCards}
      </Row>
    </Container>
  );
};

export default MusicCard;
