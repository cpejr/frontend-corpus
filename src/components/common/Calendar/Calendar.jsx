import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { registerLocale } from "react-datepicker";
import { ptBR } from "date-fns/locale/pt-BR";
import { Container, Label, StyledCalendar } from "./Styles";

export default function CalendarFunction({
  inputKey,
  label,

  control,
  setValue,
  error,
  color,
  placeholder,
  isSubmitSuccessful,
  defaultValue,
}) {
  const [date, setDate] = useState(defaultValue || null);

  const handleChange = (dateChange) => {
    setValue("data_nascimento", dateChange.toLocaleDateString("pt-BR"), {
      shouldDirty: true,
    });

    setDate(dateChange);
  };
  useEffect(() => {
    if (isSubmitSuccessful) setDate(null);
  }, [isSubmitSuccessful]);

  return (
    <Container>
      <Label>{label}</Label>
      <Controller
        name={inputKey}
        control={control}
        defaultValue={date}
        render={() => (
          <StyledCalendar
            error={error}
            selected={date}
            placeholderText={placeholder}
            onChange={handleChange}
            dateFormat="dd/MM/yyyy"
            color={color}
            value={date}
          />
        )}
      />
    </Container>
  );
}
CalendarFunction.defaultProps = {
  width: "100%",
};
CalendarFunction.propTypes = {
  inputKey: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  error: PropTypes.bool,
  icon: PropTypes.elementType,
  label: PropTypes.string,
  control: PropTypes.func,
  setValue: PropTypes.func,
  isSubmitSuccessful: PropTypes.bool,
  defaultValue: PropTypes.date,
  color: PropTypes.string,
};
