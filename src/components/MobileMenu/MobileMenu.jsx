import PropTypes from "prop-types";
import {
  MobileMenuContainer,
  MobileMenuItem,
  MobileMenuLink,
  MobileMenuList,
  MobileMenuText,
  MobileMenuWrapper,
  NavWrapper,
} from "./MobileMenu.styled";
import { handleMenuItemClick, sections } from "../../js/scrollToSection";

export const MobileMenu = ({ handleMenuClick, isActive }) => {
  return (
    <MobileMenuWrapper $isActive={isActive}>
      <MobileMenuContainer>
        <NavWrapper>
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
