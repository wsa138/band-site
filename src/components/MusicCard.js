import ageAlbum from "../images/age-of-the-octopus.jpg";
import cosmicArt from "../images/CosmicOutlawArt.jpg";
import kanaloaArt from "../images/KanaloaArt.jpg";
import polarisArt from "../images/PolarisArt.jpg";
import trashArt from "../images/trashphoto.png";
import { Container, Row, Col, Image } from "react-bootstrap";

const MusicCard = () => {
  const cardArr = [
    {
      name: "Trash In The Hamptons",
      link: "https://www.youtube.com/watch?v=u4MlP1_Bg-Q",
      art: trashArt,
      description: "Trash In The Hamptons single artwork",
    },
    {
      name: "Cosmic Outlaw",
      link: "https://open.spotify.com/track/4fcIymQJLJkxu4QlnpcvdJ",
      art: cosmicArt,
      description: "Cosmic Outlaw single artwork",
    },
    {
      name: "Kanaloa",
      link: "https://open.spotify.com/track/3kfDz05GkqYKSMhYFnwXbr",
      art: kanaloaArt,
      description: "Kanaloa single artwork",
    },
    {
      name: "Polaris",
      link: "https://open.spotify.com/track/0NGXp3WXrCxyB1qb5G9HPU",
      art: polarisArt,
      description: "Polaris single artwork",
    },
    {
      name: "Age of the Octopus (Album)",
      link: "https://supersonicoctopus.bandcamp.com/album/age-of-the-octopus",
      art: ageAlbum,
      description: "Age of the octopus album artwork",
    },
  ];

  const handleDataLayer = (clickName) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "musicClick",
      clickText: clickName,
    });
  };

  const createCards = cardArr.map((card) => {
    return (
      <Col md={6} sm={12} className="music-card" key={card.name}>
        <a href={card.link} target="blank">
          <Image
            onClick={() => handleDataLayer(card.name)}
            width="300px"
            thumbnail
            src={card.art}
            alt={card.description}
          ></Image>
        </a>
        <p>{card.name}</p>
      </Col>
    );
  });

  return (
    <Container>
      <Row className="text-center" id="music-card-container">
        {createCards}
      </Row>
    </Container>
  );
};

export default MusicCard;
