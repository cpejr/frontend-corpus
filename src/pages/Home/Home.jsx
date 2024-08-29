import { Container, Overlay, Section, Title, Column } from "./Styles";

import { Button1 } from "./Styles";

import Sponsors from "./Sponsors";
import { useNavigate } from "react-router-dom";

import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";
import { useLogout } from "../../hooks/query/session";
import { toast } from "react-toastify";

export default function Home() {
  const navigate = useNavigate();

  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  const { mutate: logout } = useLogout({
    onSuccess: () => {
      toast.success("Logout realizado com sucesso!");
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  const execLogout = () => {
    logout();
  };

  return (
    <Container>
      <button onClick={execLogout}>LOGOUT</button>
      <Overlay></Overlay>
      <Sponsors />
      <Section>
        <Column>
          <Title>{translation.title1}</Title>
          <p>{translation.paragraph1}</p>

          <Button1 onClick={() => navigate("/")}>
            {translation.textButton1}
          </Button1>
        </Column>
      </Section>

      <Section>
        <Column>
          <Title>{translation.title2}</Title>
          <p>{translation.paragraph2}</p>

          <Button1 onClick={() => navigate("/")}>
            {translation.textButton2}
          </Button1>
        </Column>
      </Section>

      <Section>
        <Column>
          <Title>{translation.title3}</Title>
          <p>{translation.paragraph3}</p>

          <Button1 onClick={() => navigate("/")}>
            {translation.textButton3}
          </Button1>
        </Column>
      </Section>
    </Container>
  );
}
