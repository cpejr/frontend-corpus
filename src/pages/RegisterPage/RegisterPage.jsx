import { useState } from "react";
import FormSubmit from "../../components/features/FormSubmit/FormSubmit";
import { Container, Title, DivContainer, TextClick, Text } from "./Styles";
import { validationSchemaLogin, validationSchemaRegister } from "./utils";
import { useCreateUsers } from "../../hooks/query/user";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalForgotPassword from "../../components/features/modals/ModalForgotPassword/ModalForgotPassword";
import { useNavigate } from 'react-router-dom';
import { useLogin } from "../../hooks/query/session";

export default function RegisterPage() {

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  // Array com inputs dos formulários de login e cadastro
  const [inputsRegister] = useState([
    {
      type: "text",
      key: "name",
      placeholder: "Nome",
      label: "name",
    },
    {
      type: "date",
      key: "birthday",
      placeholder: "Data de nascimento",
      label: "birthday",
    },
    {
      type: "text",
      key: "phone",
      placeholder: "Telefone (Ex: 55XX9XXXXXXXX)",
      label: "phone",
    },
    {
      type: "text",
      key: "email",
      placeholder: "Email",
      label: "email",
    },
    {
      type: "password",
      key: "password",
      placeholder: "Senha",
      label: "password",
    },
    {
      type: "checkbox",
      key: "acceptTerms",
      placeholder: "Concordo com as politícas de privacidade",
      label: "acceptTerms",
    },
  ]);

  const [inputsLogin] = useState([
    {
      type: "text",
      key: "email",
      placeholder: "Email",
      label: "email",
    },
    {
      type: "password",
      key: "password",
      placeholder: "Senha",
      label: "password",
    },
  ]);

  const { mutate: createUser, isPending: registerLoading } = useCreateUsers({
    onSuccess: () => {
      toast.success("Usuário cadastrado com sucesso!");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  const registerSubmit = (data) => {
    createUser(data);
  };

  const { mutate: login, isPending: loginLoading } = useLogin({
    onSuccess: () => {
      toast.success("Login realizado com sucesso!");

      navigate("/");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  const loginSubmit = (data) => {
    login(data);
  };

  return (
    <Container>
      <DivContainer>
        <Title>Já possui cadastro? Se sim, faça seu login:</Title>
        <FormSubmit onSubmit={loginSubmit} schema={validationSchemaLogin} loading={loginLoading} inputs={inputsLogin} buttonText="Fazer Login"></FormSubmit>
        <Text>Esqueceu a senha? Recupere <TextClick onClick={() => setShowModal(true)}>aqui</TextClick></Text>
        <Title>Se não, faça ele agora:</Title>
        <FormSubmit onSubmit={registerSubmit} schema={validationSchemaRegister} loading={registerLoading} inputs={inputsRegister} buttonText="Fazer Cadastro"></FormSubmit>
      </DivContainer>
      <ModalForgotPassword openModal={showModal} closeModal={() => setShowModal(false)}/>
    </Container>
  );
}