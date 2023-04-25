import '../styling/home.css';
import bandVidMov from '../images/cosmicoutlawvid.mov';
import billy from '../images/Billy4.jpg';

const Home = () => {
  return (
    <div id="container">
      <video
        src={bandVidMov}
        img={billy}
        autoplay="true"
        muted="true"
        loop="true"
        id="myVideo"
      />
    </div>
  );
};

export default Home;
