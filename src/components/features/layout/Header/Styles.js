import styled from "styled-components";
import { Menu } from "antd";
import { Menubar } from "primereact/menubar";
import { breakpoints, colors, fonts } from "../../../../styles/stylesVariables";

export const Hamburguer = styled(Menu)`
  display: none;
  border-bottom: none;
  background-color: ${colors.background.header};

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
  }
  .ant-menu-light.ant-menu-submenu-popup > .ant-menu {
    background-color: gold;
  }
  .ant-menu-light > .ant-menu .ant-menu-item-selected {
    background-color: gold;
  }

  li.ant-menu-item.ant-menu-item-only-child {
    color: gold;
  }
`;

export const Container = styled.div`
  height: 7rem;
  display: flex;
  background-color: ${colors.background.header};
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  @media (max-width: ${breakpoints.smallTablet}) {
    padding: 0 1rem;
  }
`;

export const LogoHeader = styled.img`
  width: 150px;
  display: flex;
  cursor: pointer;
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  height: 45px;
  border: 1px solid;
  border-radius: 10px;
  color: ${colors.accent.primary};
  background-color: ${colors.background.secondary};
  font-family: ${fonts.Cabin};
  font-weight: 400;
  word-wrap: break-word;
  font-size: 1rem;
  img {
    width: 20%;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 12rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 7rem;
    font-size: 0.8rem;
  }
`;
export const Header = styled(Menubar)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 1rem;
  width: 100%;

  .p-menuitem {
    color: ${colors.font.primary};
    padding: 10px;
  }

  .p-menuitem-text {
    text-decoration: none;
    font-size: 125%;
    color: ${colors.font.primary};

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 3px;
    }
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  font-weight: 700;
  align-self: center;
  :hover {
    cursor: pointer;
    text-decoration: underline;

    text-decoration-thickness: 0.2rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
    font-weight: 600;
    :hover {
      text-decoration: underline;
      text-decoration-color: white;
      text-decoration-thickness: 0.2rem;
    }
  }
  p {
    font-size: 1.5rem;
  }
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 4.2rem;
  @media (max-width: ${breakpoints.tablet}) {
    padding-left: 1.4rem;
    svg {
      color: ${colors.font.primary};
    }
    p {
      text-align: center;
      color: ${colors.font.primary};
    }
  }
`;
export const LanguageSelector = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 200;
  margin-top: 2rem;
  transition: height 1s ease-in-out;
  height: ${(props) => (props.collapse ? "auto" : "0rem")};
  overflow-y: hidden;

  font-weight: 700;
  background-color: ${colors.background.header};

  border-radius: 0.5rem;
  gap: 0.3rem;
  button {
    border: none;
    background-color: ${colors.background.header};
    width: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    font-weight: 700;
    :hover {
      cursor: pointer;
    }
    p {
      font-weight: 700;
      :hover {
        cursor: pointer;
        text-decoration: underline;

        text-decoration-thickness: 0.2rem;
      }
    }
  }
`;
