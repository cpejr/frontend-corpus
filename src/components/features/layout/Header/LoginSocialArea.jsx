import {
  CloseOutlined,
  LoadingOutlined,
  UserOutlined,
} from "@ant-design/icons";
//import { signInWithGooglePopup } from "../../../../services/firebase";
import { useState } from "react";
import { toast } from "react-toastify";
import { useLogin } from "../../../../hooks/query/user";
import useAuthStore from "../../../../stores/auth";
import { colors } from "../../../../styles/stylesVariables";
//import { ModalLogOff } from "../../..";
import {
  LoadingStyles,
  LoginButton,
  LoginSocial,
  ModalStyle,
  SocialMedias,
} from "./Styles";
import { image } from "../../../../assets";

export default function LoginSocialArea() {
  // Variables

  const { auth } = useAuthStore();
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const user = useAuthStore((state) => state?.auth?.user);
  const [loginLogoff, setLoginLogoff] = useState(
    auth?.accessToken ? "Perfil" : "Fazer Login"
  );
  const isLogged = auth?.accessToken ? true : false;
  const [profilePicture, setProfilePicture] = useState(
    loginLogoff === "Fazer Login" ? (
      <UserOutlined />
    ) : (
      <img src={user?.imageURL} alt="Profile" />
    )
  );
  const [modalLogOff, setModalLogOff] = useState(false);
  const openModalLogOff = () => setModalLogOff(true);
  const closeModalLogOff = () => setModalLogOff(false);
  const modalCloseButton = (
    <CloseOutlined style={{ color: colors.font.primary }} />
  );

  // BackEnd Calls

  const { mutate: login, isLoading } = useLogin({
    onSuccess: () => {
      toast.success("Login Efetuado com Sucesso!");
      setProfilePicture(<img src={user?.imageURL} alt="Profile" />);
    },
    onError: (err) => toast.error(err),
  });

  // const logGoogleUser = async () => {
  //   try {
  //     if (auth === null || auth.accessToken === null) {
  //       const googleResponse = await signInWithGooglePopup();
  //       login({
  //         name: googleResponse?.user?.displayName,
  //         email: googleResponse?.user?.email,
  //         imageURL: googleResponse?.user?.photoURL,
  //       });
  //       setLoginLogoff("Perfil");
  //     } else {
  //       clearAuth();
  //       toast.success("Usuario Deslogado com Sucesso!");
  //       setLoginLogoff("Fazer Login");
  //       setProfilePicture(<UserOutlined />);
  //     }
  //   } catch (error) {
  //     toast.error("Error ao Fazer Login com o Google");
  //   }
  // };

  return (
    <LoginSocial>
      {/* {isLoading ? (
        <LoadingStyles>
          <LoadingOutlined />
        </LoadingStyles>
      ) : (
        <LoginButton onClick={isLogged ? openModalLogOff : logGoogleUser}>
          {loginLogoff}
          {profilePicture}
        </LoginButton>
      )} */}
      <SocialMedias>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={image} alt="image" width="75%"></img>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src={image} alt="image" width="75%"></img>
        </a>{" "}
        <a href="http://wa.me/" target="_blank" rel="noreferrer">
          <img src={image} alt="image" width="75%"></img>
        </a>
      </SocialMedias>
      <ModalStyle
        open={modalLogOff}
        onCancel={closeModalLogOff}
        width={500}
        height={250}
        padding={0}
        footer={null}
        closeIcon={modalCloseButton}
        centered
        destroyOnClose
      ></ModalStyle>
    </LoginSocial>
  );
}
