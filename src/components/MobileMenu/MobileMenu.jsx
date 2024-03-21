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
import PropTypes from "prop-types";

export const MobileMenu = ({ handleMenuClick, isActive }) => {
  return (
    <MobileMenuWrapper $isActive={isActive}>
      <Container style={{ height: "100%" }}>
        <Header handleMenuClick={handleMenuClick} isActive={isActive} />
        <NavWrapper>
          <MobileMenuList>
            <MobileMenuItem>
              <MobileMenuLink>ABOUT</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink>M-MAP</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink>FAQ</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink>ARTS</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink>MINT</MobileMenuLink>
            </MobileMenuItem>
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
