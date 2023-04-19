import '../styling/home.css';

const Home = () => {
  return (
    <div id="container">
      <video autoplay muted loop id="myVideo">
        <source src="rain.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Home;
