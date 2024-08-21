import { Checkbox, Container, LoginSection, RegisterSection, Title } from "./Styles";

export default function RegisterPage() {
  return (
    <Container>
        <LoginSection>
            <Title>Já possui cadastro? Se sim, faça seu login:</Title>
        </LoginSection>
        <RegisterSection>
            <Title>Se não, faça ele agora:</Title>
            <Checkbox type="checkbox"></Checkbox>
        </RegisterSection>
    </Container>
  );
}