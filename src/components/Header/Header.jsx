import {
  HeaderStyled,
  Logo,
  LogoSvg,
  Menu,
  SocialList,
  SocialListItem,
  SocialListLink,
  SocialListWrapperItem,
  SocialSvg,
} from "./Header.styled";
import Icons from "../../img/svg/icons.svg";
import PropTypes from "prop-types";

export const Header = ({ handleMenuClick, isActive }) => {
  return (
    <>
      <HeaderStyled>
        <Logo href="../../../index.html">
          <LogoSvg $isActive={isActive}>
            <use href={`${Icons}#icon-logo`} />
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
                  <use href={`${Icons}#icon-discord`} />
                </SocialSvg>
              </SocialListLink>
            </SocialListItem>
          </SocialListWrapperItem>
          <SocialListWrapperItem $isActive={isActive}>
            <SocialListItem>
              <SocialListLink href="https://logomark.com/" target="_blank">
                <SocialSvg $isActive={isActive}>
                  <use href={`${Icons}#icon-logomark`} />
                </SocialSvg>
              </SocialListLink>
            </SocialListItem>
          </SocialListWrapperItem>
          <SocialListWrapperItem $isActive={isActive}>
            <SocialListItem>
              <SocialListLink href="https://twitter.com/" target="_blank">
                <SocialSvg $isActive={isActive}>
                  <use href={`${Icons}#icon-X`} />
                </SocialSvg>
              </SocialListLink>
            </SocialListItem>
          </SocialListWrapperItem>
        </SocialList>
      </HeaderStyled>
    </>
  );
};

Header.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
