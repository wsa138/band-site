import '../styling/home.css';
import bandVid from '../images/cosmicoutlawvidmp4.mp4';
import bandVidMov from '../images/cosmicoutlawvid.mov';
import bandVidWebm from '../images/cosmicoutlawvidwebm.webm';
import billy from '../images/Billy4.jpg';

const Home = () => {
  return (
    <div id="container">
      <video
        src={bandVidMov}
        autoplay="true"
        muted="true"
        loop="true"
        id="myVideo"
      />
    </div>
  );
};

export default Home;
