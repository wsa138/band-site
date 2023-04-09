import band2 from '../images/Band2.jpg';
import { Instagram, Spotify, Youtube, Apple } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import '../styling/home.css';

const Home = () => {
  return (
    <Container id="home-container">
      <Row id="image-row">
        <Col xs={12}>
          <img className="img-fluid" src={band2} alt="Band members"></img>
        </Col>
      </Row>
      <Row
        id="social-media-container"
        className="fixed-bottom justify-content-center"
      >
        <Col xs={2} className="link-icons-container">
          <a
            href="https://open.spotify.com/artist/20OK0k4WgurVGcnzKqctmP?si=z0LPmM_GQ7CXG7ffVuhXVA"
            target="blank"
          >
            <Spotify size={24} />
          </a>
        </Col>
        <Col xs={2} className="link-icons-container">
          <a
            href="https://music.apple.com/us/artist/super-sonic-octopus/1678256425"
            target="blank"
          >
            <Apple size={24} />
          </a>
        </Col>
        <Col xs={2} className="link-icons-container">
          <a
            href="https://www.youtube.com/channel/UCy3rHoH21yasUswT7KDYY1w/featured"
            target="blank"
          >
            <Youtube size={24} />
          </a>
        </Col>
        <Col xs={2} className="link-icons-container">
          <a
            href="https://www.instagram.com/supersonicoctopus/?hl=en"
            target="blank"
          >
            <Instagram size={24} />
          </a>
        </Col>
        <Col xs={2} className="link-icons-container">
          <a
            href="https://music.amazon.com/artists/B0BZ2S54HS/super-sonic-octopus"
            target="blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M.045 18.02c.072-.116.187-.124.348-.022c3.636 2.11 7.594 3.166 11.87 3.166c2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13c.226-.088.39-.046.525.13c.12.174.09.336-.12.48c-.256.19-.6.41-1.006.654c-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 0 1-10.951-.577a17.88 17.88 0 0 1-5.43-3.35c-.1-.074-.151-.15-.151-.22c0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577c.495-.71 1.17-1.25 2.04-1.615c.796-.335 1.756-.575 2.912-.72c.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875c-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46c-.35.27-.575.63-.675 1.096c-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39c0-.046.007-.09.022-.15c.247-1.29.855-2.25 1.82-2.88c.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29c.135.15.27.3.405.48c.12.165.224.314.283.45c.075.134.15.33.195.57c.06.254.105.42.135.51c.03.104.062.3.076.615c.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036c.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36c0 .12-.06.226-.18.314c-1.2 1.05-1.86 1.62-1.963 1.71c-.165.135-.375.15-.63.045a6.062 6.062 0 0 1-.526-.496l-.31-.347a9.391 9.391 0 0 1-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665c-.494.15-1.093.227-1.83.227c-1.11 0-2.04-.343-2.76-1.034c-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364c.285.34.675.512 1.155.512c.045 0 .106-.007.195-.02c.09-.016.134-.023.166-.023c.614-.16 1.08-.553 1.424-1.178c.165-.28.285-.58.36-.91c.09-.32.12-.59.135-.8c.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18c-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17c.362-.243.714-.41 1.05-.5a8.094 8.094 0 0 1 1.612-.24c.14-.012.28 0 .41.03c.65.06 1.05.168 1.172.33c.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8c-.278.69-.664 1.248-1.156 1.68c-.073.06-.14.09-.197.09c-.03 0-.06 0-.09-.012c-.09-.044-.107-.12-.064-.24c.54-1.26.806-2.143.806-2.64c0-.15-.03-.27-.087-.344c-.145-.166-.55-.257-1.224-.257c-.243 0-.533.016-.87.046c-.363.045-.7.09-1 .135c-.09 0-.148-.014-.18-.044c-.03-.03-.036-.047-.02-.077c0-.017.006-.03.02-.063v-.06z"
              />
            </svg>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
