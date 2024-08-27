import { useState } from "react";
import FormSubmit from "../../components/common/FormSubmit/FormSubmit";
import { Checkbox, Container, CheckSection, Title, CheckText, DivContainer, TextClick, Text, ErrorText } from "./Styles";
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

  // Variáveis de controle de cadastro
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errorNotCheck, setErrorNotCheck] = useState(false);

  const registerSubmit = (data) => {
    if(acceptTerms){
      console.log(data);
      setAcceptTerms(false);
      setErrorNotCheck(false);
    }else{
      setErrorNotCheck(true);
    }
  };

  return (
    <Container>
      <DivContainer>
        <Title>Já possui cadastro? Se sim, faça seu login:</Title>
        <FormSubmit resetForm={true} inputs={inputsLogin} buttonText="Fazer Login"></FormSubmit>
        <Text>Esqueceu a senha? Recupere <TextClick>aqui</TextClick></Text>
        <Title>Se não, faça ele agora:</Title>
        <FormSubmit onSubmit={registerSubmit} schema={validationSchema} loading={false} resetForm={acceptTerms} inputs={inputsRegister} buttonText="Fazer Cadastro"></FormSubmit>
        <CheckSection>
          <Checkbox type="checkbox" checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)}></Checkbox>
          <CheckText>Concordo com as politícas de privacidade</CheckText>
        </CheckSection>
        {!!errorNotCheck && <ErrorText>Aceite as politícas de privacidade antes de prosseguir!</ErrorText>}
      </DivContainer>
    </Container>
  );
}