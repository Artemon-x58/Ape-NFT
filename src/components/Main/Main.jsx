import { About } from "../About/About";
import { Arts } from "../Arts/Arts";
import { FaqList } from "../FaqList/FaqList";
import { Hero } from "../Hero/Hero";
import { MindMap } from "../MindMap/MindMap";
import { Mint } from "../Mint/Mint";
import { MainStyled, SectionHero, SectionStyled } from "./Main.styled";

export const Main = () => {
  return (
    <MainStyled>
      <SectionHero>
        <Hero />
      </SectionHero>
      <SectionStyled>
        <About />
      </SectionStyled>
      <SectionStyled>
        <MindMap />
      </SectionStyled>
      <SectionStyled>
        <FaqList />
      </SectionStyled>
      <SectionStyled>
        <Arts />
      </SectionStyled>
      <SectionStyled>
        <Mint />
      </SectionStyled>
    </MainStyled>
  );
};
