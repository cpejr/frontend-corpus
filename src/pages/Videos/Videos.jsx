import { useMemo, useState } from "react";
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
import { getVideos } from "../../services/endpoints";
import { useQuery } from "@tanstack/react-query";

export default function Videos() {
  const [dates, setDates] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const { data: videos = [] } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  });
  const filteredVideos = useMemo(() => {
    return videos.filter(
      (video) =>
        video.title.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        video.ShortDescription.toLowerCase().includes(
          searchValue.toLocaleLowerCase()
        ) ||
        video.code.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        video.context.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        video.responsibles
          .toLowerCase()
          .includes(searchValue.toLocaleLowerCase())
    );
  }, [videos, searchValue]);

  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  // const videos = [
  //   {
  //     thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
  //     linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
  //     name: "Video1",
  //   },
  //   {
  //     thumbnail:
  //       "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
  //     name: "Legal",
  //   },
  //   {
  //     thumbnail:
  //       "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
  //     name: "Nome Diferente",
  //   },
  //   {
  //     thumbnail:
  //       "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
  //     name: "Youtube",
  //   },
  // ];

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
      {filteredVideos.map((video) => (
        <DivLine key={video._id}>
          <Card
            thumbnail={video.thumbnail}
            context={video.context}
            responsibles={video.responsibles}
            code={video.code}
            ShortDescription={video.ShortDescription}
            textButton={translation.buttonCard}
            event={() => {
              navigate(`/videos/${video.title}`, { state: video });
            }}
            title={video.title}
          />
        </DivLine>
      ))}
    </Container>
  );
}
