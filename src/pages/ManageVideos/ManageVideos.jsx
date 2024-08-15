import { useState } from "react";
//import { LoadingOutlined } from "@ant-design/icons";
//import Button from "../../components/common/Button/Button";
import { FormSubmit } from "../../components";
import { Container, Title, Section, BackgroundTitle } from "./Styles";
import { newValidationSchema } from "./utils";

import { TranslateText as translation } from "./translations"; // Mantendo o alias `translation` para consistência

export default function FormPage() {
  // Define os campos do formulário
  const [inputs] = useState([
    {
      type: "text",
      key: "nome",
      placeholder: "Digite seu nome",
      label: "Nome",
    },
    {
      type: "text",
      key: "descricaoCurta",
      placeholder: "Descreva brevemente aqui",
      label: "Descrição curta",
    },
    {
      type: "text",
      key: "descricaoLonga",
      placeholder: "Descreva como quiser aqui",
      label: "Descrição longa",
    },
    {
      type: "text",
      key: "link",
      placeholder: "Cole aqui seu link",
      label: "Link",
    },
    {
      type: "select",
      key: "formacao",
      placeholder: "Selecione sua formação",
      label: "Formação",
      options: [
        { value: "medico", name: "Médico" },
        { value: "estudante", name: "Estudante" },
      ],
    },
    {
      type: "select",
      key: "area",
      placeholder: "Selecione sua área",
      label: "Área de atuação",
      options: [
        { value: "nenhuma", name: "Nenhuma" },
        { value: "medicina", name: "Medicina" },
      ],
    },
    {
      type: "date",
      key: "dataNascimento",
      placeholder: "Selecione sua data de nascimento",
      label: "Data de nascimento",
    },
  ]);

  function handleSubmit(data) {
    console.log("esse comentário é um teste", data);
  }

  return (
    <Container>
      <BackgroundTitle>
        <Title>{translation.title1}</Title>
      </BackgroundTitle>

      <Section>
        <FormSubmit
          inputs={inputs}
          onSubmit={handleSubmit}
          schema={newValidationSchema}
          loading={false}
        />
      </Section>

      <Title>{translation.title2}</Title>
    </Container>
  );
}
