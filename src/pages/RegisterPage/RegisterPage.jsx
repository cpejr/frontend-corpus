import { useState } from "react";
import FormSubmit from "../../components/common/FormSubmit/FormSubmit";
import { Checkbox, Container, CheckSection, Title, CheckText, DivContainer } from "./Styles";

export default function RegisterPage() {

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

  return (
    <Container>
      <DivContainer>
        <Title>Já possui cadastro? Se sim, faça seu login:</Title>
        <FormSubmit inputs={inputsLogin} buttonText="Fazer Login"></FormSubmit>
        <Title>Se não, faça ele agora:</Title>
        <FormSubmit inputs={inputsRegister} buttonText="Fazer Cadastro"></FormSubmit>
        <CheckSection>
          <Checkbox type="checkbox"></Checkbox>
          <CheckText>Concordo com as politícas de privacidade</CheckText>
        </CheckSection>
      </DivContainer>
    </Container>
  );
}