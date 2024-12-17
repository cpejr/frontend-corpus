import styled from "styled-components";
import { colors, breakpoints } from "../../../styles/stylesVariables";
import ReactFlagsSelect from "react-flags-select";
import { Calendar as PrimeCalendar } from "primereact/calendar";

export const FlagSelector = styled(ReactFlagsSelect)`
  background-color: ${colors.background};
  color: black;
  width: 50%;
  align-items: center;
`;
export const Section = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;
export const StyledForm = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`;
export const FlagSelectorSection = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const TotalParticipantsSelectSection = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const PickTimeSection = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const PickDateSection = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const SelectLanguageSection = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const Calendar = styled(PrimeCalendar)`
  width: ${(props) => (props.width ? props.width : "95%")};
  align-self: center;
  display: flex;
  justify-content: center;
  border-radius: 25px;

  @media (max-width: ${breakpoints.smallMobile}) {
    margin-top: 0px;
  }

  .p-inputtext {
    width: 100%;
    height: 3rem;
    background-color: ${colors.background.primary};
    color: ${colors.font.primary};
    border: solid 1px ${colors.font.title};
    padding-left: 10px;
    font-size: 1.2rem;
    margin-bottom: 2rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${colors.font.primary};
    }

    &:hover {
      border-color: ${colors.accent.primary};
    }
  }

  .p-datepicker {
    border: 2px solid black;
  }
`;
