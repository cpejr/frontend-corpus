import { useState } from "react";
import { FormSubmit, SearchBar } from "../../components";
import {
  Container,
  Title,
  Section,
  DivTitle,
  ContainerSearchBar,
} from "./Styles";
import { newValidationSchema } from "./utils";
import { TranslateText } from "./translations";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import ModalEditVideos from "../../components/features/modals/ModalEditVideos/ModalEditVideos";
import ModalDeleteVideo from "../../components/features/modals/ModalDeleteVideos/ModalDeleteVideos";
import { useCreateVideos, useUpdateVideos } from "../../hooks/query/videos";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import VideoList from "../../components/features/VideoList/VideoList";
import { updateVideos } from "../../services/endpoints";
export default function ManageVideosPage() {
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  const [searchValue, setSearchValue] = useState("");
  const [showEditModal, setShowEditModal] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState("");
  const queryClient = useQueryClient();

  const [videoId, setVideoId] = useState("");

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

    }
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
      toast.error(TranslateToastError(globalLanguage, err.response.status));
    },
  });

  const handleSubmit = async (data) => {
    try {
      if (videoId) {
        updateVideos(data);
      } else {
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
          schema={newValidationSchema}
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
        <VideoList onEdit={handleEditVideo} />

        <ModalDeleteVideo
          openModal={showDeleteModal}
          closeModal={() => setShowDeleteModal(false)}
          id={videoId}
        />
        <ModalEditVideos
          openModal={showEditModal}
          handleEditVideo={setVideoId}
          closeModal={() => setShowEditModal(false)}
          id={videoId}
        />
      </Section>
    </Container>
  );
}
