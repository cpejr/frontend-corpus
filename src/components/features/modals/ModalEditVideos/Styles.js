import styled from 'styled-components';
import { breakpoints, colors } from '../../../../styles/stylesVariables';
import { Modal } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 100%;
  max-width: 133rem;
  height: 100%;
`;

export const Message = styled.h1`
  font-size: 2.1rem;
  text-align: center;
`;

export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: #fefae0;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .ant-modal-content {
    max-height: 100vh;
    overflow-y: auto;
  }
`;