import band2 from '../images/Band2.jpg';

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
    </Container>
  );
};

export default Home;
