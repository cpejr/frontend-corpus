import { useState } from "react";
import {
  Container,
  Title,
  DivLine,
  ContainerSearchFilter,
  DivTitle,
  ContainerSearchBar,
} from "./Styles";
import { SearchBar } from "../../components";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";
import Card from "../../components/features/Card/Card";
import { useNavigate } from "react-router-dom";
export default function Videos() {
  const [searchValue, setSearchValue] = useState("");

  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  const videos = [
    {
      resume: "/videos/ContainerMultipleViewpointHeimat_English.mp4",
      name: '"Not belonging to the group"',
    },
    {
      name: '"Warm and open"',
      resume: "/videos/OpenClosePeople_2.mp4",
    },
    {
      resume: "/videos/GringoCulture.mp4",
      name: '"Gringo culture"',
    },
    {
      resume: "/videos/Homeland.mp4",
      name: '"Everyone hugs everyone"',
    },
    {
      resume: "/videos/RussianFoodCulture.mp4",
      name: '"This is hospitality"',
    },
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
      resume: "/videos/Sequence_ExpoCachaça_Eng.mp4",
      name: '"Expo Cachaça"',
    },
    {
      resume: "/videos/Sequence_FaceTheWinter.mp4",
      name: '"To face the Winter"',
    },
    {
      resume: "/videos/Sequence_LostThePoint.mp4",
      name: '"Lost the point"',
    },
  ];

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <Container>
      <DivTitle>
        <Title>{translation.title}</Title>
      </DivTitle>
      <ContainerSearchFilter>
        <ContainerSearchBar>
          <SearchBar
            aria-label="Barra de pesquisa"
            placeholder={translation.placeholder}
            value={searchValue}
            search={handleSearch}
          />
        </ContainerSearchBar>
      </ContainerSearchFilter>
      {videos
        .filter((obj) =>
          obj.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((card, index) => (
          <DivLine key={index}>
            <Card
              data={card}
              textButton={translation.buttonCard}
              event={() => {
                navigate(`/videos/${card.name}`, { state: card });
              }}
            />
          </DivLine>
        ))}
    </Container>
  );
}
