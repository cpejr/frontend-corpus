import styled from "styled-components";
import { breakpoints, colors, fonts } from "../../../../styles/stylesVariables";
import { Modal } from "antd";

export const ModalStyles = styled(Modal)`
  .ant-modal-content {
    background-color: #6b9080;
    align-items: center;
    justify-content: center;
    color: ${colors.font.primary};
    margin: 0;
    border-radius: 15px;
  }
  .ant-modal-footer {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  widht: 192px;
  height: 57px;
  background-color: #6b9080;
  border: 1px solid #f6fff8;
  border-radius: 5px;
  color: #f6fff8;
  text-transform: uppercase;
  font-family: ${fonts.Exo2};
  font-size: 40px;
  @media (max-width: ${breakpoints.tablet}) {
    widht: 134px;
    height: 40px;
    font-size: 30px;
  }
  @media (max-width: ${breakpoints.mobile}) {
    widht: 70%;
    height: 35px;
    font-size: 25px;
  }
`;

export const Title = styled.h1`
  color: #f6fff8;
  text-align: center;
  font-family: ${fonts.Exo2};
`;

export const Text = styled.h3`
  color: #f6fff8;
  text-align: center;
  font-family: ${fonts.Exo2};
`;