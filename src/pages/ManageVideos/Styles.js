import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { MultiSelect } from "primereact/multiselect";
import { image } from "../../assets/index";
import { Calendar as PrimeCalendar } from "primereact/calendar";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: auto;

  gap: 3rem;

  @media (max-width: 700px) {
    height: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
  }
`;

export const Title = styled.div`
  color: ${colors.font.title};
  font-size: 36px;
  margin-left: 3%;
  text-decoration: underline ${colors.underline};
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 3px;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 34px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 28px;
    margin-left: 8%;
  }
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  height: 100%;

  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 0%;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  height: 100%;
  gap: 2rem;
  margin-bottom: 30px;
  ::placeholder {
    color: black;
    font-weight: 400;
  }

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
`;
export const Calendar = styled(PrimeCalendar)`
  display: flex;
  width: 215px;
  justify-content: center;
  .p-inputtext {
    background-color: ${colors.background.primary};
    border: solid 1px ${colors.font.primary};
    cursor: pointer;
    color: ${colors.font.primary} !important;
    &:hover {
      border: 1px solid ${colors.accent.primary};
      color: ${colors.font.secondary};
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;
export const MultipleSelect = styled(MultiSelect)`
  background-color: ${colors.background.primary};
  color: ${colors.font.primary};
  width: 215px;

  .p-placeholder {
    color: ${colors.font.primary};
  }
  .p-multiselect-label {
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
  &:hover {
    border-color: #f19709;
  }
`;
export const Selects = styled.div`
  display: flex;
  color: blue;
  flex-direction: row;
  width: 100%;
  gap: 3rem;
  justify-content: center;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
  margin: 20px auto;
`;
export const BackgroundTitle = styled.div`
  background-image: url(${image});
  height: 150px;
  padding-top: 4rem;
`;
