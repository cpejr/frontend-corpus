import { useEffect, useState, useMemo } from "react";
import { FormSubmit, SearchBar } from "../../components";
import {
  Container,
  Title,
  Section,
  DivTitle,
  ContainerSearchBar,
  CardVideo,
  Modals,
  StyledDeleteOutlined,
  StyledEditOutlined,
  VideoTitle,
} from "./Styles";
import { validationSchema } from "./utils";
import { TranslateText } from "./translations";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import ModalEditVideos from "../../components/features/modals/ModalEditVideos/ModalEditVideos";
import ModalDeleteVideo from "../../components/features/modals/ModalDeleteVideos/ModalDeleteVideos";
import { useCreateVideos, useUpdateVideos } from "../../hooks/query/videos";
import { toast } from "react-toastify";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getVideos } from "../../services/endpoints";

export default function ManageVideosPage() {
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  const [inputs, setInputs] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [showEditModal, setShowEditModal] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState("");

  const [videoId, setVideoId] = useState("");

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: videos = [] } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  });

  useEffect(() => {
    setInputs([
      {
        type: "text",
        key: "title",
        placeholder: translation.placeholder1,
        label: "title",
      },
      {
        type: "text",
        key: "ShortDescription",
        placeholder: translation.placeholder2,
        label: "ShortDescription",
      },
      {
        type: "file",
        key: "videoFile",
        placeholder: translation.placeholder3,
        label: "videoFile",
        errors: [translation.error1, translation.error2],
      },
      {
        type: "text",
        key: "code",
        placeholder: translation.placeholder4,
        label: "code",
      },
      {
        type: "text",
        key: "context",
        placeholder: translation.placeholder5,
        label: "context",
      },
      {
        type: "text",
        key: "responsibles",
        placeholder: translation.placeholder6,
        label: "responsibles",
      },
      {
        type: "select",
        key: "totalParticipants",
        placeholder: translation.placeholder7,
        label: "totalParticipants",
        options: Array.from({ length: 100 }, (_, i) => ({
          value: i + 1,
          name: (i + 1).toString(),
        })),
      },
      {
        type: "text",
        key: "country",
        placeholder: translation.placeholder8,
        label: "country",
      },
      {
        type: "text",
        key: "language",
        placeholder: translation.placeholder9,
        label: "language",
      },
      {
        type: "time",
        key: "duration",
        placeholder: translation.placeholder10,
        label: "duration",
      },
      {
        type: "date",
        key: "date",
        placeholder: translation.placeholder11,
        label: "date",
      },
    ]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalLanguage]);

  // const videos = [
  //   {
  //     id: "1",
  //     title: "Vídeo 1",
  //     linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
  //     name: "Video 1",
  //   },
  //   {
  //     id: "2",
  //     title: "Vídeo 2",
  //     linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
  //     name: "Video 2",
  //   },
  //   {
  //     id: "3",
  //     title: "Foda",
  //     linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
  //     name: "Foda",
  //   },
  // ];

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleDelete = (id) => {
    setVideoId(id);
    setShowDeleteModal(true);
  };

  function handleEditVideo(id) {
    setVideoId(id);
    setShowEditModal(true);
    updateVideos();
  }

  const { mutate: createVideo, isPending } = useCreateVideos({
    onSuccess: () => {
      toast.success(translation.successToast);
      queryClient.invalidateQueries({
        queryKey: ["videos"],
      });
    },
    onError: (err) => {
      console.log(err);
      // toast.error(TranslateToastError(globalLanguage, err.response.status));
    },
  });

  const { mutate: updateVideos } = useUpdateVideos({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["videos"],
      });
      toast.success(translation.successToast);
    },
    onError: (err) => {
      console.log(err);
      //toast.error(TranslateToastError(globalLanguage, err.response.status));
    },
  });
  const filteredVideos = useMemo(() => {
    return videos.filter((video) =>
      video.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [videos, searchValue]);

  const handleSubmit = async (data) => {
    createVideo(data);
  };

  return (
    <Container>
      <DivTitle>
        <Title>{translation.title1}</Title>
      </DivTitle>

      <Section>
        <FormSubmit
          inputs={inputs}
          onSubmit={handleSubmit}
          schema={validationSchema()}
          loading={isPending}
          buttonText={translation.button1}
        />
      </Section>

      <DivTitle margin="20px">
        <Title>{translation.title2}</Title>
      </DivTitle>

      <ContainerSearchBar>
        <SearchBar
          aria-label="Barra de pesquisa"
          placeholder={translation.placeholderSearch}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          search={handleSearch}
        />
      </ContainerSearchBar>

      <Section>
        {filteredVideos.map((video) => (
          <CardVideo key={video._id}>
            <VideoTitle
              onClick={() => {
                navigate(`/videos/${video.title}`, { state: video });
              }}
            >
              {video.title}
            </VideoTitle>
            <div
              style={{
                flexGrow: 1,
                height: "2px",
                backgroundColor: "black",
                margin: "0 500px",
              }}
            ></div>

            <StyledEditOutlined onClick={() => handleEditVideo(video._id)} />
            <StyledDeleteOutlined onClick={() => handleDelete(video._id)} />
          </CardVideo>
        ))}
        <Modals>
          <ModalDeleteVideo
            openModal={showDeleteModal}
            closeModal={() => setShowDeleteModal(false)}
            id={videoId}
          />
          <ModalEditVideos
            modal={showEditModal}
            handleEditVideo={setVideoId}
            close={() => setShowEditModal(false)}
            id={videoId}
          />
        </Modals>
      </Section>
    </Container>
  );
}
