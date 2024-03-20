import { Container } from "../Container/Container.styled";
import { Header } from "../Header/Header";
import {
  MobileMenuItem,
  MobileMenuLink,
  MobileMenuList,
  MobileMenuText,
  MobileMenuWrapper,
} from "./MobileMenu.styled";

export const MobileMenu = () => {
  return (
    <Container>
      <Header />
      <MobileMenuWrapper>
        <MobileMenuList>
          <MobileMenuItem>
            <MobileMenuLink>ABOUT</MobileMenuLink>
          </MobileMenuItem>
          <MobileMenuItem>
            <MobileMenuLink>MIND-MAP</MobileMenuLink>
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
      </MobileMenuWrapper>
    </Container>
  );
};
