import { Container } from "../Container/Container.styled";
import {
  HeroImg,
  HeroLink,
  HeroSubtitle,
  HeroText,
  HeroTitle,
  HeroWrapper,
} from "./Hero.styled";
import MobileHeroImg from "../../img/mobile-hero.png";

export const Hero = () => {
  return (
    <Container>
      <HeroWrapper>
        <HeroSubtitle>diD yOu seE iT?</HeroSubtitle>
        <HeroTitle>YACHT APES</HeroTitle>
        <HeroSubtitle>Apes aRe eveRywhere</HeroSubtitle>
        <HeroImg src={MobileHeroImg} />
        <HeroLink>MEET APES</HeroLink>
        <HeroText>
          yacht ape is a collection of unique digital apes that you can own in
          nft format
        </HeroText>
      </HeroWrapper>
    </Container>
  );
};
