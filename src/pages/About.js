import Band3 from '../images/Band3.jpg';
import Carousel from '../components/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import '../styling/about.css';

const About = () => {
  return (
    <Container id="about-container">
      <Row id="band-about">
        <Col>
          <img src={Band3} alt="Band members"></img>
          <h2>Super Sonic Octopus</h2>
          <p>
            Behold the awe-inspiring inter-dimensional force, seamlessly
            traversing between the dark and light planes of our tangible
            universe. As we unite our energies, this phenomenon deftly
            amalgamates intricate soundscapes into unparalleled, authentic
            grooves. Witness just one performance, and watch as your very
            perception of reality is eternally transformed.
          </p>
        </Col>
      </Row>
      <Row id="members-about">
        <Col>
          <Carousel />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
