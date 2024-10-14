import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Line,
  VideoContainer,
  Group,
  WhiteContainer,
  Container,
  Video,
} from "./Styles";

// Simula a lista de vídeos (ou você pode carregar isso via API)
const videos = [
  {
    resume: "/videos/Intonation.mp4",
    name: '"Where do you live?"',
  },
  {
    resume: "/videos/Jeitinho_Fraco_English.mp4",
    name: '"Get through life"',
  },
  {
    resume: "/videos/Jeitinho_BurlarNormas_English.mp4",
    name: '"Bypass these norms"',
  },
  {
    resume: "/videos/Jeitinho_TrópicoFavorecimento_English.mp4",
    name: '"The corruption starts at my condo"',
  },
  {
    name: '"Warm and open"',
    resume: "/videos/OpenClosePeople_2.mp4",
  },
  {
    resume: "/videos/ContainerMultipleViewpointHeimat_English.mp4",
    name: '"Not belonging to the group"',
  },
  {
    resume: "/videos/Sequence_FaceTheWinter.mp4",
    name: '"To face the Winter"',
  },
  {
    resume: "/videos/Sequence_LostThePoint.mp4",
    name: '"Lost the point"',
  },
  {
    resume: "/videos/Sequence_ExpoCachaça_Eng.mp4",
    name: '"Expo Cachaça"',
  },
  {
    resume: "/videos/GringoCulture.mp4",
    name: '"Gringo culture"',
  },
  {
    resume: "/videos/RussianFoodCulture.mp4",
    name: '"This is hospitality"',
  },
  {
    resume: "/videos/Homeland.mp4",
    name: '"Everyone hugs everyone"',
  },
];

export default function VideoPage() {
  const location = useLocation();
  const { name } = useParams();
  const [videoData, setVideoData] = useState(location.state || null);

  useEffect(() => {
    if (!videoData) {
      console.log(`${name}`);
      const decodedName = decodeURIComponent(name);

      const video = videos.find((v) => v.name == decodedName);
      console.log(video);
      setVideoData(video);
    }
  }, [name, videoData]);

  return (
    <Container>
      <WhiteContainer>
        <Group>
          <Line>{videoData?.name}</Line>
        </Group>
        <VideoContainer>
          <Video
            src={videoData?.resume}
            title={videoData?.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></Video>
        </VideoContainer>
      </WhiteContainer>
    </Container>
  );
}
