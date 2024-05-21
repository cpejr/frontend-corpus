import styled from "styled-components";
import { Upload as AntdUpload } from "antd";
import { colors } from "../../../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Upload = styled(AntdUpload)`
  width: 100%;
  .ant-upload.ant-upload-select {
    width: 100%;
  }
  .ant-upload-list-item-container {
    display: none;
  }

  cursor: ${(props) => (props.disabled ? "pointer" : "not-allowed")};
  cursor: pointer !important;
`;

export const AddArchive = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.color};
  font-size: 0.8rem;
`;

export const RemoveArchive = styled.div`
  width: 70%;
  margin: 0 auto;
  gap: 0.5rem;
  font-size: 0.8rem;
  display: ${(props) => props.hidden || "flex"};
  align-items: center;
  color: ${(props) => props.color};
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  font-size: 1.3rem;
  margin: 0px;
  color: ${(props) => (props.color === "white" ? colors.white : colors.black)};
  font-weight: 400;
  text-align: center;
  margin-top: 10px;
`;
