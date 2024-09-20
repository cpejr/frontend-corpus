export function TranslateText(globalLanguage) {
  let title;
  let text;
  let button;

  if (globalLanguage === "PT") {
    title = "Excluir Usuário";
    text = "Tem certeza que você deseja excluir esse usuário?";
    button = "Excluir";
  }
  if (globalLanguage === "EN") {
    title = "Delete User";
    text = "Are you sure you want to delete this user?";
    button = "Delete";
  }
  if (globalLanguage === "ES") {
    title = "Eliminar usuario";
    text = "¿Estás seguro de que deseas eliminar este usuario?";
    button = "Eliminar";
  }
  return {
    title,
    text,
    button,
  };
}
