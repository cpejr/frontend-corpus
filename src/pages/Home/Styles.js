import styled from "styled-components";
import { breakpoints, colors } from "../../styles/stylesVariables";
import { Button } from "../../components";
import { RiAccountCircleLine } from "react-icons/ri";

export const logoutButton = styled.button`
  background-color: transparent;
  border-radius: 10px;
  border-style: none;
  border: 3px solid;
  border-color: ${colors.background.white};
  color: ${colors.font.secondary};
  font-weight: 500;
  font-size: 1rem;
  padding: 7px 15px;
  gap: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${colors.background.white};
    color: ${colors.background.header};
  }
`;
export const Icon = styled(RiAccountCircleLine)`
  font-size: 25px;
`;

export const Container = styled.div`
  font-size: 1.2rem;
`;

export const Overlay = styled.div`
  background: linear-gradient(
    180deg,
    rgba(107, 144, 128, 1),
    rgba(1000, 1000, 1000, 0.4)
  );
  max-height: 70vh;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const ContainerLogo = styled.div`
  height: 70vh;
  display: flex;
  margin-left: 10%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageLogo = styled.img`
  max-width: 30%;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleLogo = styled.h1`
  max-width: 100%;
  font-size: 4vw;
  font-weight: normal;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.7);
`;

export const SubTitleLogo = styled.h3`
  font-size: 2vw;
  margin: 0px;
  font-weight: 100;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 50px;
  padding: 2rem 0;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0 auto;
  }
`;

export const Button1 = styled(Button)`
  width: 15rem;
  height: 4.5rem;
  padding: 5px;
  border-radius: 12px;
  background-color: ${colors.background.header};
  color: ${colors.font.primary};
  text-transform: capitalize;
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    width: 10rem;
    height: 3rem;
    font-size: 1.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  color: ${colors.font.title};
  border-bottom: 4px solid ${colors.font.title};
  margin: 0;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  text-align: center;
  align-items: center;
  max-width: 40%;

  p {
    font-size: 2rem;
    @media (max-width: ${breakpoints.mobile}) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 80%;
  }
`;

export const Image = styled.img`
  max-width: 50%;
  margin: 50px;
  border: solid 10px;
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const ImageMobile = styled.img`
  display: none;
  @media (max-width: ${breakpoints.mobile}) {
    display: block;
    margin: 20px;
    max-width: 80%;
    border: solid 10px;
  }
`;
