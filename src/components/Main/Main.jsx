import { About } from "../About/About";
import { Arts } from "../Arts/Arts";
import { FaqList } from "../FaqList/FaqList";
import { Hero } from "../Hero/Hero";
import { MindMap } from "../MindMap/MindMap";
import { Mint } from "../Mint/Mint";
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
      <SectionStyled>
        <MindMap />
      </SectionStyled>
      <SectionStyled>
        <FaqList />
      </SectionStyled>
      <Arts />
      <SectionStyled>
        <Mint />
      </SectionStyled>
    </MainStyled>
  );
};
