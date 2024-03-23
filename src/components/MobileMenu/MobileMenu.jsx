import PropTypes from "prop-types";
import { Container } from "../Container/Container.styled";
import { Header } from "../Header/Header";
import {
  MobileMenuItem,
  MobileMenuLink,
  MobileMenuList,
  MobileMenuText,
  MobileMenuWrapper,
  NavWrapper,
} from "./MobileMenu.styled";
import { handleMenuItemClick } from "../../js/scrollToSection";

const sections = [
  { id: "about", label: "ABOUT" },
  { id: "mind-map", label: "M-MAP" },
  { id: "faq", label: "FAQ" },
  { id: "arts", label: "ARTS" },
  { id: "mint", label: "MINT" },
];

export const MobileMenu = ({ handleMenuClick, isActive }) => {
  return (
    <MobileMenuWrapper $isActive={isActive}>
      <Container style={{ height: "100%" }}>
        <Header handleMenuClick={handleMenuClick} isActive={isActive} />
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
      </Container>
    </MobileMenuWrapper>
  );
};

MobileMenu.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
