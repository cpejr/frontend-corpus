export function TranslateText({ globalLanguage }) {
  let login1;
  let login2;

  if (globalLanguage === "PT") {
    login1 = "Entrar";
    login2 = "Sair";
  }
  if (globalLanguage === "EN") {
    login1 = "Login";
    login2 = "Logout";
  }
  if (globalLanguage === "ES") {
    login1 = "Ingresar";
    login2 = "Salir";
  }
  return {
    login1,
    login2,
  };
}
