import { TimePicker } from "antd";
import styled from "styled-components";

export const Container = styled.div``;

export const StyledTimePicker = styled(TimePicker)`
  width: 100%;
  border-radius: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  transition: all 0.3s ease;
  background-color: #FFFFFF;
  transition: 1s ease transform;

  &:hover, &:focus, &:active {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    background-color: #FFFFFF;
    transform: scale(1.1);
  }

  .ant-picker-content{
    background-color: red;
  }
  
  .ant-picker-input > input {
    font-size: 16px;
    color: #333;
  }

  .ant-picker-suffix {
    color: #007bff; 
  }
  .ant-picker-time-panel-cell{
    color: green;  
    background-color: red;
  }

  .ant-picker-panel-container {
    .ant-picker-time-panel-column > li.ant-picker-time-panel-cell-selected {
      background-color: red; 
      color: white;
    }

    .ant-picker-time-panel-column > li.ant-picker-time-panel-cell:hover {
      background-color: red; 
      color: green;
    }
  }
`;