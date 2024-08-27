import { useState } from "react";
import FormSubmit from "../../components/features/FormSubmit/FormSubmit";
import { Container, Title, DivContainer, TextClick, Text } from "./Styles";
import { validationSchema } from "./utils";

export default function RegisterPage() {

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


  const registerSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <DivContainer>
        <Title>Já possui cadastro? Se sim, faça seu login:</Title>
        <FormSubmit resetForm={true} inputs={inputsLogin} buttonText="Fazer Login"></FormSubmit>
        <Text>Esqueceu a senha? Recupere <TextClick>aqui</TextClick></Text>
        <Title>Se não, faça ele agora:</Title>
        <FormSubmit onSubmit={registerSubmit} schema={validationSchema} loading={false} inputs={inputsRegister} buttonText="Fazer Cadastro"></FormSubmit>
      </DivContainer>
    </Container>
  );
}