import { useMemo, useState, useEffect } from "react";
import {
  Container,
  Title,
  DivSelect,
  DivLine,
  Calendar,
  ContainerSearchFilter,
  DivTitle,
  ContainerSearchBar,
  ButtonDiv,
} from "./Styles";
import { SearchBar } from "../../components";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";
import Card from "../../components/features/Card/Card";
import { useNavigate } from "react-router-dom";
import { getVideos } from "../../services/endpoints";
import { useQuery } from "@tanstack/react-query";
import Pagination from "../../components/features/Pagination/Pagination";

export default function Videos() {
  const [dates, setDates] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const { data: videos = [] } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  });

  const SearchBarFilter = useMemo(() => {
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
  console.log(SearchBarFilter);

  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(videos.length / itemsPerPage)
  );

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setCurrentPage(0);
  };
  useEffect(() => {
    setTotalPages(Math.ceil(videos.length / itemsPerPage));
  }, [videos.length]);

  const navigate = useNavigate();
  const paginatedVideos = SearchBarFilter.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

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
        </ContainerSearchBar>{" "}
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
      {paginatedVideos.map((video) => (
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
      <ButtonDiv>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          setCurrentPage={setCurrentPage}
        />
      </ButtonDiv>
    </Container>
  );
}
