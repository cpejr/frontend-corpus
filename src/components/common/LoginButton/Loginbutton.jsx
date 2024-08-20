import { Button, Container, Icon } from "./Style";
import { useGlobalLanguage } from "../../../stores/globalLanguage";
import { TranslateText } from "./translations";

export default function LoginButton({ logged, onClick }) {
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  return (
    <Button onClick={onClick}>
      {logged ? translation.login2 : translation.login1}
      <Icon />
    </Button>
  );
}
