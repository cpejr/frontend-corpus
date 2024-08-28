import { createGlobalStyle } from "styled-components";
import { colors } from "./stylesVariables";

export const PrimereactStyles = createGlobalStyle`.p-datepicker {
    background-color: ${colors.background.primary};
    color: white;
    .p-datepicker-calendar{
      color: black;
      background-color: white;
      border-radius: 0.8rem;
    }
  }
  .p-calendar-w-btn    {
    background-color: ${colors.background.primary};
    color: white;
  }
  .p-datepicker-header{
    background-color:  white;

  }

  .p-datepicker-year{
    color: black;
  } 
  .p-datepicker-month{
    color: black;
  }
  
`;
