import { useState } from "react";
import FormSubmit from "../../components/features/FormSubmit/FormSubmit";
import { Container, DivContainer, Text, Title } from "./Styles";
import { validationSchema } from "./utils";
import { useNavigate, useParams } from 'react-router-dom';
import { useRedefinePassword } from "../../hooks/query/user";
import { toast } from "react-toastify";

export default function RedefinePassword() {

    const { token } = useParams();
    const navigate = useNavigate();

    const [inputs] = useState([
        {
          type: "password",
          key: "newPassword",
          placeholder: "Nova Senha",
          label: "newPassword",
        },
        {
          type: "password",
          key: "confirmation",
          placeholder: "Confirmação da Nova Senha",
          label: "confirmation",
        },
    ]);

    const { mutate: redefinePassword, isPending } = useRedefinePassword({
      onSuccess: () => {
        toast.success("Senha alterada com sucesso!");
        navigate('/register');
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    });
  
    const onSubmit = (data) => {
      delete data.confirmation;
      const newData = { ...data, token: token };

      redefinePassword(newData);
    };

    return (
        <Container>
            <DivContainer>
                <Title>Recuperação de Senha</Title>
                <Text>Escolha uma nova senha</Text>
                <FormSubmit onSubmit={onSubmit} loading={isPending} schema={validationSchema} inputs={inputs} buttonText="Salvar"></FormSubmit>
            </DivContainer>
        </Container>
    );
}