export function TranslateText({ globalLanguage }) {
  let title1;
  let placeholder;
  let calendar;
  let select;
  let button1;
  let button2;
  let message;

  if (globalLanguage === "PT") {
    title1 = "vídeos";
    placeholder = "Pesquisar";
    calendar = "Escolha a data";
    select = "Escolha uma categoria";
    button1 = "Filtrar";
    button2 = "Limpar Filtros";
    message = "Nenhum vídeo foi encontrado";
  }
  if (globalLanguage === "EN") {
    title1 = "videos";
    placeholder = "Search";
    calendar = "Choose the date";
    select = "Choose a category";
    button1 = "Filter";
    button2 = "Clear Filters";
    message = "no video found";
  }
  if (globalLanguage === "ES") {
    title1 = "videos";
    placeholder = "Buscar";
    calendar = "Escoge la fecha";
    select = "Elige una categoría";
    button1 = "Filtro";
    button2 = "No se ha encontrado ningún vídeo";
  }
  return {
    title1,
    placeholder,
    calendar,
    select,
    button1,
    button2,
    message,
  };
}
