import { Container } from "../Container/Container.styled";
import {
  AboutImg,
  AboutLinespan,
  AboutSubtitle,
  AboutSvg,
  AboutSvgLine,
  AboutText,
  AboutTitle,
  AboutTitleSpan,
  AboutWrapperLine,
  MarqueeText,
  MarqueeWrapper,
} from "./About.styled";

import Icons from "../../img/svg/icons.svg";
import MobileAboutImg from "../../img/about-mobile.png";

export const About = () => {
  return (
    <>
      <Container>
        <AboutTitle>
          a Story that started with
          <AboutTitleSpan> one simple ape</AboutTitleSpan>
        </AboutTitle>
        <AboutSubtitle>
          WHO GOT <br /> FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS
          HOW THE IDEA OF ESCAPING AND DYNAMIC JOURNEY ON THE YACHT
        </AboutSubtitle>
        <AboutSvg>
          <use href={`${Icons}#icon-cross`} />
        </AboutSvg>
        <AboutText>
          EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS ARE
          RANDOMLY GENERATED BY USERS
        </AboutText>
        <AboutImg src={MobileAboutImg} />
      </Container>
      <AboutWrapperLine>
        <MarqueeWrapper>
          <MarqueeText>
            <AboutLinespan>
              Destroy stereotypes
              <AboutSvgLine>
                <use href={`${Icons}#icon-cross`} />
              </AboutSvgLine>
            </AboutLinespan>
            <AboutLinespan>
              Have no limits
              <AboutSvgLine>
                <use href={`${Icons}#icon-cross`} />
              </AboutSvgLine>
            </AboutLinespan>
            <AboutLinespan>Break rulles</AboutLinespan>
          </MarqueeText>
        </MarqueeWrapper>
      </AboutWrapperLine>
    </>
  );
};
