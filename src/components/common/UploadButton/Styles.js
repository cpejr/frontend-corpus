import styled from "styled-components";
import { Button } from "antd";
import { colors, fonts } from "../../../styles/stylesVariables";

export const AddButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  padding: 0.7rem 3rem;
  border-radius: 10px;
  background-color: ${colors.background.secondary};
  color: ${colors.font.primary};
  border: 0.15rem solid transparent;
  font-family: ${fonts.Exo2};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.black};
    color: #f6fff8 !important;
  }

  &:focus {
    outline: none;
  }
`;