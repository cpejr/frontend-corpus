import { useMemo, useState, useEffect } from "react";

import { useGetVideosByParameters } from "../../hooks/query/videos";
import {
  Container,
  Title,
  DivSelect,
  DivLine,
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

import { useQuery, useQueryClient } from "@tanstack/react-query";
import Pagination from "../../components/features/Pagination/Pagination";
import FilterArea from "../../components/features/FilterArea/FilterArea";

export default function Videos() {
  const queryClient = useQueryClient();
  const [searchValue, setSearchValue] = useState("");

  const { mutate: getVideos } = useGetVideosByParameters(
    ({
      filters = {},
      onSuccess = () => {},
      onError = (err) => console.error(err),
    } = {}) => {
      return useQuery({
        queryKey: ["videos", filters],
        queryFn: () => getVideos(filters),
        onSuccess,
        onError,
      });
    }
  );

  const { data: videos = [] } = useGetVideosByParameters({
    filters: {
      title: searchValue,
    },
  });

  // const SearchBarFilter = useMemo(() => {
  //   return videos.filter(
  //     (video) =>
  //       video.title.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
  //       video.ShortDescription.toLowerCase().includes(
  //         searchValue.toLocaleLowerCase()
  //       ) ||
  //       video.code.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
  //       video.context.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
  //       video.responsibles
  //         .toLowerCase()
  //         .includes(searchValue.toLocaleLowerCase())
  //   );
  // }, [videos, searchValue]);

  const SearchBarFilter = useMemo(() => {
    return videos.filter((video) => {
      const title = video.title?.toLowerCase() || "";
      const shortDescription = video.ShortDescription?.toLowerCase() || "";
      const code = video.code?.toLowerCase() || "";
      const context = video.context?.toLowerCase() || "";
      const responsibles = video.responsibles?.toLowerCase() || "";
      const search = searchValue.toLocaleLowerCase();
      console.log(video);
      return (
        title.includes(search) ||
        shortDescription.includes(search) ||
        code.includes(search) ||
        context.includes(search) ||
        responsibles.includes(search)
      );
    });
  }, [videos, searchValue]);

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
  const handleSubmit = async (data) => {
    console.log(data);
  };

  const navigate = useNavigate();
  const paginatedVideos = SearchBarFilter.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  useEffect(() => {
    setTotalPages(Math.ceil(SearchBarFilter.length / itemsPerPage));
  }, [SearchBarFilter.length]);
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
          <FilterArea
            onSubmit={handleSubmit} //loading = {isPending}
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
