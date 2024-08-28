import { useMediaQuery } from "react-responsive";
import {
  Title,
  Container,
  Line,
  TextColumn,
  Banner,
  TextLine,
  SubTitle,
  ImageLine,
  PintaColumn,
  TextPintaColumn,
  BackgroundTitle,
} from "./Styles";
import { image } from "../../assets";
import { breakpoints } from "../../styles/stylesVariables";

import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";

export default function AboutUs() {
  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  const isMobileScreen = useMediaQuery({ maxWidth: breakpoints.mobile });

  return (
    <Container>
      <BackgroundTitle>
        <Title>{translation.title1}</Title>
      </BackgroundTitle>
      <Line>
        <TextColumn>
          <p>{translation.paragraph1}</p>
        </TextColumn>
        <TextColumn>
          <img src={image} alt="image" />
        </TextColumn>
      </Line>
      <ImageLine>
        <TextColumn>
          <img src={image} alt="image" />
        </TextColumn>
        <TextColumn>
          <p>{translation.paragraph2}</p>
        </TextColumn>
      </ImageLine>
      <Banner>
        <p>{translation.paragraph3}</p>
      </Banner>
      {isMobileScreen ? (
        <SubTitle>{translation.subtitle1}</SubTitle>
      ) : (
        <SubTitle> &ensp; &ensp;{translation.subtitle1}</SubTitle>
      )}
      <TextLine>
        <p>{translation.paragraph4}</p>
      </TextLine>
      <Line>
        <PintaColumn>
          <img src={image} alt="image" />
        </PintaColumn>
        <TextPintaColumn>
          <p>{translation.paragraph5}</p>
        </TextPintaColumn>
      </Line>
      <ImageLine style={{ marginBottom: "2rem", height: "40rem" }}>
        <TextPintaColumn>
          <p>{translation.paragraph6}</p>
        </TextPintaColumn>
        <TextColumn>
          <img
            style={{ border: "none", maxWidth: "250px", alignSelf: "center" }}
            src={image}
            alt="image"
          />
        </TextColumn>
      </ImageLine>
      <Banner>
        <p>{translation.paragraph7}</p>
      </Banner>
    </Container>
  );
}
