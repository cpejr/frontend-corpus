import PropTypes from "prop-types";
import Button from "../../../common/Button/Button";
import { colors } from "../../../../styles/stylesVariables";
import {
  Container,
  Message,
  ModalStyle,
  Form,
  MultipleSelect,
  Calendar,
} from "./Styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newVideosValidationSchema } from "../../../../pages/ManageVideos/utils";
import FormSiriusInput from "../../../common/FormSiriusInput/FormSiriusInput";
import { useState, useEffect } from "react";
import UploadInput from "../../../common/UploadInput/UploadInput";
import formatDate from "../../../../utils/formatDate";

export default function ModalEditVideos({
  videos,
  close,
  _id,
  modal,
  updateVideos,
}) {
  const [archivesArray, setArchivesArray] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {}, [modal]);
  // On Submit
  const onSubmit = (data) => {
    let uploadVideos = {};
    if (archivesArray[0]) {
      uploadVideos = {
        base64: archivesArray[0]?.base64,
        name: archivesArray[0]?.name,
      };
    }
    const body = {
      ...data,
      date: date,
      uploadVideos: uploadVideos,
    };

    updateVideos({ _id: _id, body: body });
    close();
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newVideosValidationSchema),
  });
  return (
    <Container>
      <ModalStyle
        open={modal}
        onCancel={close}
        centered
        destroyOnClose
        footer={null}
      >
        <Message>Editar Informações</Message>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormSiriusInput
            name="name"
            label="Nome do Videoso:"
            defaultValue={videos?.name}
            register={register}
            placeholder="Nome do Videoso:"
            errors={errors}
            color="black"
          />
          <FormSiriusInput
            name="shortDescription"
            label="Descrição curta:"
            defaultValue={videos.shortDescription}
            register={register}
            placeholder="Descrição curta:"
            errors={errors}
            color="black"
          />
          <FormSiriusInput
            name="longDescription"
            label="Descrição longa:"
            defaultValue={videos.longDescription}
            register={register}
            placeholder="Descrição longa:"
            errors={errors}
            color="black"
          />
          <FormSiriusInput
            name="link"
            label="Link:"
            defaultValue={videos.link}
            register={register}
            placeholder="Link do Videoso:"
            errors={errors}
            color="black"
          />

          <UploadInput
            key={"images"}
            inputKey={"archive0"}
            error={false}
            register={register}
            setArchivesArray={setArchivesArray}
            archivesArray={archivesArray}
            values={[{ name: videos?.VideosUpload?.name, base64: undefined }]}
            color={"black"}
            hasButtons={false}
            width="100%"
            placeholder={videos?.VideosUpload?.name}
          />
          <MultipleSelect
            optionLabel="label"
            placeholder="Escolha as características"
            className="w-full md:w-20rem"
            filter
            color="black"
          />
          <MultipleSelect
            optionLabel="label"
            placeholder="Escolha as características"
            className="w-full md:w-20rem"
            filter
            color="black"
          />
          <Calendar
            value={date}
            onChange={(e) => setDate(e.value)}
            readOnlyInput
            name="data"
            placeholder={formatDate({ value: videos?.date })}
            showButtonBar
            dateFormat="dd/mm/yy"
          />
          <Button
            type="submit"
            backgroundcolor="transparent"
            color={colors.font.primary}
            border="1px solid"
            borderRadius="0.5rem"
            marginTop="1.5rem"
            fontSize="1.8rem"
            fontWeight="500"
            lineHeight="2.2rem"
            hoverBackgroundColor={colors.modals.modalButton}
            hoverColor={colors.font.secondary}
            borderColor={colors.modals.modalButton}
          >
            Editar
          </Button>
        </Form>
      </ModalStyle>
    </Container>
  );
}

ModalEditVideos.propTypes = {
  _id: PropTypes.string.isRequired,
  videos: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  transformArrayItems: PropTypes.func.isRequired,
  updateVideos: PropTypes.func.isRequired,
};
