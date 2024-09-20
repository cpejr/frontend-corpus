export function TranslateText({ globalLanguage }) {
  let headerText1;
  let headerText2;
  let headerText3;
  let headerText4;
  let headerText5;
  let headerAdmText1;
  let headerAdmText2;
  let headerAdmText3;
  let home;

  if (globalLanguage === "PT") {
    headerText1 = "Sobre nós";
    headerText2 = "Gerenciar Vídeos";
    headerText3 = "Vídeos";
    headerText4 = "Políticas de privacidade";
    headerText5 = "Gerenciar Usuarios";
    headerAdmText1 = "texto";
    headerAdmText2 = "texto";
    headerAdmText3 = "texto";
    home = "Home";
  }
  if (globalLanguage === "EN") {
    headerText1 = "About Us";
    headerText2 = "Manage videos";
    headerText3 = "Videos";
    headerText4 = "Privacy policies";
    headerText5 = "Manage users";
    headerAdmText1 = "text";
    headerAdmText2 = "text";
    headerAdmText3 = "text";
    home = "Home";
  }
  if (globalLanguage === "ES") {
    headerText1 = "Sobre nosotros";
    headerText2 = "Administrar Vídeos";
    headerText3 = "Vídeos";
    headerText4 = "Políticas de privacidad";
    headerText5 = "Administrar Usuarios";
    headerAdmText1 = "texto";
    headerAdmText2 = "texto";
    headerAdmText3 = "texto";
    home = "Hogar";
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
    home,
  };
}
