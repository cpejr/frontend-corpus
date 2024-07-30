export function TranslateText({ globalLanguage }) {
  let headerText1;
  let headerText2;
  let headerText3;
  let headerText4;
  let headerText5;
  let headerAdmText1;
  let headerAdmText2;
  let headerAdmText3;

  if (globalLanguage === "PT") {
    headerText1 = "Sobre nós";
    headerText2 = "Gerenciar Vídeos";
    headerText3 = "texto";
    headerText4 = "texto";
    headerText5 = "texto";
    headerAdmText1 = "texto";
    headerAdmText2 = "texto";
    headerAdmText3 = "texto";
  }
  if (globalLanguage === "EN") {
    headerText1 = "About Us";
    headerText2 = "Manage videos";
    headerText3 = "text";
    headerText4 = "text";
    headerText5 = "text";
    headerAdmText1 = "text";
    headerAdmText2 = "text";
    headerAdmText3 = "text";
  }
  if (globalLanguage === "ES") {
    headerText1 = "Sobre nosotros";
    headerText2 = "Administrar Videos";
    headerText3 = "texto";
    headerText4 = "texto";
    headerText5 = "texto";
    headerAdmText1 = "texto";
    headerAdmText2 = "texto";
    headerAdmText3 = "texto";
  }
  return {
    headerText1,
    headerText2,
    headerText3,
    headerText4,
    headerText5,
    headerAdmText1,
    headerAdmText2,
    headerAdmText3,
  };
}
