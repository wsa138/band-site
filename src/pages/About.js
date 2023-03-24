import Band3 from '../images/Band3.jpg';
import Carousel from '../components/Carousel';

const About = () => {
  return (
    <div>
      <div id="band-about">
        <img src={Band3} alt="Band members"></img>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div id="members-about">
        <div id="member-carousel">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default About;
