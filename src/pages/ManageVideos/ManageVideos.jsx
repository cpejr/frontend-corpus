import { useState } from "react";
import { FormSubmit } from "../../components";
import { Container, Title, Section, BackgroundTitle } from "./Styles";
import { newValidationSchema } from "./utils";

import { TranslateText as translation } from "./translations";

export default function FormPage() {
  const [inputs] = useState([
    {
      type: "text",
      key: "name",
      placeholder: "Digite seu nome",
      label: "name",
    },
    {
      type: "text",
      key: "shortDescription",
      placeholder: "Descreva brevemente aqui",
      label: "shortDescription",
    },
    {
      type: "text",
      key: "longDescription",
      placeholder: "Descreva como quiser aqui",
      label: "longDescription",
    },
    {
      type: "text",
      key: "link",
      placeholder: "Cole aqui seu link",
      label: "link",
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
