import styled from "styled-components";
import { Modal } from "antd";
import { colors } from "../../../../styles/stylesVariables";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.modals.background};
  width: 100%;
  height: 100%;
`;

export const Message = styled.h1`
  font-size: 2.1rem;
  text-align: center;
  margin: 1.4rem;
  color: ${colors.font.secondary};
  @media (max-width: 375px) {
    font-size: 1.5rem;
    margin: 1rem;
  }
`;

export const ModalStyle = styled(Modal)`
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
