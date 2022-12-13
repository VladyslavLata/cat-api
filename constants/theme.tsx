import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    textPrimary: '#1D1D1D',
    textSecondary: "#8C8C8C",
    testAccentPrimary: "#FF868E",
    testAccentSecondary: "#FFFFFF",
    bgPrimary: "#F8F8F7",
    bgSecondary: '#FFFFFF',
    bgAccentPrimary: "#FF868E",
    bgAccentSecondary: "#FBE0DC",
    bgLinkVoting: "#B4B7FF",
    bgLinkBreeds: "#97EAB9",
    bgLinkGallery: "#FFD280",
    bgBorder: "rgba(255, 255, 255, 0.6)",
 
  },
  space: [0, 4, 5, 10, 15, 16, 18, 20, 25, 30, 40, 50, 60, 75, 80, 100, 117],
  fonts: {
    body: 'Jost, sans-serif',
  },
  fontSizes: {
    xs: '10px',
    s: '12px',
    m: '20px',
    l: '26px',
    xl: '36px',
    xxl: "44px",
  },
  fontWeights: {
    normal: 400,
    medium:500,
 
  },
  lineHeights: {
    body: 1.5,
    heading: 1.32,
    text: 1.45,
  },
  borders: {
    none: 'none',
    xs: '1px solid',
    s: '2px solid',
    m: '3px solid',
    l: "4px solid",
  },
  radii: {
    none: '0',
    s: '10px',
    m: '20px',
    // lg: '16px',
    // round: '50%',
  },
  shadows: {
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
  }
};
