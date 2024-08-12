import styled from "styled-components";
import { colors, breakpoints } from "../../../../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  height: 10rem;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  background-color: ${colors.background.header};
`;

export const LogoFooter = styled.img`
  width: 200px;
  display: flex;
  cursor: pointer;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  gap: 10px;

  p {
    font-size: 2rem;
    margin: 0;
    @media (max-width: ${breakpoints.mobile}) {
      display: none;
      gap: 2px;
    }
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  @media (max-width: ${breakpoints.mobile}) {
    gap: 10px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
