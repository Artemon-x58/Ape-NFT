import { Container } from "../Container/Container.styled";
import { MintSvg, MintText, MintTitle } from "./Mint.styled";
import Icons from "../../img/svg/icons.svg";
import { FormComponent } from "../Form/Form";

export const Mint = () => {
  return (
    <Container>
      <MintTitle>Are you in?</MintTitle>
      <MintSvg>
        <use href={`${Icons}#icon-cross`} />
      </MintSvg>
      <MintText>
        Join the YACHT APE community to be one of the first to receive our
        limited edition NFT
      </MintText>
      <FormComponent />
    </Container>
  );
};
