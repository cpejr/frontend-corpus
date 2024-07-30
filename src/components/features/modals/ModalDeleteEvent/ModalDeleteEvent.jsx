import PropTypes from "prop-types";
import Button from "../../../common/Button/Button";
import { colors } from "../../../../styles/stylesVariables";
import { Container, Message, ModalStyle } from "./Styles";

export default function ModalDeleteEvent({
  handleEventDelete,
  id,
  modal,
  closeModal,
  modalCloseIcon,
}) {
  return (
    <ModalStyle
      open={modal}
      onCancel={closeModal}
      closeIcon={modalCloseIcon}
      width={500}
      height={250}
      padding={0}
      footer={null}
      centered
      destroyOnClose
    >
      <Container>
        <Message>Tem certeza que deseja excluir esse evento?</Message>
        <Button
          onClick={() => {
            handleEventDelete(id);
            closeModal();
          }}
          type="button"
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
          Excluir
        </Button>
      </Container>
    </ModalStyle>
  );
}

ModalDeleteEvent.propTypes = {
  handleEventDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  modal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  modalCloseIcon: PropTypes.object.isRequired,
};
