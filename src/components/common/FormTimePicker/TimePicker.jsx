import PropTypes from "prop-types";
import { Container, StyledTimePicker } from "./Styles";

export default function TimePicker({ label, setValue }) {

    return (
        <Container>
            <StyledTimePicker
                onChange={(timeString) => {setValue(label, timeString)}}
                format="HH:mm:ss"
            />
        </Container>
    );
}

TimePicker.propTypes = {
    label: PropTypes.string,
    setValue: PropTypes.func,
  };