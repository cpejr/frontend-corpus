import PropTypes from "prop-types";
import { Container, Label, StyledInput, ErrorMessage } from "./Styles";

export default function FormSiriusInput({
  name,
  label,
  placeholder,
  errors,
  register,
  defaultValue,
  readOnly,
  ...props
}) {
  const errorMessage = errors?.[name]?.message;
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput
        id={name}
        {...register(name)}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...props}
        readOnly={readOnly}
        error={!!errorMessage}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

FormSiriusInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  defaultValue: PropTypes.string,
  readOnly: PropTypes.string,
};
