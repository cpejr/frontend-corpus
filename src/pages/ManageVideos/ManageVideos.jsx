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
import ModalDeleteVideo from "../../components/features/modals/ModalDeleteVideos/ModalDeleteVideos";
import { useCreateVideos } from "../../hooks/query/videos";
import { toast } from "react-toastify";

export default function ManageVideosPage() {
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  const [searchValue, setSearchValue] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState("");
  const [videoId, setVideoId] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleDelete = (id) => {
    setVideoId(id);
    setShowDeleteModal(true);
  }
  
  const [inputs] = useState([
    {
      type: "select",
      key: "code",
      placeholder: "Selecione sua formação",
      label: "code",
      options: Array.from({length: 100}, (_, i) => ({
        value: (i + 1),
        name: (i + 1).toString()
      })),
    },
    {
      type: "file",
      key: "videoFile",
      placeholder: "Escolha um arquivo de mídia",
      label: "videoFile",
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

  function handleSubmit(data) {
    console.log("esse comentário é um teste que imprime data", data);
    createVideo(data);
  }

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

      <Section></Section>
      <ModalDeleteVideo
        openModal={showDeleteModal}
        closeModal={() => setShowDeleteModal(false)}
        id={videoId}
      />
    </Container>
  );
}
