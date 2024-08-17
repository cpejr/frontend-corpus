import { useNavigate } from "react-router-dom";
import { Hamburguer } from "../Header/Styles";
import useAuthStore from "../../../../stores/auth";
import { TranslateText } from "./translations";
import { useGlobalLanguage } from "../../../../stores/globalLanguage";
import { MenuOutlined } from "@ant-design/icons";

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
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const items = [
    getItem(
      "",
      "hamburger",
      <MenuOutlined style={{ fontSize: "25px", color: "white" }} />,
      [
        getItem(translations.home, "/"),
        getItem(translations.headerText1, "/sobre-nos"),
        getItem(translations.headerText4, "/politica-de-privacidade"),
        getItem(translations.headerText3, "/video"),
        getItem(translations.headerText2, "/manage-videos"),
        ...(isAdmin
          ? [
              getItem(translations.headerAdmText1, "/"),
              getItem(translations.headerAdmText2, "/"),
              getItem(translations.headerAdmText3, "/"),
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
      items={items}
      triggerSubMenuAction="click"
    ></Hamburguer>
  );
}
