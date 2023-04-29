import '../styling/home.css';
import bandVidMov from '../images/cosmicoutlawvid.mov';

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
