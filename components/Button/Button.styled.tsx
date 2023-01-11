import styled from "styled-components";

export const Btn = styled.button<{ btn: "main" | "seccond" }>`
  display: flex;
  gap: ${(p) => p.theme.space[3]}px;
  justify-content: center;
  align-items: center;
  padding: ${(p) => `12px ${p.theme.space[8]}px`};
  font-size: ${(p) => p.theme.fontSizes.s};
  font-weight: ${(p) => p.theme.fontWeights.medium};
  line-height: ${(p) => p.theme.lineHeights.heading};
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: ${(p) => {
    switch (p.btn) {
      case "main": {
        return p.theme.colors.bgAccentSecondary;
      }
      case "seccond": {
        return p.theme.colors.bgAccentPrimary;
      }
      default: {
        return p.theme.colors.bgPrimary;
      }
    }
  }};
  color: ${(p) => {
    switch (p.btn) {
      case "main": {
        return p.theme.colors.testAccentPrimary;
      }
      case "seccond": {
        return p.theme.colors.testAccentSecondary;
      }
      default: {
        return p.theme.colors.textSecondary;
      }
    }
  }};
  border: ${(p) => p.theme.borders.none};
  border-radius: ${(p) => p.theme.radii.s};
  cursor: pointer;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:disabled {
    color: ${(p) => p.theme.colors.textSecondary};
    background-color: ${(p) => p.theme.colors.bgPrimary};
    cursor: default;
  }

  &:hover:not(:disabled),
  :focus:not(:disabled) {
    color: ${(p) => {
      switch (p.btn) {
        case "main": {
          return p.theme.colors.testAccentSecondary;
        }
        case "seccond": {
          return p.theme.colors.testAccentPrimary;
        }
        default: {
          return p.theme.colors.textSecondary;
        }
      }
    }};
    background-color: ${(p) => {
      switch (p.btn) {
        case "main": {
          return p.theme.colors.bgAccentPrimary;
        }
        case "seccond": {
          return p.theme.colors.bgAccentSecondary;
        }
        default: {
          return p.theme.colors.bgPrimary;
        }
      }
    }};
  }
`;
