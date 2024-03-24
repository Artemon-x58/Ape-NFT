import {
  HeaderStyled,
  Logo,
  LogoSvg,
  Menu,
  SocialList,
  SocialListItem,
  SocialListLink,
  SocialSvg,
} from "./Header.styled";
import { Container } from "../Container/Container.styled";
import Icons from "../../img/svg/icons.svg";
import PropTypes from "prop-types";

export const Header = ({ handleMenuClick, isActive }) => {
  return (
    <Container style={{ position: "relative", width: "100%" }}>
      <HeaderStyled>
        <Logo href="../../../index.html">
          <LogoSvg $isActive={isActive}>
            <use href={`${Icons}#icon-logo`} />
          </LogoSvg>
        </Logo>
        <SocialList>
          <SocialListItem $isActive={isActive}>
            <Menu onClick={handleMenuClick} $isActive={isActive}>
              {isActive ? "CLOSE" : "MENU"}
            </Menu>
          </SocialListItem>

          <SocialListItem $isActive={isActive}>
            <SocialListLink href="https://discord.com/" target="_blank">
              <SocialSvg $isActive={isActive}>
                <use href={`${Icons}#icon-discord`} />
              </SocialSvg>
            </SocialListLink>
          </SocialListItem>

          <SocialListItem $isActive={isActive}>
            <SocialListLink href="https://logomark.com/" target="_blank">
              <SocialSvg $isActive={isActive}>
                <use href={`${Icons}#icon-logomark`} />
              </SocialSvg>
            </SocialListLink>
          </SocialListItem>

          <SocialListItem $isActive={isActive}>
            <SocialListLink href="https://twitter.com/" target="_blank">
              <SocialSvg $isActive={isActive}>
                <use href={`${Icons}#icon-X`} />
              </SocialSvg>
            </SocialListLink>
          </SocialListItem>
        </SocialList>
      </HeaderStyled>
    </Container>
  );
};

Header.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};
