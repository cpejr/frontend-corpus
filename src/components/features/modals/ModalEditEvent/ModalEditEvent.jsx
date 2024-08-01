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
import { newEventValidationSchema } from "../../../../pages/ManageVideos/utils";
import FormSiriusInput from "../../../common/FormSiriusInput/FormSiriusInput";
import { useState, useEffect } from "react";
import UploadInput from "../../../common/UploadInput/UploadInput";
import formatDate from "../../../../utils/formatDate";

export default function ModalEditEvent({
  event,
  close,
  _id,
  modal,
  transformArrayItems,
  updateEvent,
}) {
  const [idsCategoryType, setIdsCategoryType] = useState([]);
  const [idsCategoryPrice, setIdsCategoryPrice] = useState([]);
  const [archivesArray, setArchivesArray] = useState([]);
  const [date, setDate] = useState();

  const setCategories = () => {
    setIdsCategoryType(event?.id_categoryType?.map((ids) => ids._id) || []);
    setIdsCategoryPrice(event?.id_categoryPrice?.map((ids) => ids._id) || []);
  };
  useEffect(() => {
    if (modal) {
      setCategories();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);
  // On Submit
  const onSubmit = (data) => {
    let uploadEvent = {};
    if (archivesArray[0]) {
      uploadEvent = {
        base64: archivesArray[0]?.base64,
        name: archivesArray[0]?.name,
      };
    }
    const body = {
      ...data,
      date: date,
      id_categoryType: idsCategoryType,
      id_categoryPrice: idsCategoryPrice,
      uploadEvent: uploadEvent,
    };

    updateEvent({ _id: _id, body: body });
    close();
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newEventValidationSchema),
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
            label="Nome do evento:"
            defaultValue={event?.name}
            register={register}
            placeholder="Nome do evento:"
            errors={errors}
            color="black"
          />
          <FormSiriusInput
            name="shortDescription"
            label="Descrição curta:"
            defaultValue={event.shortDescription}
            register={register}
            placeholder="Descrição curta:"
            errors={errors}
            color="black"
          />
          <FormSiriusInput
            name="longDescription"
            label="Descrição longa:"
            defaultValue={event.longDescription}
            register={register}
            placeholder="Descrição longa:"
            errors={errors}
            color="black"
          />
          <FormSiriusInput
            name="link"
            label="Link:"
            defaultValue={event.link}
            register={register}
            placeholder="Link do evento:"
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
            values={[{ name: event?.eventUpload?.name, base64: undefined }]}
            color={"black"}
            hasButtons={false}
            width="100%"
            placeholder={event?.eventUpload?.name}
          />
          <MultipleSelect
            value={idsCategoryPrice}
            onChange={(e) => setIdsCategoryPrice(e.value)}
            options={transformArrayItems(categoryPrice)}
            optionLabel="label"
            placeholder="Escolha as características"
            className="w-full md:w-20rem"
            filter
            color="black"
          />
          <MultipleSelect
            value={idsCategoryType}
            onChange={(e) => setIdsCategoryType(e.value)}
            options={transformArrayItems(categoryType)}
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
            placeholder={formatDate({ value: event?.date })}
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

ModalEditEvent.propTypes = {
  _id: PropTypes.string.isRequired,
  event: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  transformArrayItems: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
};
