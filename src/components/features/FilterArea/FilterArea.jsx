import { useState } from "react";
import { useForm } from "react-hook-form";
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
  StyledSelect,
} from "./styles";

export default function FilterArea({ onSubmit, loading, buttonText }) {
  const { handleSubmit, reset } = useForm({
    //resolver: zodResolver(schema),
  });

  const [selectTotalParticipants, setSelectTotalParticipants] = useState("");
  const [selectCountry, setSelectCountry] = useState("");
  const [selectLanguage, setSelectLanguage] = useState("");
  //const [pickTime, setPickTime] = useState("10:00");
  const [dates, setDates] = useState(null);

  function submitHandler(data) {
    onSubmit(data);
    reset;
    console.log(data);
  }
  //Array de opções para o select de Total de Participantes
  const options = [
    { value: { min: 1, max: 5 }, label: "1 a 5" },
    { value: { min: 6, max: 10 }, label: "6 a 10" },
    { value: { min: 10, max: null }, label: "10+" },
  ];

  return (
    <StyledForm onSubmit={handleSubmit(submitHandler)}>
      <TotalParticipantsSelectSection>
        <StyledSelect
          defaultValue={selectTotalParticipants}
          onChange={setSelectTotalParticipants}
          placeholder="Total de Participantes"
          options={options}
        />
      </TotalParticipantsSelectSection>
      <FlagSelectorSection>
        <FlagSelector
          value={selectCountry}
          onChange={setSelectCountry}
          onSelect={(e) => setSelectCountry(e.country)}
          countries={["US", "GB", "FR", "DE", "IT"]}
          customLabels={{
            US: "EN-US",
            GB: "EN-GB",
            FR: "FR",
            DE: "DE",
            IT: "IT",
          }}
          placeholder="Nacionalidade"
        />
      </FlagSelectorSection>
      <SelectLanguageSection>
        <FlagSelector
          value={selectLanguage}
          onChange={setSelectLanguage}
          onSelect={(e) => setSelectLanguage(e.language)}
          countries={["US", "GB", "FR", "DE", "IT"]}
          customLabels={{
            US: "EN-US",
            GB: "EN-GB",
            FR: "FR",
            DE: "DE",
            IT: "IT",
          }}
          placeholder="Idioma"
        />
      </SelectLanguageSection>

      <PickTimeSection>
        {/* <DatePicker
          selected={pickTime}
          onChange={(time) => setPickTime(time)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="Pp"
          timeFormat="HH:mm"
          //dateFormat="HH:mm"
          placeholderText="Selecione o horário"
        /> */}
      </PickTimeSection>
      <PickDateSection>
        <Calendar
          value={dates}
          onChange={(e) => setDates(e.value)}
          placeholder="Data da interação"
          readOnlyInput
          hideOnRangeSelection
          showButtonBar
          dateFormat="dd/mm/yy"
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
