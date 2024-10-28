import { useState } from "react";
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
import { useQueryClient } from "@tanstack/react-query";
import { updateVideos } from "../../services/endpoints";
import { useNavigate } from "react-router-dom";
export default function ManageVideosPage() {
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });
  const navigate = useNavigate;

  const [searchValue, setSearchValue] = useState("");
  const [showEditModal, setShowEditModal] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState("");
  const queryClient = useQueryClient();

  const [videoId, setVideoId] = useState("");

  const videos = [
    { id: "1", title: "Vídeo 1" },
    { id: "2", title: "Vídeo 2" },
    { id: "3", title: "Vídeo 3" },
  ];

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
  const handleNavigateToVideo = () => {
    navigate(`http://localhost:5173/video`);
  };

  const [inputs] = useState([
    {
      type: "select",
      key: "code",
      placeholder: "Selecione sua formação",
      label: "code",
      options: Array.from({ length: 100 }, (_, i) => ({
        value: i + 1,
        name: (i + 1).toString(),
      })),
    },
    {
      type: "file",
      key: "videoFile",
      placeholder: "Escolha um arquivo de mídia",
      label: "videoFile",
    },
    {
      type: "time",
      key: "duration",
      placeholder: "Tempo de duração",
      label: "Duração",
    },
  ]);

  const { mutate: createVideo, isPending } = useCreateVideos({
    onSuccess: () => {
      // toast.success(translation.successToast);
    },
    onError: (err) => {
      console.log(err);
      // toast.error(TranslateToastError(globalLanguage, err.response.status));
    },
  });
  const { mutate: updateVideos, isPending: loading } = useUpdateVideos({
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

  const handleSubmit = async (data) => {
    try {
      if (videoId) {
        updateVideos(data);
      } else {
        console.log(data);
        createVideo(data);
      }
    } catch (error) {
      console.error("Erro ao salvar o vídeo", error);
    }
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
          schema={validationSchema}
          loading={false}
          buttonText="Enviar"
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
          search={handleSearch}
        />
      </ContainerSearchBar>

      <Section>
        {videos.map((video) => (
          <CardVideo key={video.id}>
            <VideoTitle onClick={() => handleNavigateToVideo}>
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

            <StyledEditOutlined onClick={() => handleEditVideo(video.id)} />
            <StyledDeleteOutlined onClick={() => handleDelete(video.id)} />
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
