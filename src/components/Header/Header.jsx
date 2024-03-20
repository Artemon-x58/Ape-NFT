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

export const Header = ({ handleMenuClick, isActive }) => {
  return (
    <HeaderStyled>
      <Logo>
        <LogoSvg $isActive={isActive}>
          <LogoUse href={`${Icons}#icon-logo`} />
        </LogoSvg>
      </Logo>
      <SocialList>
        <SocialListWrapperItem $isActive={isActive}>
          <SocialListItem>
            <Menu onClick={handleMenuClick} $isActive={isActive}>
              {isActive ? "CLOSE" : "MENU"}
            </Menu>
          </SocialListItem>
        </SocialListWrapperItem>
        <SocialListWrapperItem $isActive={isActive}>
          <SocialListItem>
            <SocialListLink href="https://discord.com/" target="_blank">
              <SocialSvg $isActive={isActive}>
                <SocialUse href={`${Icons}#icon-discord`} />
              </SocialSvg>
            </SocialListLink>
          </SocialListItem>
        </SocialListWrapperItem>
        <SocialListWrapperItem $isActive={isActive}>
          <SocialListItem>
            <SocialListLink href="https://logomark.com/" target="_blank">
              <SocialSvg $isActive={isActive}>
                <SocialUse href={`${Icons}#icon-logomark`} />
              </SocialSvg>
            </SocialListLink>
          </SocialListItem>
        </SocialListWrapperItem>
        <SocialListWrapperItem $isActive={isActive}>
          <SocialListItem>
            <SocialListLink href="https://twitter.com/" target="_blank">
              <SocialSvg $isActive={isActive}>
                <SocialUse href={`${Icons}#icon-X`} />
              </SocialSvg>
            </SocialListLink>
          </SocialListItem>
        </SocialListWrapperItem>
      </SocialList>
    </HeaderStyled>
  );
};
