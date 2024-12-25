import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import PropTypes from "prop-types";

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

export default function FilterArea({ onSubmit }) {
  const { handleSubmit, reset, register, control } = useForm();

  const [selectTotalParticipants, setSelectTotalParticipants] = useState(null);
  const [selectCountry, setSelectCountry] = useState(null);
  const [selectLanguage, setSelectLanguage] = useState(null);
  const [InteractionTime, setInteractionTime] = useState("10:00");
  const [dates, setDates] = useState(null);

  function submitHandler(data) {
    const toFilter = {
      ...data,
      totalParticipants: selectTotalParticipants,
      country: selectCountry,
      language: selectLanguage,
      duration: InteractionTime,
      date: dates,
    };
    onSubmit(toFilter);
    reset();
    console.log(toFilter);
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
        <Controller
          name="TotalParticipants"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <StyledSelect
              {...field}
              onChange={(participants) => {
                setSelectTotalParticipants(participants.value);
                field.onChange(participants.value);
              }}
              isSearchable={false}
              placeholder="Total de Participantes"
              options={options}
            />
          )}
        />
      </TotalParticipantsSelectSection>
      <FlagSelectorSection>
        <Controller
          name="country"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <FlagSelector
              {...field}
              onChange={(SelectCountry) => {
                setSelectCountry(SelectCountry.value);
                field.onChange(SelectCountry.value);
              }}
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
          )}
        />
      </FlagSelectorSection>
      <SelectLanguageSection>
        <Controller
          name="language"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <FlagSelector
              {...field}
              onChange={(SelectLanguage) => {
                setSelectLanguage(SelectLanguage.value);
                field.onChange(SelectLanguage.value);
              }}
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
          )}
        />
      </SelectLanguageSection>

      <PickTimeSection>
        <input
          placeholder="Tempo de interação"
          {...register("InteractionTime")}
          onChange={(e) => setInteractionTime(e.value)}
          value={InteractionTime}
        ></input>
      </PickTimeSection>
      <PickDateSection>
        <Controller
          name="dates"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <Calendar
              {...field}
              onChange={(dates) => {
                setDates(dates.value);
                field.onChange(dates.value);
              }}
              placeholder="Data da interação"
              readOnlyInput
              hideOnRangeSelection
              showButtonBar
              dateFormat="dd/mm/yy"
            />
          )}
        />
      </PickDateSection>
      <button type="submit">Aplicar Filtros</button>
    </StyledForm>
  );
}

FilterArea.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
