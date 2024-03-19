import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 54px;
`;

export const Logo = styled.a``;

export const LogoSvg = styled.svg`
  width: 48px;
  height: 32px;
  fill: #1e1e1e;
`;

export const LogoUse = styled.use``;

export const Menu = styled.button`
  border: none;
  background: transparent;

  font-weight: 600;
  font-size: 12px;
  line-height: 117%;
  color: #1e1e1e;
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
  padding: 10px;
  width: 48px;
  height: 48px;

  backdrop-filter: blur(12px);
  background: rgba(30, 30, 30, 0.1);
`;

export const SocialListItem = styled.li``;

export const SocialListLink = styled.a``;

export const SocialSvg = styled.svg`
  width: 16px;
  height: 16px;

  fill: #1e1e1e;

  transition: fill 250ms linear;

  &:hover,
  &:focus {
    fill: #f0f0f0;
  }
`;

export const SocialUse = styled.use``;
