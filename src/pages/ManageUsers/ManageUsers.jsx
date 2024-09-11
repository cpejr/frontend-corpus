//react functions
import { useState, useEffect } from "react";

//Modal
import { ModalDeleteUser } from "../../components/index";

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
import { AiOutlineCloseCircle } from "react-icons/ai";

//translations
import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";

//icons
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useDeleteUser, useGetUsers } from "../../hooks/query/user";

export default function ManageUser() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  // States and Variables

  const [userId, setUserId] = useState("");
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Table Handling

  const columns = [
    { field: "name", header: "" },
    { field: "manage", header: "" },
    { field: "delete", header: "" },
  ];

  //functions

  const {
    data: allUsers,
    isLoading,
    refetch,
  } = useGetUsers({
    onError: (err) => {
      console.log(err);
    },
  });

  const { mutate: deleteUser } = useDeleteUser({
    onError: (err) => {
      console.log(err);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);
    formatUsersList(allUsers);

    setUsers(
      formatUsersList(
        allUsers.filter((obj) =>
          obj.name.toLowerCase().includes(value.toLowerCase()),
        ),
      ),
    );
  };

  const formatUsersList = (users) => {
    return users.map((user) => ({
      name: user.name,
      manage: <FaRegEdit cursor={"pointer"} />,
      delete: (
        <RiDeleteBin5Line
          cursor={"pointer"}
          onClick={() => {
            setUserId(user._id);
            openModalDelete();
            refetch();
          }}
        />
      ),
    }));
  };

  //Modal Functions

  // Modal Handling

  const [modalDelete, setModalDelete] = useState(false);
  const openModalDelete = () => setModalDelete(true);
  const closeModalDelete = () => setModalDelete(false);
  const modalCloseButton = <AiOutlineCloseCircle />;

  function handleUserDelete(_id) {
    deleteUser(_id);
    closeModalDelete();
  }

  //Update the user list by the filter

  useEffect(() => {
    if (allUsers) {
      setUsers(formatUsersList(allUsers));
    }
  }, [isLoading, allUsers]);

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
          <Table columns={columns} data={users} />
        </ConteinerTable>
      </ConteinerTS>
      <ModalDeleteUser
        close={closeModalDelete}
        handleDelete={handleUserDelete}
        id={userId}
        modal={modalDelete}
        modalCloseIcon={modalCloseButton}
        closeModal={closeModalDelete}
      />
    </Container>
  );
}
