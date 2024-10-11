import { useLocation } from "react-router-dom";
import {
  Line,
  VideoContainer,
  Group,
  WhiteContainer,
  Container,
  Video,
} from "./Styles";

export default function VideoPage() {
  const location = useLocation();

  const data = location.state;

  return (
    <Container>
      <WhiteContainer>
        <Group>
          <Line>{data?.name}</Line>
        </Group>
        <VideoContainer>
          <Video
            src={data?.resume}
            title={data?.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></Video>
        </VideoContainer>
      </WhiteContainer>
    </Container>
  );
}
