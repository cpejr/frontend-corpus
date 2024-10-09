import { useLocation } from "react-router-dom";
import {
    Line,
    Image,
    Group,
    WhiteContainer,
    Container,
  } from "./Styles";

export default function VideoPage() {

  const location = useLocation();

  const data = location.state;
    
    return (
      <Container>
        <WhiteContainer>
          <Group>
            <Line>{data.name}</Line>
          </Group>
          <Image>
            <iframe
              width="90%"
              height="100%"
              src={data.linkVideo}
              title={data.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              ></iframe>
          </Image>
        </WhiteContainer>
      </Container>
    );
  }
  