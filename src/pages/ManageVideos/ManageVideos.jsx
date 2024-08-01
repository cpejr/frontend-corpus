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

import { newEventValidationSchema } from "./utils";
import {
  FormInputEvents,
  ModalDeleteEvent,
  ModalEditEvent,
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
  EventButtons,
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
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [archivesArray, setArchivesArray] = useState([]);
  const [archiveError, setArchiveError] = useState(false);

  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  const { data: events } = useGetVideos({
    onError: (err) => {
      toast.error(err);
    },
  });

  const formattedEvents =
    events && Array.isArray(events)
      ? events.map((event) => ({
          name: event.name,
          shortDescription: event.shortDescription,
          manage: (
            <EventButtons>
              <FaTrash onClick={() => handleOpenDeleteModal(event._id)} />
              <FaEdit onClick={() => handleOpenEditModal(event)} />
            </EventButtons>
          ),
        }))
      : [];

  const { mutate: createEvent, isPending: isCreateEventPending } =
    useCreateVideos({
      onSuccess: () => {
        toast.success("Evento criado com sucesso");
        queryClient.invalidateQueries({
          queryKey: ["videos"],
        });
      },
      onError: (err) => {
        return err;
      },
    });

  const { mutate: deleteEvent, isPending: isPendingDelete } = useDeleteVideos({
    onSuccess: () => {
      toast.success("Evento deletado com sucesso");
      queryClient.invalidateQueries({
        queryKey: ["videos"],
      });
    },
    onError: (err) => {
      return err;
    },
  });

  const { mutate: updateEvent, isPending: isPendingUpdate } = useUpdateVideos({
    onSuccess: () => {
      toast.success("Evento editado com sucesso");
      queryClient.invalidateQueries({
        queryKey: ["videos"],
      });
    },
    onError: (err) => {
      return err;
    },
  });
  // Modal Functions

  const handleOpenDeleteModal = (eventId) => {
    setSelectedEventId(eventId);
    setDeleteModalOpen(true);
  };

  const handleOpenEditModal = (event) => {
    setSelectedEventId(event?._id);
    setSelectedEvent(event);
    setEditModalOpen(true);
  };

  const handleCloseEditModal = async () => {
    setSelectedEvent(null);
    setSelectedEventId(null);
    setEditModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setSelectedEventId(null);
    setDeleteModalOpen(false);
  };

  const onSubmit = (data, e) => {
    let uploadEvent = {};
    if (archivesArray[0]) {
      uploadEvent = {
        base64: archivesArray[0].base64,
        name: archivesArray[0].name,
      };
      const combinedData = {
        ...data,
        date: date,
        uploadEvent,
      };
      createEvent(combinedData);
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
  } = useForm({ resolver: zodResolver(newEventValidationSchema) });

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
          <FormInputEvents
            name="name"
            placeholder={translation.placeholder1}
            errors={errors}
            register={register}
            inputKey="1"
          />
          <FormInputEvents
            name="shortDescription"
            placeholder={translation.placeholder2}
            errors={errors}
            register={register}
            inputKey="3"
          />
          <FormInputEvents
            name="longDescription"
            placeholder={translation.placeholder3}
            errors={errors}
            register={register}
          />
          <FormInputEvents
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
          {isCreateEventPending ? <LoadingOutlined /> : translation.button1}
        </Button>
      </Form>
      <Title>{translation.title2}</Title>
      {isDeleteModalOpen && (
        <ModalDeleteEvent
          id={selectedEventId}
          closeModal={handleCloseDeleteModal}
          handleEventDelete={deleteEvent}
          modal={true}
          destroyOnClose
        />
      )}
      {isEditModalOpen && (
        <ModalEditEvent
          _id={selectedEventId}
          modal={true}
          event={selectedEvent}
          updateEvent={updateEvent}
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
        <Table columns={columns} data={formattedEvents} />
      )}
    </Container>
  );
}
