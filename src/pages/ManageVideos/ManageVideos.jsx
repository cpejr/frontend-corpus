import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//import { LoadingOutlined } from "@ant-design/icons";
//import Button from "../../components/common/Button/Button";
import { FormSubmit } from "../../components";
import { Container, Title, Form, Section, BackgroundTitle } from "./Styles";
import { newValidationSchema } from "./utils"; // Consider renomear para algo mais genérico se necessário

import { TranslateText as translation } from "./translations"; // Mantendo o alias `translation` para consistência

export default function FormPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(newValidationSchema) }); // Consider renomear `newVideosValidationSchema` para algo mais apropriado

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

  // Função para tratar o envio do formulário
  const onSubmit = (data) => {
    console.log("Dados do Formulário", data);
  };

  return (
    <Container>
      <BackgroundTitle>
        <Title>{translation.title1}</Title>
      </BackgroundTitle>
      <Form onSubmit={handleSubmit((data) => console.log(data))}>
        <Section>
          <FormSubmit
            inputs={inputs}
            onSubmit={onSubmit}
            schema={newValidationSchema}
            loading={false}
            requestError={errors}
            register={register}
          />
        </Section>
      </Form>
      <Title>{translation.title2}</Title>
    </Container>
  );
}
