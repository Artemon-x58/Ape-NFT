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

const sections = [
  { id: "about", label: "ABOUT" },
  { id: "mind-map", label: "M-MAP" },
  { id: "faq", label: "FAQ" },
  { id: "arts", label: "ARTS" },
  { id: "mint", label: "MINT" },
];

export const MobileMenu = ({ handleMenuClick, isActive }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuItemClick = (sectionId) => {
    scrollToSection(sectionId);
    handleMenuClick(false);
  };

  return (
    <MobileMenuWrapper $isActive={isActive}>
      <Container style={{ height: "100%" }}>
        <Header handleMenuClick={handleMenuClick} isActive={isActive} />
        <NavWrapper>
          <MobileMenuList>
            {sections.map((section) => (
              <MobileMenuItem key={section.id}>
                <MobileMenuLink onClick={() => handleMenuItemClick(section.id)}>
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
