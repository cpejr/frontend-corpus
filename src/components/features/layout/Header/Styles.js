import styled from "styled-components";
import { Menu, Modal } from "antd";
import { Menubar } from "primereact/menubar";
import { breakpoints, colors, fonts } from "../../../../styles/stylesVariables";
import { MenuOutlined } from "@ant-design/icons";

export const MenuHamburguer = styled(MenuOutlined)`
  .ant-menu-title-content {
    color: black;
  }
`;

export const Container = styled.div`
  height: 7rem;
  display: flex;
  background-color: ${colors.background.primary};
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;

  @media (max-width: ${breakpoints.smallTablet}) {
    padding: 0 1rem;
  }
`;

export const City = styled.img`
  width: 50px;
  display: flex;
  cursor: pointer;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 15px;
  padding-right: 0;
  border-left: 2px solid ${colors.font.primary};
  @media (max-width: ${breakpoints.smallTablet}) {
    border-left: 0;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  @media (max-width: ${breakpoints.smallTablet}) {
    display: none;
  }
`;

export const Hamburguer = styled(Menu)`
  width: 0rem;
  border-bottom: none;
  background-color: ${colors.background.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    width: 8rem;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 6rem;
  }
  @media (max-width: ${breakpoints.smallDevice}) {
    width: 4rem;
  }
`;

export const LoadingStyles = styled.div`
  display: "block";
  font-size: 24px;
`;

export const LoginSocial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: ${breakpoints.tablet}) {
    min-width: 0;
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
export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: ${colors.background.primary};
    padding: 1rem;
    align-items: center;
    justify-content: center;
    color: ${colors.font.primary};
    padding: 6;
    margin: 0;
    border-radius: none;
  }
`;
export const Header = styled(Menubar)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 1rem;
  width: 100%;

  .p-menubar-root-list {
    display: flex;
    gap: 1rem;
  }

  .p-menuitem {
    padding: 0.5rem 1rem;
    color: goldenrod;
    font-weight: 400;
    font-size: 1rem;
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
      color: white;
    }
    p {
      text-align: center;
      color: white;
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
  background-color: white;

  border-radius: 0.5rem;
  gap: 0.3rem;
  button {
    border: none;
    background-color: white;
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
