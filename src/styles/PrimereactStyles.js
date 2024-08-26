import { createGlobalStyle } from "styled-components";
import { colors } from "./stylesVariables";

export const PrimereactStyles = createGlobalStyle`.p-datepicker {
    background-color: ${colors.background.primary};
    color: white;
   
  }
  .p-calendar-w-btn    {
    background-color: ${colors.background.primary};
    color: white;
  }
  .p-datepicker-header{
    background-color:  ${colors.background.primary};

  }

  .p-datepicker-year{
    color: ${colors.font.primary};
  } 
  .p-datepicker-month{
    color: ${colors.font.primary};
  }
  
`;
