import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 54px;
  position: fixed;
  top: 16px;
  left: 16px;
  right: 16px;

  @media screen and (min-width: 768px) {
    top: 20px;
    left: 28px;
    right: 28px;
  }
`;

export const HeaderWrapper = styled.div``;

export const Logo = styled.a`
  visibility: ${(props) => (props.$isScrolled ? "hidden" : "viseble")};
`;

export const LogoSvg = styled.svg`
  width: 48px;
  height: 32px;

  fill: #1e1e1e;

  transition: fill 250ms linear;

  &:hover {
    fill: ${(props) => (props.$isActive ? "#DC3B5A" : "#fff")};
  }

  @media screen and (min-width: 1280px) {
    width: 72px;
    height: 50px;
  }
`;

export const SocialSvg = styled.svg`
  width: 16px;
  height: 16px;
  padding: 10px;
  fill: ${({ $isScrolled }) => ($isScrolled ? "#ffffff" : "#1e1e1e")};
  transition: fill 250ms linear;

  &:hover {
    fill: ${({ $isScrolled }) => ($isScrolled ? "#DC3B5A" : "#fff")};
  }

  @media screen and (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`;

export const Menu = styled.button`
  border: none;
  background: transparent;

  font-weight: 600;
  line-height: 117%;
  color: ${({ $isScrolled }) => ($isScrolled ? "#ffffff" : "#1e1e1e")};
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: ${({ $isScrolled }) => ($isScrolled ? "#DC3B5A" : "#fff")};
    text-decoration: underline;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 119%;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
`;

export const SocialListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
  }
`;

export const SocialListLink = styled.a``;

export const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;

  & > li {
    border-radius: ${({ $deviceType, $isOpenListNav }) =>
      $deviceType === "mobile" || !$isOpenListNav ? "8px" : "0 8px 8px 0"};
  }
`;

export const HeaderNavList = styled.ul`
  display: flex;
  transition: transform 250ms linear;
  transform: translateX(
    ${({ $isOpenListNav }) => ($isOpenListNav ? "0%" : "150%")}
  );
  visibility: ${({ $deviceType }) =>
    $deviceType === "mobile" ? "hidden" : "visible"};
  & li:first-child {
    border-radius: 12px 0 0 12px;
  }
`;

export const HeaderNavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;

  backdrop-filter: blur(12px);
  background: ${(props) =>
    props.$isScrolled ? "rgba(255, 255, 255, 0.1);" : "rgba(30, 30, 30, 0.1);"};

  @media screen and (min-width: 1280px) {
    width: 80px;
    height: 80px;
  }
`;

export const HeaderNavItemLink = styled.a`
  transition: color 250ms linear;

  font-weight: 600;
  line-height: 119%;
  color: #1e1e1e;
  color: ${(props) => (props.$isScrolled ? "#fff" : "#1e1e1e")};

  &:hover,
  &:focus {
    color: #fff;
    color: ${(props) => (props.$isScrolled ? "#dc3b5a;" : "#fff")};
    text-decoration: underline;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 119%;
  }
`;
