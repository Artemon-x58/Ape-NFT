import styled from "styled-components";
import "../../../public/fonts/MessinaSans/stylesheet.css";
import { Container } from "../Container/Container.styled";

export const MobileMenuContainer = styled(Container)`
  height: 100%;
`;

export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  padding-top: 130px;
  padding-bottom: 24px;
  background-color: #181818;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => (props.$isActive ? "0%" : "100%")});
  visibility: ${(props) => (props.$isActive ? "visible" : "hidden")};

  @media screen and (min-width: 768px) {
    background-color: transparent;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  height: 75%;
  flex-direction: column;
  justify-content: space-between;
`;

export const MobileMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 10;
`;

export const MobileMenuItem = styled.li``;

export const MobileMenuLink = styled.a`
  display: block;
  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 121%;
  color: #fff;
  text-align: center;

  transition: color 250ms linear;

  &:hover {
    color: #dc3b5a;
    text-decoration: underline;
  }
`;

export const MobileMenuText = styled.p`
  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;
  text-align: center;
  color: #fff;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
