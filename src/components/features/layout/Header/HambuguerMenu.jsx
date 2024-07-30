import { useNavigate } from "react-router-dom";
import { Hamburguer, MenuHamburguer } from "../Header/Styles";
import useAuthStore from "../../../../stores/auth";
import { TranslateText } from "./translations";
import { useGlobalLanguage } from "../../../../stores/globalLanguage";

export default function HamburguerMenu() {
  const isAdmin = useAuthStore((state) => state?.auth?.user?.type);
  const navigate = useNavigate();
  function getItem(label, key, icon, children, type, style) {
    return {
      key,
      icon,
      children,
      label,
      type,
      style,
    };
  }
  const { globalLanguage, setGlobalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const menuItems = [
    getItem(
      "",
      "hamburger",
      <MenuHamburguer style={{ color: "orange", fontSize: "25px" }} />,
      [
        getItem(translations.headerText1, "/sobre-nos"),
        getItem(translations.headerText2, "/manage-videos"),
        getItem(translations.headerText3, "/"),
        getItem(translations.headerText4, "/"),
        getItem(translations.headerText5, "/"),
        ...(isAdmin
          ? [
              getItem("Gerenciar Usuários", "/"),
              getItem("Gerenciar Acervo", "/"),
              getItem("Gerenciar Eventos", "/"),
            ]
          : []),
      ]
    ),
  ];

  function onClick(key) {
    if (key && key !== "login" && key !== "/story") {
      navigate(key);
    }
  }
  return (
    <Hamburguer
      onClick={(e) => onClick(e.key)}
      mode="horizontal"
      items={menuItems}
      triggerSubMenuAction="click"
    ></Hamburguer>
  );
}
