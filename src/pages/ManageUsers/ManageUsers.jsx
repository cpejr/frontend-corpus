//react functions
import { useState, useEffect } from "react";
//import { useQueryClient } from "@tanstack/react-query";

//styles and components
import {
  Title,
  Container,
  BackgroundTitle,
  Line,
  ConteinerTS,
  ConteinerTable,
} from "./Styles";
import { Table, SearchBar } from "../../components/index";

//translations
import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";

//icons
import { RiDeleteBin5Line } from "react-icons/ri";
//import { AiOutlineCloseCircle } from "react-icons/ai";
//import { LoadingOutlined } from "@ant-design/icons";
import { FaRegEdit } from "react-icons/fa";

export default function ManageUser() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  // States and Variables

  const [users, setUsers] = useState([]);
  //const [userID, setUserID] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  //const queryClient = useQueryClient();

  // Table Handling

  const columns = [
    { field: "name", header: "" },
    { field: "manage", header: "" },
    { field: "delete", header: "" },
  ];

  //Table user

  const usersList = [
    {
      name: "otavio",
      manage: <FaRegEdit cursor={"pointer"} />,
      delete: <RiDeleteBin5Line cursor={"pointer"} />,
    },
    {
      name: "lucas",
      manage: <FaRegEdit cursor={"pointer"} />,
      delete: <RiDeleteBin5Line cursor={"pointer"} />,
    },
    {
      name: "pedro",
      manage: <FaRegEdit cursor={"pointer"} />,
      delete: <RiDeleteBin5Line cursor={"pointer"} />,
    },
  ];
  //functions

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
  };

  function searchValue() {}

  return (
    <Container>
      <BackgroundTitle>
        <Title>{translations.title1}</Title>
        <Line />
      </BackgroundTitle>
      <ConteinerTS>
        <SearchBar
          placeholder={translations.placeholderSearch}
          value={searchQuery}
          search={handleSearchChange}
          width="90%"
        />
        <ConteinerTable>
          <Table columns={columns} data={usersList} />
        </ConteinerTable>
      </ConteinerTS>
    </Container>
  );
}
