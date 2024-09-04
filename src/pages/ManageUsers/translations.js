export function TranslateText({ globalLanguage }) {
  let textColumn1;
  let textColumn2;
  let textColumn3;
  let title1;

  if (globalLanguage === "PT") {
    textColumn1 = "Nome";
    textColumn2 = "Gerenciar";
    textColumn3 = "Apagar";
    title1 = "gerenciar usuários";
  }
  if (globalLanguage === "EN") {
    textColumn1 = "Name";
    textColumn2 = "Manage";
    textColumn3 = "Delete";
    title1 = "manage users";
  }
  if (globalLanguage === "ES") {
    textColumn1 = "Nombre";
    textColumn2 = "Administrar";
    textColumn3 = "Apagar";
    title1 = "administrar usuarios";
  }
  return {
    textColumn1,
    textColumn2,
    textColumn3,
    title1,
  };
}
