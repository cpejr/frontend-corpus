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

  @media (max-width: ${breakpoints.smallMobile}){
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h1`
  color: ${colors.black};
  text-align: center;
`;

export const Text = styled.h3`
  color: ${colors.black};
  text-align: center;
`;

export const ModalStyles = styled(Modal)`
  .ant-modal-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .ant-modal-content {
    max-height: 100vh;
    overflow-y: auto;
  }
`;