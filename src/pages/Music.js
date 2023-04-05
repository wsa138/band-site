import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ageAlbum from '../images/age-of-the-octopus.jpg';
import cosmicArt from '../images/cosmic-single-art.webp';

const Music = () => {
  return (
    <div>
      <Container>
        <Row className="text-center">
          <Col md={6} sm={12}>
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
          <Col md={6} sm={12}>
            <a
              href="https://supersonicoctopus.bandcamp.com/album/age-of-the-octopus"
              target="blank"
            >
              <Image
                width="300px"
                thumbnail
                src={ageAlbum}
                alt="Age of the Octopus album artwork"
              ></Image>
            </a>
            <p>Age of the Octopus (Album)</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Music;
