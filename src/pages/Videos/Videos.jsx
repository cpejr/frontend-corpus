import { useState } from "react";
import {
  Container,
  Title,
  DivSelect,
  DivLine,
  Calendar,
  ContainerSearchFilter,
  DivTitle,
  ContainerSearchBar,
  ButtonDiv,
} from "./Styles";
import { SearchBar } from "../../components";
import { useGlobalLanguage } from "../../stores/globalLanguage";
import { TranslateText } from "./translations";
import Card from "../../components/features/Card/Card";
import { useNavigate } from "react-router-dom";
import Pagination from "../../components/features/Pagination/Pagination";

export default function Videos() {
  const [dates, setDates] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  //translations
  const { globalLanguage } = useGlobalLanguage();
  const translation = TranslateText({ globalLanguage });

  const videos = [
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail: "https://img.youtube.com/vi/_N8zSuvqHh4/hqdefault.jpg",
      linkVideo: "https://www.youtube.com/embed/_N8zSuvqHh4",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
    {
      thumbnail:
        "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg",
      name: "Foda",
    },
  ];
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(videos.length / itemsPerPage);
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const navigate = useNavigate();

  return (
    <Container>
      <DivTitle>
        <Title>{translation.title}</Title>
      </DivTitle>
      <ContainerSearchFilter>
        <ContainerSearchBar>
          <SearchBar
            aria-label="Barra de pesquisa"
            placeholder={translation.placeholder}
            value={searchValue}
            search={handleSearch}
          />
        </ContainerSearchBar>
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
        </DivSelect>
      </ContainerSearchFilter>
      {videos
        .filter((obj) =>
          obj.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage) // Aplica a paginação aqui
        .map((card, index) => (
          <DivLine key={index}>
            <Card
              data={card}
              textButton={translation.buttonCard}
              event={() => {
                navigate(`/videos/${card.name}`, { state: card });
              }}
            />
          </DivLine>
        ))}

      <ButtonDiv>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          setCurrentPage={setCurrentPage}
        />
      </ButtonDiv>
    </Container>
  );
}
