import FormSubmit from "../../FormSubmit/FormSubmit";
import { Container, Text, Title } from "./Styles";
import { Modal } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import PropTypes from "prop-types";
import { useState } from "react";
import { validationSchema } from "./utils";
import { useForgotPassword } from "../../../../hooks/query/user";
import { toast } from "react-toastify";
import { TailSpin } from 'react-loader-spinner';

export default function ModalForgotPassword({ openModal, closeModal }) {
  
  const [inputs] = useState([
    {
      type: "text",
      key: "email",
      placeholder: "Email",
      label: "email",
    },
  ]);

  const { mutate: forgotPassword, isPending } = useForgotPassword({
    onSuccess: () => {
      toast.success("E-mail de recuperação enviado com sucesso!");
      closeModal();
    },
    onError: (err) => {
      toast.error(err.response.data.message);
      closeModal();
    },
  });

  const onSubmit = (data) => {
    forgotPassword(data);
  };

  return (
    <Modal
            open={openModal}
            onCancel={closeModal}
            footer={null}
            width={700}
            closeIcon={<CloseOutlined />}
            destroyOnClose
            centered
          >
      <Container>
        <Title>Confirmação do Email</Title>
        <Text>Digite o e-mail o qual quer recuperar a senha:</Text>
        <FormSubmit onSubmit={onSubmit} inputs={inputs} schema={validationSchema} loading={isPending} buttonText="Enviar"/>
        {isPending && 
          (<>
            <Text>Enviando email...</Text>
            <TailSpin></TailSpin>
          </>)}
      </Container>
    </Modal>
  );
}

ModalForgotPassword.propTypes = {
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};