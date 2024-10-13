import { StyledCard, OrangeButton, Line, Group, ButtonDiv } from "./Styles";
import PropTypes from "prop-types";
export default function Card({ data, textButton, event }) {
  return (
    <StyledCard>
      <Group>
        <Line>{data.name}</Line>
      </Group>

      <ButtonDiv>
        <OrangeButton onClick={event}>{textButton}</OrangeButton>
      </ButtonDiv>
    </StyledCard>
  );
}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  textButton: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};
