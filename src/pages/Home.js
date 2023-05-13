import '../styling/home.css';
import bandVidMov from '../images/cosmicoutlawvid.mov';

const Home = () => {
  return (
    <div id="container">
      <a href="https://open.spotify.com/album/2nbNEfBmbMIylHoM37ZU4b">
        <video
          src={bandVidMov}
          autoPlay="true"
          muted="true"
          loop="true"
          id="myVideo"
        />
      </a>
    </div>
  );
};

export default Home;
