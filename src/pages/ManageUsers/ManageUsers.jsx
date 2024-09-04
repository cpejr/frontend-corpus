import { useState, useEffect, Component } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { Title, Container, BackgroundTitle, Line, ConteinerTS } from "./Styles";
import { Table, SearchBar } from "../../components/index";

import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";

export default function ManageUser() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  // States and Variables

  const [userID, setUserID] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const queryClient = useQueryClient();

  // Table Handling

  const columns = [
    { field: "name", header: "" },
    { field: "manage", header: "" },
    { field: "delete", header: "" },
  ];

  //Table user

  const users = [
    {
      name: "otavio",
      manage: "edt",
      delete: "del",
    },
    {
      name: "lucas",
      manage: "edt",
      delete: "del",
    },
    {
      name: "pedro",
      manage: "edt",
      delete: "del",
    },
  ];
  //functions

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

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

        <Table columns={columns} data={users} />
      </ConteinerTS>
    </Container>
  );
}
