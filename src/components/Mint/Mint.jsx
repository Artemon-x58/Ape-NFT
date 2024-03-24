import { Container } from "../Container/Container.styled";
import {
  MintSvg,
  MintText,
  MintTitle,
  MintWrapperSvgText,
} from "./Mint.styled";
import Icons from "../../img/svg/icons.svg";
import { FormComponent } from "../FormComponent/Form";

export const Mint = () => {
  return (
    <Container>
      <MintTitle id="mint">Are you in?</MintTitle>
      <MintWrapperSvgText>
        <MintSvg>
          <use href={`${Icons}#icon-cross`} />
        </MintSvg>
        <MintText>
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </MintText>
      </MintWrapperSvgText>

      <FormComponent />
    </Container>
  );
};
