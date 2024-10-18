import { Container, Text, Title } from "./Styles";
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from "prop-types";
import { useForgotPassword } from "../../../../hooks/query/user";
import { toast } from "react-toastify";
import { useGlobalLanguage } from "../../../../stores/globalLanguage";
import { TranslateText, TranslateToastError } from "./translations";
import Button from "../../../common/Button/Button";
import { Modal } from 'antd';

export default function ModalDeleteVideo({ openModal, closeModal, id }) {
  
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText(globalLanguage);

  const { mutate: forgotPassword } = useForgotPassword({
    onSuccess: () => {
      toast.success(translation.successToast);
      closeModal();
    },
    onError: (err) => {
      toast.error(TranslateToastError(globalLanguage, err.response.status));
      closeModal();
    },
  });

  const onConfirm = () => {
    forgotPassword(id);
  };

  return (
    <Modal
            open={openModal}
            onCancel={closeModal}
            footer={null}
            closeIcon={<CloseOutlined />}
            destroyOnClose
            centered
          >
      <Container>
        <Title>{translation.title}</Title>
        <Text>{translation.text}</Text>
        <Button border-color="white" fontSize="1.2em" width="40% !important" onClick={onConfirm}>{translation.button}</Button>
      </Container>
    </Modal>
  );
}

ModalDeleteVideo.propTypes = {
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};