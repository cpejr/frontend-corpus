import { Title, Container, BackgroundTitle, Line } from "./Styles";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";

export default function ManageUser() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  // Table Handling

  const columns = [
    { field: "name", header: translations.textColumn1 },
    { field: "manage", header: translations.textColumn2 },
    { field: "delete", header: translations.textColumn3 },
  ];

  return (
    <Container>
      <BackgroundTitle>
        <Title>{translations.title1}</Title>
        <Line />
      </BackgroundTitle>
    </Container>
  );
}
