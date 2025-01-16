import {
  StyledCard,
  OrangeButton,
  Line,
  Image,
  Group,
  ButtonDiv,
  DescriptionLine,
  CodeLine,
  FilterParams,
} from "./Styles";
import PropTypes from "prop-types";
export default function Card({
  textButton,
  thumbnail,
  event,
  title,
  ShortDescription,
  code,
  totalParticipants,
  country,
  language,
  duration,
  date,
}) {
  return (
    <StyledCard>
      <Image>
        <img src={thumbnail} />
      </Image>
      <Group>
        <Line>{title}</Line>
      </Group>
      <Group>
        <DescriptionLine>{ShortDescription}</DescriptionLine>
      </Group>
      <Group>
        <CodeLine>{code}</CodeLine>
      </Group>
      <FilterParams>
        {totalParticipants}
        {country}
        {language}
        {duration}
        {date}
      </FilterParams>

      <ButtonDiv>
        <OrangeButton onClick={event}>{textButton}</OrangeButton>
      </ButtonDiv>
    </StyledCard>
  );
}

Card.propTypes = {
  totalParticipants: PropTypes.string,
  country: PropTypes.string,
  language: PropTypes.string,
  duration: PropTypes.string,
  date: PropTypes.sring,
  textButton: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
  thumbnail: PropTypes.string.isRequired,
  ShortDescription: PropTypes.string.isRequired,
};
