export function TranslateText({ globalLanguage }) {
  let title1;
  let placeholderSearch;
  let typeAdm;
  let typeInvited;
  let typeExt;

  if (globalLanguage === "PT") {
    title1 = "gerenciar usuários";
    placeholderSearch = "Pesquisar usuário";
    typeAdm = "Administrador";
    typeInvited = "Convidado";
    typeExt = "Externo";
  }
  if (globalLanguage === "EN") {
    title1 = "manage users";
    placeholderSearch = "Search user";
    typeAdm = "Admin";
    typeInvited = "Invited";
    typeExt = "External";
  }
  if (globalLanguage === "ES") {
    title1 = "administrar usuarios";
    placeholderSearch = "Buscar usuario";
    typeAdm = "Administrador";
    typeInvited = "Invitado";
    typeExt = "Externo";
  }
  return {
    title1,
    placeholderSearch,
    typeAdm,
    typeInvited,
    typeExt,
  };
}
