import { useEffect, useState } from "react";
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
import { useCreateVideos, useGetVideos } from "../../hooks/query/videos";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import translateText from "../../services/others/translateAPI";

export default function ManageVideosPage() {
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });
  const translateLanguage = globalLanguage.toLowerCase();

  const [inputs, setInputs] = useState([]);
  const [allVideos, setAllVideos] = useState([]);

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
        key: "description",
        placeholder: translation.placeholder2,
        label: "description",
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
        key: "responsible",
        placeholder: translation.placeholder6,
        label: "responsible",
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

    translateTitles();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalLanguage]);

  async function translateTitles() {
    const translatedTitles = await Promise.all(
      videos.map(async (video) => {
        return { ...video, title: await translateText(video.title, translateLanguage)}; 
      })
    );

    setAllVideos(translatedTitles);
  }

  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const queryClient = useQueryClient();

  const [videoId, setVideoId] = useState("");

  const videosArray = [
    { _id: "1", title: "Vídeo 1", linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4", name: "Video 1" },
    { _id: "2", title: "Vídeo 2", linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4", name: "Video 2" },
    { _id: "3", title: "Foda", linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4", name: "Foda" },
  ];

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleDelete = (id) => {
    setVideoId(id);
    setShowDeleteModal(true);
  };

  function handleEdit(id) {
    setVideoId(id);
    setShowEditModal(true);
  }

  const { data: videos, isLoading } = useGetVideos({
    onError: () => {
    },
  });

  const { mutate: createVideo, isPending } = useCreateVideos({
    onSuccess: () => {
      toast.success(translation.successToast);
    },
    onError: (err) => {
      console.log(err);
      // toast.error(TranslateToastError(globalLanguage, err.response.status));
    },
  });

  const handleSubmit = async (data) => {
    console.log(data);
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
          search={handleSearch}
        />
      </ContainerSearchBar>

      <Section>
        {videosArray // trocar para allVideos
        .filter((obj) => obj.title.toLowerCase().includes(searchValue.toLowerCase()),)
        .map((video) => (
          <CardVideo key={video.id}>
            <VideoTitle onClick={() => { navigate(`/videos/${video.title}`, { state: video } )}}> 
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

            <StyledEditOutlined onClick={() => handleEdit(video?._id)} />
            <StyledDeleteOutlined onClick={() => handleDelete(video?._id)} />
          </CardVideo>
        ))}
        <Modals>
          <ModalDeleteVideo
            openModal={showDeleteModal}
            closeModal={() => setShowDeleteModal(false)}
            id={videoId}
          />
          <ModalEditVideos
            openModal={showEditModal}
            closeModal={() => setShowEditModal(false)}
            id={videoId}
          />
        </Modals>
      </Section>
    </Container>
  );
}
