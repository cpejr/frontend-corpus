import { useState } from "react";
import {
  Container,
  Title,
  DivSelect,
  DivLine,
  Calendar,
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
  const [dates, setDates] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  const videos = [
    {
      resume: "/videos/ContainerMultipleViewpointHeimat_English.mp4",
      name: "ContainerMultipleViewpointHeimat English",
    },
    {
      name: "OpenClosePeople 2",
      resume: "/videos/OpenClosePeople_2.mp4",
    },
    {
      resume: "/videos/GringoCulture.mp4",
      name: "GringoCulture",
    },
    {
      resume: "/videos/Homeland.mp4",
      name: "Homeland",
    },
    {
      resume: "/videos/RussianFoodCulture.mp4",
      name: "RussianFoodCulture",
    },
    {
      resume: "/videos/Intonation.mp4",
      name: "Intonation",
    },
    {
      resume: "/videos/Jeitinho_Fraco_English.mp4",
      name: "Jeitinho Fraco English",
    },
    {
      resume: "/videos/Jeitinho_BurlarNormas_English.mp4",
      name: "Jeitinho BurlarNormas English",
    },
    {
      resume: "/videos/Jeitinho_TrópicoFavorecimento_English.mp4",
      name: "Jeitinho TrópicoFavorecimento English",
    },
    {
      resume: "/videos/Sequence_ExpoCachaça_Eng.mp4",
      name: "Sequence ExpoCachaça Eng",
    },
    {
      resume: "/videos/Sequence_FaceTheWinter.mp4",
      name: "Sequence FaceTheWinter",
    },
    {
      resume: "/videos/Sequence_LostThePoint.mp4",
      name: "Sequence LostThePoint",
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
        <DivSelect>
          <Calendar
            value={dates}
            onChange={(e) => setDates(e.value)}
            selectionMode="range"
            readOnlyInput
            hideOnRangeSelection
            placeholder={translation.calendar}
            showButtonBar
            dateFormat="yy"
            view="year"
          />
        </DivSelect>
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
