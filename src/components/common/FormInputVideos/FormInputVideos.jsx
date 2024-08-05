import PropTypes from "prop-types";
import {
  Container,
  Label,
  IconContainer,
  StyledInput,
  ErrorMessage,
} from "./Styles";

export default function FormInputVideos({
  name,
  label,
  placeholder,
  errors,
  register,
  defaultValue,
  icon: Icon,
  readOnly,
  color,
  ...props
}) {
  const errorMessage = errors?.[name]?.message;
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <IconContainer>
        {Icon && <Icon />}
        <StyledInput
          id={name}
          {...register(name)}
          placeholder={placeholder}
          defaultValue={defaultValue}
          color={color}
          {...props}
          readOnly={readOnly}
          error={!!errorMessage}
        />
      </IconContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
FormInputVideos.defaultProps = { color: "white" };
FormInputVideos.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  icon: PropTypes.elementType,
  errors: PropTypes.object.isRequired,
  defaultValue: PropTypes.string,
  readOnly: PropTypes.string,
  placeholdercolor: PropTypes.string,
  color: PropTypes.string,
};
