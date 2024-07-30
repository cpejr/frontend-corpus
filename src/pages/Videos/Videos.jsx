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
  Line,
  MemorialNotFound,
  MultipleSelect,
} from "./Styles";
import { SearchBar } from "../../components";
//import { toast } from "react-toastify";
//import { useGetMemorialByDate } from "../../hooks/querys/memorial";
//import useDebounce from "../../services/useDebouce";
//import LargeCard from "../../components";
//import { useQueryClient } from "@tanstack/react-query";
//import { useGetCategoryMemorial } from "../../hooks/querys/categoryMemorial";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";
export default function Videos() {
  //const [imagesLoading, setImagesLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [filteredMemorial, setFilteredMemorial] = useState([]);
  //const [searchValue, setSearchValue] = useState("");
  //const debouncedName = useDebounce(searchValue);
  const [dates, setDates] = useState(null);
  //const [dateRange, setDateRange] = useState();
  //const [options, setOptions] = useState([]);

  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  // const queryClient = useQueryClient();
  // // BackEnd Calls

  // const {
  //   data: memorial,
  //   isLoading,
  //   isError,
  // } = useGetMemorialByDate({
  //   dateRange: dateRange,
  //   name: debouncedName,
  //   onError: (err) => {
  //     setImagesLoading(false);
  //     toast.error(err);
  //   },
  // });

  // Functions

  // const handleSearchChange = (e) => {
  //   e.preventDefault();
  //   setSearchValue(e.target.value);
  // };

  const handleResetFilter = () => {
    setDates(null);
    //setDateRange({});
    setCategory([]);
    setFilteredMemorial({
      //data
    });
    // queryClient.invalidateQueries({
    //   queryKey: ["memorial"],
    // });
    // queryClient.invalidateQueries({
    //   queryKey: ["favoritesMemorials"],
    // });
  };

  // const { data: categoryMemorial } = useGetCategoryMemorial({
  //   onError: (err) => {
  //     toast.error(err);
  //   },
  // });
  // useEffect(() => {
  //   if (!isLoading && !isError) {
  //     setImagesLoading(false);
  //   }
  // }, [isLoading, isError]);

  // useEffect(() => {
  //   let memorials = categoryMemorial?.map((category) => {
  //     return category?.name;
  //   });
  //   if (categoryMemorial) {
  //     setOptions(memorials);
  //   }
  //   if (memorial) {
  //     setFilteredMemorial(memorial);
  //   }
  // }, [categoryMemorial, memorial]);

  // const categoryFilter = () => {
  //   if (dates && dates.length != 0) {
  //     const [initialDate, finalDate] = dates;
  //     let formattedDateRange;
  //     if (finalDate === null) {
  //       formattedDateRange = { oneDate: initialDate.toISOString() };
  //     } else {
  //       formattedDateRange = {
  //         initialDate: initialDate.toISOString(),
  //         finalDate: finalDate.toISOString(),
  //       };
  //     }
  //     setDateRange(formattedDateRange);
  //   }

  //   if (!category || category.length === 0) {
  //     setFilteredMemorial(memorial);
  //   } else {
  //     const filtered = memorial.filter((memorialItem) =>
  //       category.every((selectedCategory) =>
  //         memorialItem.id_categoryMemorial.some(
  //           (categoryItem) => categoryItem.name === selectedCategory
  //         )
  //       )
  //     );

  //     setFilteredMemorial(filtered);
  //   }
  // };
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
        <Buttons //</ButtonsDiv>onClick={categoryFilter}
        >
          {translation.button1}
        </Buttons>
        <Buttons onClick={handleResetFilter}>{translation.button2}</Buttons>
      </ButtonsDiv>
      <DivLine>
        {filteredMemorial && filteredMemorial.length === 0 && (
          <MemorialNotFound>{translation.message}</MemorialNotFound>
        )}
        {filteredMemorial &&
          filteredMemorial.map((card) => (
            <Line key={card.title}>
              {
                //<LargeCard
                //aria-label="Cartão de memorial"
                //data={card}
                //imagesLoading={imagesLoading}
                ///>
              }
            </Line>
          ))}
      </DivLine>
    </Container>
  );
}
