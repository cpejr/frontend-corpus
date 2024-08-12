import { Container, LogoFooter, SocialContainer, SocialIcon } from "./Styles";
import { logoFooter } from "../../../../assets";

import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { useGlobalLanguage } from "../../../../stores/globalLanguage";
import { TranslateText } from "./translations";

export default function Footer() {
  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  return (
    <Container>
      <LogoFooter src={logoFooter} onClick={() => navigate("/")}></LogoFooter>
      <SocialContainer>
        <p>{translation.footer1}</p>
        <SocialIcon>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram size={50} href="www.instagram.com" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookSquare size={50} />
          </a>
          <a href="http://wa.me/" target="_blank" rel="noreferrer">
            <FaWhatsapp size={50} />
          </a>
        </SocialIcon>
      </SocialContainer>
    </Container>
  );
}
