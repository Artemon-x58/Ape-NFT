import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 54px;
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  z-index: 10;

  @media screen and (min-width: 768px) {
    top: 20px;
    left: 28px;
    right: 28px;
  }
`;

export const Logo = styled.a``;

export const LogoSvg = styled.svg`
  width: 48px;
  height: 32px;
  fill: ${(props) => (props.$isActive ? "#fff" : "#1e1e1e")};

  transition: fill 250ms linear;

  &:hover {
    fill: ${(props) => (props.$isActive ? "#DC3B5A" : "#fff")};
  }
`;

export const SocialSvg = styled.svg`
  width: 16px;
  height: 16px;
  padding: 10px;
  fill: ${(props) => (props.$isActive ? "#ffffff" : "#1e1e1e")};
  transition: fill 250ms linear;

  &:hover {
    fill: #fff;
    fill: ${(props) => (props.$isActive ? "#DC3B5A" : "#fff")};
  }
`;

export const Menu = styled.button`
  border: none;
  background: transparent;
  font-family: "Messina Sans Mono", sans-serif;
  font-weight: 600;
  font-size: 12px;
  line-height: 117%;
  color: ${(props) => (props.$isActive ? "#fff" : "#1e1e1e")};
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: ${(props) => (props.$isActive ? "#DC3B5A" : "#f0f0f0")};
    text-decoration: underline;
  }
`;

export const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SocialListWrapperItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background: ${(props) =>
    props.$isActive ? "rgba(255, 255, 255, 0.1)" : "rgba(30, 30, 30, 0.1)"};
`;

export const SocialListItem = styled.li``;

export const SocialListLink = styled.a``;
