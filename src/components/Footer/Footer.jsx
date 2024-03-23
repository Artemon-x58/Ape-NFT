import { Container } from "../Container/Container.styled";
import { FooterStyled, FooterText } from "./Footer.styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <FooterText>&copy; Yacht ape 2024 all rights reserved</FooterText>
      </Container>
    </FooterStyled>
  );
};
