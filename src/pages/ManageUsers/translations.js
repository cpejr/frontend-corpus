export function TranslateText({ globalLanguage }) {
  let title1;
  let placeholderSearch;

  if (globalLanguage === "PT") {
    title1 = "gerenciar usuários";
    placeholderSearch = "Pesquisar usuário";
  }
  if (globalLanguage === "EN") {
    title1 = "manage users";
    placeholderSearch = "Search user";
  }
  if (globalLanguage === "ES") {
    title1 = "administrar usuarios";
    placeholderSearch = "Buscar usuario";
  }
  return {
    title1,
    placeholderSearch,
  };
}
