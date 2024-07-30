import { useState } from "react";
import {
  Container,
  Title,
  Filter,
  DivSelect,
  DivLine,
  Calendar,
  Buttons,
  ButtonsDiv,
  MemorialNotFound,
  MultipleSelect,
} from "./Styles";
import { SearchBar } from "../../components";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";
export default function Videos() {
  const [category, setCategory] = useState([]);
  const [filteredMemorial, setFilteredMemorial] = useState([]);
  const [dates, setDates] = useState(null);

  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  const handleResetFilter = () => {
    setDates(null);
    setCategory([]);
    setFilteredMemorial({
      //data
    });
  };

  return (
    <Container>
      <Title>{translation.title1}</Title>
      <SearchBar
        aria-label="Barra de pesquisa"
        placeholder={translation.placeholder}
        //value={searchValue}
        // search={handleSearchChange}
      />
      <Filter>
        <DivSelect>
          <Calendar
            value={dates}
            onChange={(e) => setDates(e.value)}
            selectionMode="range"
            readOnlyInput
            hideOnRangeSelection
            placeholder={translation.calendar}
            showButtonBar
            dateFormat="yy"
            view="year"
          />

          <MultipleSelect
            //options={options}
            placeholder={translation.select}
            value={category || ""}
            onChange={(e) => setCategory(e.value)}
          />
        </DivSelect>
      </Filter>
      <ButtonsDiv>
        <Buttons>{translation.button1}</Buttons>
        <Buttons onClick={handleResetFilter}>{translation.button2}</Buttons>
      </ButtonsDiv>
      <DivLine>
        {filteredMemorial && filteredMemorial.length === 0 && (
          <MemorialNotFound>{translation.message}</MemorialNotFound>
        )}
      </DivLine>
    </Container>
  );
}
