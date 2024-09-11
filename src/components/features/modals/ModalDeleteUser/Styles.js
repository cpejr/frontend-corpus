import styled from "styled-components";
import { colors } from "../../../../styles/stylesVariables";
import { Modal } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.modals.background};
  width: 100%;
  height: 100%;
`;

export const Button = styled.button`
  width: 20%;
  height: 5%;
`;

export const ModalStyles = styled(Modal)`
  .ant-modal-content {
    background-color: ${colors.modals.background};
    padding: 1rem;
    align-items: center;
    justify-content: center;
    color: ${colors.font.primary};
    padding: 6;
    margin: 0;
    border-radius: none;
  }
`;
