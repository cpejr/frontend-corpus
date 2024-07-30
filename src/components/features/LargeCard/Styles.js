import styled from "styled-components";
import { Card } from "antd";
import { breakpoints, colors } from "../../../styles/stylesVariables";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export const StyledCard = styled(Card)`
  position: relative; /* Ensure positioning context for absolute positioning */
  display: block;
  width: 50%;
  margin-top: 1rem;
  border-radius: 24px;
  background-color: ${colors.background.white};
  margin-bottom: 1rem;
  min-height: 30rem;
  @media (max-width: ${breakpoints.tablet}) {
    width: 70%;
  }
  @media (max-width: ${breakpoints.smallTablet}) {
    width: 80%;
  }
`;

export const Title = styled.div`
  display: flex;
  word-break: break-all;
  flex-direction: row;
  width: 100%;
  align-items: center;
  font-size: 30px;
  color: ${colors.font.secondary};
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 24px;
  }
`;

export const ShortDescription = styled.div`
  font-size: 20px;
  color: ${colors.font.secondary};
  word-break: break-word;
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 18px;
  }
`;

export const LongDescription = styled.div`
  font-size: 17px;
  color: ${colors.font.secondary};
  word-break: break-word;
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 15px;
  }
`;
export const Data = styled.div`
  font-size: 17px;
  color: ${colors.font.secondary};
  word-break: break-word;
  @media (max-width: ${breakpoints.miniTablet}) {
    font-size: 15px;
  }
`;

export const FavoriteIcon = styled(FaRegBookmark)`
  color: ${colors.font.secondary};
  margin-left: 5px;
  font-size: 2rem;
  cursor: pointer;
`;
export const FavoriteFilledIcon = styled(FaBookmark)`
  color: ${colors.font.secondary};
  margin-left: 5px;
  font-size: 2rem;
  cursor: pointer;
`;

export const CarouselStyles = styled.div`
  .carousel .slide {
    display: flex;
    justify-content: center;
  }
  .carousel.carousel-slider .control-arrow {
    background: ${colors.background.primary};
  }
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0;
  width: 90%;
  margin: 0 auto;
`;
export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: first baseline;
  height: auto;
  gap: 1rem;
  flex-wrap: wrap;
`;
export const Tag = styled.div`
  display: flex;
  padding: 5px 0.8rem;
  height: 1.5rem;
  border: 1px solid black;
  color: black;
  font-size: 14px;
  border-radius: 20px;
  align-items: center;
  text-align: center;
  justify-content: center;
  @media (max-width: ${breakpoints.miniTablet}) {
    height: 32px;
    font-size: 14px;
  }
  &:hover {
    border: 1px solid ${colors.accent.primary};
    color: ${colors.font.secondary};
  }
`;
