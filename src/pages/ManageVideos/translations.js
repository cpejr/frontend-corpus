export function TranslateText({ globalLanguage }) {
  let title1;
  let title2;
  let button1;
  let placeholder1;
  let placeholder2;
  let placeholder3;
  let placeholder4;
  let placeholder5;
  let placeholder6;
  let placeholder7;
  let placeholder8;
  let table1;
  let table2;
  let table3;

  if (globalLanguage === "PT") {
    table1 = "coluna";
    table2 = "coluna";
    table3 = "coluna";
    title1 = "TITULO";
    placeholder1 = "texto";
    placeholder2 = "texto";
    placeholder3 = "texto";
    placeholder4 = "texto";
    placeholder5 = "texto";
    placeholder6 = "texto";
    placeholder7 = "texto";
    placeholder8 = "texto";
    button1 = "botão";
    title2 = "TITULO";
  }
  if (globalLanguage === "EN") {
    table1 = "column";
    table2 = "column";
    table3 = "column";
    title1 = "TITLE";
    placeholder1 = "text";
    placeholder2 = "text";
    placeholder3 = "text";
    placeholder4 = "text";
    placeholder5 = "text";
    placeholder6 = "text";
    placeholder7 = "text";
    placeholder8 = "text";
    button1 = "button";
    title2 = "TITLE";
  }
  if (globalLanguage === "ES") {
    table1 = "columna";
    table2 = "columna";
    table3 = "columna";
    title1 = "TITULO";
    placeholder1 = "mensaje de texto";
    placeholder2 = "mensaje de texto";
    placeholder3 = "mensaje de texto";
    placeholder4 = "mensaje de texto";
    placeholder5 = "mensaje de texto";
    placeholder6 = "mensaje de texto";
    placeholder7 = "mensaje de texto";
    placeholder8 = "mensaje de texto";
    button1 = "button";
    title2 = "TITULO";
  }
  return {
    title1,
    title2,
    placeholder1,
    placeholder2,
    placeholder3,
    placeholder4,
    placeholder5,
    placeholder6,
    placeholder7,
    placeholder8,
    table1,
    table2,
    table3,
    button1,
  };
}
