import styled from "styled-components";
import { colors } from "../../../styles/stylesVariables";
import { RiAccountCircleLine } from "react-icons/ri";

export const Container = styled.div``;
export const Button = styled.button`
  background-color: transparent;
  border-radius: 10px;
  border-style: none;
  border: 3px solid;
  border-color: ${colors.background.white};
  color: ${colors.font.secondary};
  font-weight: 500;
  font-size: 1rem;
  padding: 7px 15px;
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${colors.background.white};
    color: ${colors.background.header};
  }
`;
export const Icon = styled(RiAccountCircleLine)`
  font-size: 25px;
`;
