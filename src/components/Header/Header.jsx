import {
  HeaderStyled,
  Logo,
  LogoSvg,
  LogoUse,
  Menu,
  SocialList,
  SocialListItem,
  SocialListLink,
  SocialListWrapperItem,
  SocialSvg,
  SocialUse,
} from "./Header.styled";
import Icons from "../../img/svg/icons.svg";
import { Container } from "../Container/Container.styled";

export const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <Logo>
          <LogoSvg>
            <LogoUse href={`${Icons}#icon-logo`} />
          </LogoSvg>
        </Logo>

        <SocialList>
          <SocialListWrapperItem>
            <SocialListItem>
              <Menu>MENU</Menu>
            </SocialListItem>
          </SocialListWrapperItem>
          <SocialListWrapperItem>
            <SocialListItem>
              <SocialListLink href="https://discord.com/" target="_blank">
                <SocialSvg>
                  <SocialUse href={`${Icons}#icon-discord`} />
                </SocialSvg>
              </SocialListLink>
            </SocialListItem>
          </SocialListWrapperItem>
          <SocialListWrapperItem>
            <SocialListItem>
              <SocialListLink href="https://logomark.com/" target="_blank">
                <SocialSvg>
                  <SocialUse href={`${Icons}#icon-logomark`} />
                </SocialSvg>
              </SocialListLink>
            </SocialListItem>
          </SocialListWrapperItem>
          <SocialListWrapperItem>
            <SocialListItem>
              <SocialListLink href="https://twitter.com/" target="_blank">
                <SocialSvg>
                  <SocialUse href={`${Icons}#icon-X`} />
                </SocialSvg>
              </SocialListLink>
            </SocialListItem>
          </SocialListWrapperItem>
        </SocialList>
      </HeaderStyled>
    </Container>
  );
};
