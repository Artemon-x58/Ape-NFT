import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  HeaderNavItem,
  HeaderNavItemLink,
  HeaderNavList,
  HeaderNavWrapper,
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
import { handleMintSection } from "../../js/scrollToSection";
import { useMediaQuery } from "../../js/mediaQuery.js";
import { headerNavItemData, socialLinks } from "./headerData.js";

export const Header = ({ isActive, isOpenListNav, handleOpenNavList }) => {
  const [deviceType, setDeviceType] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useMediaQuery(setDeviceType);

  return (
    <Container style={{ position: "relative", width: "100%" }}>
      <HeaderStyled>
        <Logo href="/index.html" $isScrolled={isScrolled}>
          <LogoSvg $isActive={isActive}>
            <use href={`${Icons}#icon-logo`} />
          </LogoSvg>
        </Logo>
        <SocialList>
          <HeaderNavWrapper
            $deviceType={deviceType}
            $isOpenListNav={isOpenListNav}
          >
            <HeaderNavList
              $deviceType={deviceType}
              $isOpenListNav={isOpenListNav}
            >
              {headerNavItemData.map((item, index) => (
                <HeaderNavItem key={index}>
                  <HeaderNavItemLink
                    $isScrolled={isScrolled}
                    onClick={() => handleMintSection(item.section)}
                  >
                    {item.label}
                  </HeaderNavItemLink>
                </HeaderNavItem>
              ))}
            </HeaderNavList>
            <SocialListItem $isActive={isActive}>
              <Menu onClick={handleOpenNavList} $isScrolled={isScrolled}>
                {isActive || isOpenListNav ? "CLOSE" : "MENU"}
              </Menu>
            </SocialListItem>
          </HeaderNavWrapper>
          {socialLinks.map(({ href, icon }, index) => (
            <SocialListItem key={index} $isActive={isActive}>
              <SocialListLink href={href} target="_blank">
                <SocialSvg $isActive={isActive} $isScrolled={isScrolled}>
                  <use href={`${Icons}#icon-${icon}`} />
                </SocialSvg>
              </SocialListLink>
            </SocialListItem>
          ))}
        </SocialList>
      </HeaderStyled>
    </Container>
  );
};

Header.propTypes = {
  handleOpenNavList: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  isOpenListNav: PropTypes.bool.isRequired,
};
