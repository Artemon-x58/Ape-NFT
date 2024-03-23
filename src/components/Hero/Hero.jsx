import {
  HeroImg,
  HeroLink,
  HeroSubtitleBottom,
  HeroSubtitleTop,
  HeroText,
  HeroTextWrapper,
  HeroTitle,
  HeroWrapper,
  HeroWrapperLinkAndText,
} from "./Hero.styled";
import { handleMenuItemClick } from "../../js/scrollToSection";
import { ContainerHero } from "../Hero/Hero.styled";

export const Hero = () => {
  return (
    <HeroWrapper>
      <ContainerHero>
        <HeroSubtitleTop>diD yOu seE iT?</HeroSubtitleTop>
        <HeroTitle />
        <HeroTextWrapper>
          <HeroSubtitleBottom>Apes aRe eveRywhere</HeroSubtitleBottom>
          <HeroImg />
          <HeroWrapperLinkAndText>
            <HeroLink onClick={() => handleMenuItemClick("mint")}>
              MEET APES
            </HeroLink>
            <HeroText>
              yacht ape is a collection of unique digital apes that you can own
              in nft format
            </HeroText>
          </HeroWrapperLinkAndText>
        </HeroTextWrapper>
      </ContainerHero>
    </HeroWrapper>
  );
};
