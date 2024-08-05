import { StyledSponsors, Sponsor } from "./Styles";

import { image } from "../../assets/index";

export default function Sponsors() {
  return (
    <StyledSponsors>
      <Sponsor src={image} alt="Image"></Sponsor>
      <Sponsor src={image} alt="Image"></Sponsor>
      <Sponsor src={image} alt="Image"></Sponsor>
      <Sponsor src={image} alt="Image"></Sponsor>
    </StyledSponsors>
  );
}
