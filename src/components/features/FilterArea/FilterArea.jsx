import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import { LoadingOutlined } from "@ant-design/icons";
import {
  FlagSelector,
  StyledForm,
  FlagSelectorSection,
  PickDateSection,
  PickTimeSection,
  SelectLanguageSection,
  TotalParticipantsSelectSection,
  Calendar,
} from "./styles";
import ReactLanguageSelect from "react-languages-select";

export default function FilterArea({ onSubmit, loading, buttonText }) {
  const { handleSubmit, reset } = useForm({
    //resolver: zodResolver(schema),
  });

  const [selectTotalParticipants, setSelectTotalParticipants] = useState("");
  const [selectCountry, setSelectCountry] = useState("");
  const [selectLanguage, setSelectLanguage] = useState("");
  const [pickTime, setPickTime] = useState(null);
  const [dates, setDates] = useState(null);

  function submitHandler(data) {
    onSubmit(data);
    reset;
    console.log(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
      <TotalParticipantsSelectSection>
        <label>Número de participantes:</label>
        <select
          value={selectTotalParticipants}
          onChange={(e) => setSelectTotalParticipants(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="categoria1">Categoria 1</option>
          <option value="categoria2">Categoria 2</option>
        </select>
      </TotalParticipantsSelectSection>
      <FlagSelectorSection>
        <FlagSelector
          selectCountry={selectCountry}
          onSelect={(code) => setSelectCountry(code)}
          countries={["US", "GB", "FR", "DE", "IT"]}
          customLabels={{
            US: "EN-US",
            GB: "EN-GB",
            FR: "FR",
            DE: "DE",
            IT: "IT",
          }}
          placeholder="Select Language"
        />
      </FlagSelectorSection>
      <SelectLanguageSection>
        <label>Idioma:</label>
        <ReactLanguageSelect
          value={selectLanguage}
          onChange={(e) => setSelectLanguage(e.target.value)}
          languages={["en", "fr", "de", "it", "es"]}
          customLabels={{ en: "EN-US", fr: "FR", de: "DE", it: "IT" }}
          placeholder="Select Language"
          showSelectedLabel={false}
        />
      </SelectLanguageSection>

      <PickTimeSection>
        <label>Horário:</label>
        <DatePicker
          selected={pickTime}
          onChange={(time) => setPickTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeFormat="HH:mm"
          dateFormat="HH:mm"
          placeholderText="Selecione o horário"
        />
      </PickTimeSection>
      <PickDateSection>
        <Calendar
          value={dates}
          onChange={(e) => setDates(e.value)}
          selectionMode="range"
          readOnlyInput
          hideOnRangeSelection
          showButtonBar
          dateFormat="dd/mm/yy"
          // view="year"
        />{" "}
      </PickDateSection>
      <button type="submit">
        {" "}
        {loading ? <LoadingOutlined /> : buttonText}Aplicar Filtros
      </button>
    </StyledForm>
  );
}

FilterArea.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  loading: PropTypes.bool,
};
