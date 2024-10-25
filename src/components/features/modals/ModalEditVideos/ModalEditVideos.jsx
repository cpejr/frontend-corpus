import PropTypes from "prop-types";
import Button from "../../../common/Button/Button";
import { colors } from "../../../../styles/stylesVariables";
import {
  Container,
  Message,
  ModalStyle,
  MultipleSelect,
  //Calendar,
} from "./Styles";

import { useState, useEffect } from "react";

//import formatDate from "../../../../utils/formatDate";

export default function ModalEditVideos({
  videos,
  close,
  modal,
  _id,
  updateVideos,
}) {
  //const [date, setDate] = useState();
  const [selectedCharacteristics, setSelectedCharacteristics] = useState([]);

  const handleCharacteristicsChange = (e) => {
    setSelectedCharacteristics(e.value);
  };

  useEffect(() => {
    if (modal) {
      selectedCharacteristics();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modal]);

  const handleSubmit = (data) => {
    const updatedData = {
      ...data,
      ...videos,
      characteristics: selectedCharacteristics,
    };
    updateVideos(_id, updatedData);
    close();
  };

  return (
    <Container>
      <ModalStyle
        open={modal}
        onCancel={close}
        centered
        destroyOnClose
        footer={null}
      >
        <Message>Editar Informações</Message>

        <MultipleSelect
          optionLabel="label"
          placeholder="Escolha as características"
          value={selectedCharacteristics}
          onChange={handleCharacteristicsChange}
          className="w-full md:w-20rem"
          filter
          color="black"
        />
        <MultipleSelect
          optionLabel="label"
          placeholder="Escolha as características"
          className="w-full md:w-20rem"
          filter
          color="black"
        />
        {/* <Calendar
          value={date}
          onChange={(e) => setDate(e.value)}
          readOnlyInput
          name="data"
          placeholder={formatDate({ value: videos?.date })}
          showButtonBar
          dateFormat="dd/mm/yy"
        /> */}
        <Button
          type="submit"
          onClick={handleSubmit}
          backgroundcolor="transparent"
          color={colors.font.primary}
          border="1px solid"
          borderRadius="0.5rem"
          marginTop="1.5rem"
          fontSize="1.8rem"
          fontWeight="500"
          lineHeight="2.2rem"
          hoverBackgroundColor={colors.modals.modalButton}
          hoverColor={colors.font.secondary}
          borderColor={colors.modals.modalButton}
        >
          Editar
        </Button>
      </ModalStyle>
    </Container>
  );
}

ModalEditVideos.propTypes = {
  _id: PropTypes.string.isRequired,
  videos: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired,
  modal: PropTypes.bool.isRequired,
  transformArrayItems: PropTypes.func.isRequired,
  updateVideos: PropTypes.func.isRequired,
};
