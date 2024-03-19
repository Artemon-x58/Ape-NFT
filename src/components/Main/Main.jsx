import { Hero } from "../Hero/Hero";
import { MainStyled, SectionStyled } from "./Main.styled";

export const Main = () => {
  return (
    <MainStyled>
      <SectionStyled>
        <Hero />
      </SectionStyled>
    </MainStyled>
  );
};
