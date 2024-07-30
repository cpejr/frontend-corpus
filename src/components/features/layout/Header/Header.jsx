import {
  Container,
  City,
  Header,
  Select,
  Selected,
  LanguageSelector,
} from "./Styles";
import { image } from "../../../../assets";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import useAuthStore from "../../../../stores/auth";
import HamburguerMenu from "./HambuguerMenu";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalLanguage } from "../../../../stores/globalLanguage";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { flagEN, flagES, flagPT } from "../../../../assets";
import { TranslateText } from "./translations";

export default function Head() {
  const [collapse, setCollapse] = useState(false);

  const { globalLanguage, setGlobalLanguage } = useGlobalLanguage();
  const availableLanguages = [
    { code: "PT", flag: flagPT },
    { code: "EN", flag: flagEN },
    { code: "ES", flag: flagES },
  ];

  const isAdmin = useAuthStore((state) => state?.auth?.user?.type);
  const navigate = useNavigate();

  const translations = TranslateText({ globalLanguage });

  const items = [
    {
      label: translations.headerText1,
      url: "/sobre-nos",
    },
    {
      label: translations.headerText2,
      url: "/manage-videos",
    },
    {
      label: translations.headerText3,
      url: "/video",
    },
    {
      label: translations.headerText4,
      url: "/",
    },
    {
      label: translations.headerText5,
      url: "/",
    },
    ...(isAdmin
      ? [
          {
            label: "Administrador",
            items: [
              {
                label: translations.headerAdmText1,
                url: "/",
              },
              {
                label: translations.headerAdmText2,
                url: "/",
              },
              {
                label: translations.headerAdmText3,
                url: "/",
              },
            ],
          },
        ]
      : []),
  ];

  return (
    <Container>
      <City src={image} onClick={() => navigate("/")}></City>
      <Header model={items} />
      <HamburguerMenu />
      <Select>
        <Selected onClick={() => setCollapse((prev) => !prev)}>
          <img
            style={{ height: "40px" }}
            src={
              availableLanguages.find((lang) => lang.code === globalLanguage)
                ?.flag
            }
            alt={globalLanguage}
          />
          <IoIosArrowDown />
        </Selected>
        <LanguageSelector collapse={+collapse}>
          {availableLanguages.map((lang) => (
            <button
              type="button"
              key={lang.code}
              onClick={() => {
                setGlobalLanguage(lang.code);
                setCollapse((prev) => !prev);
              }}
              style={{ display: collapse ? "flex" : "none" }}
            >
              <img
                src={lang.flag}
                alt={lang.code}
                style={{ height: "40px", marginRight: "8px" }}
              />
            </button>
          ))}
        </LanguageSelector>
      </Select>
    </Container>
  );
}
