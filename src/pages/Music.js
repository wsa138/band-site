import ageAlbum from '../images/age-of-the-octopus.jpg';
import cosmicArt from '../images/cosmic-single-art.webp';

const Music = () => {
  return (
    <div>
      <div>
        <a
          href="https://open.spotify.com/track/4fcIymQJLJkxu4QlnpcvdJ"
          target="blank"
        >
          <img src={cosmicArt} alt="Cosmic Outlaw single artwork"></img>
        </a>
        <p>Cosmic Outlaw (Single)</p>
      </div>
      <div>
        <a
          href="https://supersonicoctopus.bandcamp.com/album/age-of-the-octopus"
          target="blank"
        >
          <img src={ageAlbum} alt="Age of the Octopus album artwork"></img>
        </a>
        <p>Age of the Octopus (Album)</p>
      </div>
    </div>
  );
};

export default Music;
