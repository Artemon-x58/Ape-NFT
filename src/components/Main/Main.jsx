import { useEffect, useState } from "react";
import { useMediaQuery } from "../../js/mediaQuery";
import { About } from "../About/About";
import { Arts } from "../Arts/Arts";
import { FaqList } from "../FaqList/FaqList";
import { Hero } from "../Hero/Hero";
import { MindMapSlider } from "../MindMap/MindMapSlider";
import { MindMapTabletDesktop } from "../MindMap/MindMapTabletDesktop";
import { Mint } from "../Mint/Mint";
import { MainStyled, SectionHero, SectionStyled } from "./Main.styled";

export const Main = () => {
  const [deviceType, setDeviceType] = useState("");
  const [isMobile, setIsMobile] = useState();

  useMediaQuery(setDeviceType);

  useEffect(() => {
    if (deviceType === "mobile") {
      return setIsMobile(true);
    }
    setIsMobile(false);
  }, [deviceType]);

  return (
    <MainStyled>
      <SectionHero>
        <Hero />
      </SectionHero>
      <SectionStyled>
        <About />
      </SectionStyled>
      <SectionStyled>
        {isMobile ? <MindMapSlider /> : <MindMapTabletDesktop />}
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
