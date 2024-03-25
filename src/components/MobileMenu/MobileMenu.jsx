import PropTypes from "prop-types";
import {
  MobileMenuBtn,
  MobileMenuBtnSvg,
  MobileMenuContainer,
  MobileMenuItem,
  MobileMenuItemBtns,
  MobileMenuLink,
  MobileMenuList,
  MobileMenuListBtns,
  MobileMenuLogo,
  MobileMenuSvg,
  MobileMenuText,
  MobileMenuWrapper,
  NavWrapper,
} from "./MobileMenu.styled";
import { handleMenuItemClick, sections } from "../../js/scrollToSection";
import Icons from "../../img/svg/icons.svg";

export const MobileMenu = ({ handleMenuClick, isActive }) => {
  return (
    <MobileMenuWrapper $isActive={isActive}>
      <MobileMenuContainer>
        <NavWrapper>
          <MobileMenuLogo href="../../../index.html">
            <MobileMenuSvg>
              <use href={`${Icons}#icon-logo`} />
            </MobileMenuSvg>
          </MobileMenuLogo>
          <MobileMenuList>
            {sections.map((section) => (
              <MobileMenuItem key={section.id}>
                <MobileMenuLink
                  onClick={() =>
                    handleMenuItemClick(section.id, handleMenuClick)
                  }
                >
                  {section.label}
                </MobileMenuLink>
              </MobileMenuItem>
            ))}
          </MobileMenuList>
          <MobileMenuListBtns>
            <MobileMenuItemBtns>
              <MobileMenuBtn onClick={() => handleMenuClick()}>
                Close
              </MobileMenuBtn>
            </MobileMenuItemBtns>
            {[
              { href: "https://discord.com/", icon: "discord" },
              { href: "https://logomark.com/", icon: "logomark" },
              { href: "https://twitter.com/", icon: "X" },
            ].map(({ href, icon }, index) => (
              <MobileMenuItemBtns key={index}>
                <MobileMenuBtn href={href} target="_blank">
                  <MobileMenuBtnSvg>
                    <use href={`${Icons}#icon-${icon}`} />
                  </MobileMenuBtnSvg>
                </MobileMenuBtn>
              </MobileMenuItemBtns>
            ))}
          </MobileMenuListBtns>
          <MobileMenuText>
            &copy; yacht ape 2024 all rights reserved
          </MobileMenuText>
        </NavWrapper>
      </MobileMenuContainer>
    </MobileMenuWrapper>
  );
};

MobileMenu.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
