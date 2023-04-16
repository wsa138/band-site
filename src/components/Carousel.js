import John2 from '../images/John2.jpg';
import Mike2 from '../images/Mike2.jpg';
import Billy2 from '../images/Billy2.jpg';
import Joe2 from '../images/Joe2.jpg';

const Carousel = () => {
  const caroArray = [
    {
      img: John2,
      member: 'John Swikata',
      about: `John mastered the science of sound and discovered that his bass could create ripples in the fabric of space-time, allowing him to explore the cosmos. He used his skills to push the boundaries of what was possible and create a new form of cosmic music.`,
    },
    {
      img: Joe2,
      member: 'Joe Blau',
      about: `Joe's love for sound and physics led him to discover a way to create interdimensional portals with his drumming. He explored the mysteries of space and time, using sound to travel to distant worlds and meet beings from other dimensions. With every beat of his drums, Joe pushed the boundaries of what was possible, using sound to navigate the universe and beyond.`,
    },
    {
      img: Mike2,
      member: 'Mike Robbins',
      about: `Mike's fascination with the physics of sound led him to discover interdimensional travel through his guitar playing. He explored the universe and met wondrous beings, using his music to bridge the gap between worlds and unlock its secrets. With every riff and solo, Mike continued to push the boundaries of what was possible.`,
    },
    {
      img: Billy2,
      member: 'Billy Addesso',
      about: `Billy created a guitar that translated the radiation of celestial bodies into music. His cosmic guitar connected humanity to the universe, taking him on a journey through the stars and inspiring others to explore the mysteries of the cosmos.`,
    },
  ];

  const shuffleArr = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Shuffles the array of members so that it is a different order every time.
  shuffleArr(caroArray);

  let caro = caroArray.map((item) => {
    return (
      <div>
        <img src={item.img}></img>
        <h2>{item.member}</h2>
        <p>{item.about}</p>
      </div>
    );
  });

  return <div>{caro}</div>;
};

export default Carousel;
