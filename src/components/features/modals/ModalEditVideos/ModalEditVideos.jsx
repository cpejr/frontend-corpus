import FormSubmit from "../../FormSubmit/FormSubmit";
import { Container, ModalStyles, Text, Title } from "./Styles";
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from "prop-types";
import { useState } from "react";
import { validationSchema } from "./utils";
import { toast } from "react-toastify";
import { TailSpin } from 'react-loader-spinner';
import { useGlobalLanguage } from "../../../../stores/globalLanguage";
import { TranslateText, TranslateToastError } from "./translations";
import { useUpdateVideos } from "../../../../hooks/query/videos";

export default function ModalEditVideos({ openModal, closeModal, id }) {
  
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);
  
  const [inputs] = useState([
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
        type: "text",
        key: "context",
        placeholder: translation.placeholder3,
        label: "context",
      },
      {
        type: "text",
        key: "responsible",
        placeholder: translation.placeholder4,
        label: "responsible",
      },
      {
        type: "select",
        key: "totalParticipants",
        placeholder: translation.placeholder5,
        label: "totalParticipants",
        options: Array.from({ length: 100 }, (_, i) => ({
          value: i + 1,
          name: (i + 1).toString(),
        })),
      },
      {
        type: "text",
        key: "country",
        placeholder: translation.placeholder6,
        label: "country",
      },
      {
        type: "text",
        key: "language",
        placeholder: translation.placeholder7,
        label: "language",
      },
      {
        type: "time",
        key: "duration",
        placeholder: translation.placeholder8,
        label: "duration",
      },
      {
        type: "date",
        key: "date",
        placeholder: translation.placeholder9,
        label: "date",
      },
      {
        type: "text",
        key: "transcription",
        placeholder: translation.placeholder10,
        label: "transciption",
      },
  ]);

  const { mutate: updateVideo, isPending } = useUpdateVideos({
    onSuccess: () => {
      toast.success(translation.successToast);
      closeModal();
    },
    onError: (err) => {
      toast.error(TranslateToastError(globalLanguage, err.response.status));
      closeModal();
    },
  });

  const onSubmit = (data) => {
    updateVideo({ _id: id, body: data });
  };

  return (
    <ModalStyles
            open={openModal}
            onCancel={closeModal}
            footer={null}
            width={700}
            closeIcon={<CloseOutlined />}
            destroyOnClose
            centered
          >
      <Container>
        <Title>{translation.title}</Title>
        <Text>{translation.text}</Text>
        <FormSubmit onSubmit={onSubmit} inputs={inputs} schema={validationSchema()} loading={isPending} buttonText={translation.button}/>
        {isPending && 
          (<>
            <TailSpin></TailSpin>
          </>)}
      </Container>
    </ModalStyles>
  );
}

ModalEditVideos.propTypes = {
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};