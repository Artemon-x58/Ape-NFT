import { Container } from "../Container/Container.styled";
import { FooterStyled, FooterText } from "./Footer.styled";

export const Footer = () => {
  return (
    <Container>
      <FooterStyled>
        <FooterText>&copy; Yacht ape 2024 all rights reserved</FooterText>
      </FooterStyled>
    </Container>
  );
};
