import { About } from "../About/About";
import { Hero } from "../Hero/Hero";
import { MainStyled, SectionStyled } from "./Main.styled";

export const Main = () => {
  return (
    <MainStyled>
      <SectionStyled style={{ paddingLeft: "8px", paddingRight: "8px" }}>
        <Hero />
      </SectionStyled>
      <SectionStyled>
        <About />
      </SectionStyled>
    </MainStyled>
  );
};
