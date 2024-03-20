import styled from "styled-components";
import "../../../public/fonts/MessinaSans/stylesheet.css";

export const MobileMenuWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 130px;
  padding-bottom: 24px;
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
  display: block;
  margin-top: auto;

  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
`;
