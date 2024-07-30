import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { Checkbox } from "primereact/checkbox";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "antd";
import { image } from "../../assets/index";

import { Calendar as PrimeCalendar } from "primereact/calendar";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

export const Title = styled.div`
  color: #eedac5;
  font-size: 30px;
  margin-left: 5%;
  width: 120px;
  border-bottom: 2px solid #eedac5;
  @media (max-width: ${breakpoints.tablet}) {
    font-size: 27px;
    width: 110px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 25px;
    width: 100px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
    width: 95px;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    font-size: 22px;
    width: 90px;
  }
`;

export const DivLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Characteristics = styled.div`
  display: flex;
  flex-direction: column;
  > label {
    align-items: center;
    display: flex;
    gap: 0.5rem;
    padding-top: 0.3rem;
    color: #eedac5;
  }
`;

export const VerticalLine = styled.div`
  border-left: 2px solid white;
  height: 10rem;
`;

export const FilterTitle = styled.div`
  display: flex;
  color: ${colors.accent};
  padding-bottom: 1rem;
`;

export const StyledCheckbox = styled(Checkbox)`
  width: 20px;
  height: 20px;
  border: 2px solid ${colors.darkwhite};
  border-radius: 5px;
  justify-content: center;
`;
export const Line = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
`;
export const DivSelect = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  width: 15%;
  gap: 30px;
  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    width: 60%;
  }
`;

export const Calendar = styled(PrimeCalendar)`
  display: flex;
  justify-content: center;

  .p-inputtext {
    background-color: ${colors.background.primary};
    color: ${colors.font.primary};
    border: solid 1px ${colors.font.primary};
    width: 225px;
    &:hover {
      border-color: ${colors.accent.hover};
    }
    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
    @media (max-width: ${breakpoints.smallTablet}) {
      width: 225px;
    }
  }
  ::placeholder {
    color: ${colors.font.primary};
  }
`;

export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
  margin: 20px auto;
`;
export const MultipleSelect = styled(MultiSelect)`
  background-color: ${colors.background.primary};
  &:hover {
    border-color: ${colors.accent.hover};
  }

  &:focus,
  &:active,
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }

  &:focus-within {
    border-color: ${colors.accent.hover};
    box-shadow: 0 0 5px rgba(33, 150, 243, 0.5);
    .p-placeholder {
      color: ${colors.accent.hover};
    }
  }

  .p-placeholder {
    color: ${colors.font.primary};
  }
  .p-multiselect-label {
    width: 215px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 225px;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    font-size: 12px;
  }
`;
export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  gap: 0.2rem;
  margin-top: 20px;
`;
export const Buttons = styled(Button)`
  border: 1px solid #d1d5db;
  width: 130px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: ${colors.black};
  transition: background-color 0.2s, color 0.2s, border-color 0.2s,
    box-shadow 0.2s;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 90%;
    width: 115px;
  }
`;

export const Filter = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-evenly;
`;
export const MemorialNotFound = styled.div`
  background-image: url(${image});
  background-size: cover;
  width: 500px;
  height: 500px;
  font-size: 2rem;
  text-align: center;
  margin-top: 35px;
  @media (max-width: ${breakpoints.smallMobile}) {
    width: 60%;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 70%;
  }
  @media (max-width: 520px) {
    width: 300px;
    height: 300px;
  }
`;
