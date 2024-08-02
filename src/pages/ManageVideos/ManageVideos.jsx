import { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import Button from "../../components/common/Button/Button";
import {
  useCreateVideos,
  useDeleteVideos,
  useGetVideos,
  useUpdateVideos,
} from "../../hooks/query/videos";
import { useQueryClient } from "@tanstack/react-query";

import { newVideosValidationSchema } from "./utils";
import {
  FormInputVideos,
  ModalDeleteVideos,
  ModalEditVideos,
  Table,
} from "../../components";
import {
  Container,
  Title,
  Form,
  Section,
  Selects,
  MultipleSelect,
  Calendar,
  Buttons,
  LoadingStyles,
  BackgroundTitle,
} from "./Styles";
import UploadInput from "../../components/common/UploadInput/UploadInput";
import { LoadingOutlined } from "@ant-design/icons";

import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";

export default function ManageVideos() {
  const queryClient = useQueryClient();
  const [date, setDate] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [archivesArray, setArchivesArray] = useState([]);
  const [archiveError, setArchiveError] = useState(false);

  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  const { data: videos } = useGetVideos({
    onError: (err) => {
      toast.error(err);
    },
  });

  const formattedVideos =
    videos && Array.isArray(videos)
      ? videos.map((video) => ({
          name: video.name,
          shortDescription: video.shortDescription,
          manage: (
            <Buttons>
              <FaTrash onClick={() => handleOpenDeleteModal(video._id)} />
              <FaEdit onClick={() => handleOpenEditModal(video)} />
            </Buttons>
          ),
        }))
      : [];

  const { mutate: createVideo, isPending: isCreateVideoPending } =
    useCreateVideos({
      onSuccess: () => {
        toast.success("Video criado com sucesso");
        queryClient.invalidateQueries({
          queryKey: ["videos"],
        });
      },
      onError: (err) => {
        return err;
      },
    });

  const { mutate: deleteVideo, isPending: isPendingDelete } = useDeleteVideos({
    onSuccess: () => {
      toast.success("Video deletado com sucesso");
      queryClient.invalidateQueries({
        queryKey: ["videos"],
      });
    },
    onError: (err) => {
      return err;
    },
  });

  const { mutate: updateVideo, isPending: isPendingUpdate } = useUpdateVideos({
    onSuccess: () => {
      toast.success("Video editado com sucesso");
      queryClient.invalidateQueries({
        queryKey: ["videos"],
      });
    },
    onError: (err) => {
      return err;
    },
  });
  // Modal Functions

  const handleOpenDeleteModal = (videoId) => {
    setSelectedVideoId(videoId);
    setDeleteModalOpen(true);
  };

  const handleOpenEditModal = (video) => {
    setSelectedVideoId(video?._id);
    setSelectedVideo(video);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = async () => {
    setSelectedVideo(null);
    setSelectedVideoId(null);
    setEditModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setSelectedVideoId(null);
    setDeleteModalOpen(false);
  };

  const onSubmit = (data, e) => {
    let uploadVideo = {};
    if (archivesArray[0]) {
      uploadVideo = {
        base64: archivesArray[0].base64,
        name: archivesArray[0].name,
      };
      const combinedData = {
        ...data,
        date: date,
        uploadVideo,
      };
      createVideo(combinedData);
      e.target.reset();
      setArchivesArray([]);
      setArchiveError(false);
    } else {
      setArchiveError(true);
    }
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(newVideosValidationSchema) });

  const columns = [
    { field: "name", header: translation.table1 },
    { field: "shortDescription", header: translation.table2 },
    { field: "manage", header: translation.table3 },
  ];
  const transformArrayItems = (OriginalArray) => {
    if (!OriginalArray || !Array.isArray(OriginalArray)) {
      return [];
    }

    return OriginalArray?.map((item) => ({
      value: item?._id,
      label: item?.name,
    }));
  };
  return (
    <Container>
      <BackgroundTitle>
        <Title>{translation.title1}</Title>
      </BackgroundTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Section>
          <FormInputVideos
            name="name"
            placeholder={translation.placeholder1}
            errors={errors}
            register={register}
            inputKey="1"
          />
          <FormInputVideos
            name="shortDescription"
            placeholder={translation.placeholder2}
            errors={errors}
            register={register}
            inputKey="3"
          />
          <FormInputVideos
            name="longDescription"
            placeholder={translation.placeholder3}
            errors={errors}
            register={register}
          />
          <FormInputVideos
            name="link"
            placeholder={translation.placeholder4}
            errors={errors}
            register={register}
            inputKey="4"
          />

          <UploadInput
            key="images"
            inputKey="images"
            placeholder={translation.placeholder5}
            error={archiveError}
            register={register}
            setArchivesArray={setArchivesArray}
            archivesArray={archivesArray}
            color="white"
            hasButtons={false}
            width="100%"
          />
          <Selects>
            <MultipleSelect
              optionLabel="label"
              placeholder={translation.placeholder6}
              className="w-full md:w-20rem"
              filter
            />

            <MultipleSelect
              optionLabel="label"
              placeholder={translation.placeholder7}
              className="w-full md:w-20rem"
              filter
            />
            <Calendar
              value={date}
              onChange={(e) => setDate(e.value)}
              readOnlyInput
              name="data"
              placeholder={translation.placeholder8}
              showButtonBar
              dateFormat="dd/mm/yy"
            />
          </Selects>
        </Section>
        <Button type="submit" width="150px" height="50px">
          {isCreateVideoPending ? <LoadingOutlined /> : translation.button1}
        </Button>
      </Form>
      <Title>{translation.title2}</Title>
      {isDeleteModalOpen && (
        <ModalDeleteVideos
          id={selectedVideoId}
          closeModal={handleCloseDeleteModal}
          handleVideoDelete={deleteVideo}
          modal={true}
          destroyOnClose
        />
      )}
      {isEditModalOpen && (
        <ModalEditVideos
          _id={selectedVideoId}
          modal={true}
          video={selectedVideo}
          updateVideo={updateVideo}
          close={handleCloseEditModal}
          transformArrayItems={transformArrayItems}
          destroyOnClose
        />
      )}

      {isPendingDelete || isPendingUpdate ? (
        <LoadingStyles>
          <LoadingOutlined />
        </LoadingStyles>
      ) : (
        <Table columns={columns} data={formattedVideos} />
      )}
    </Container>
  );
}
