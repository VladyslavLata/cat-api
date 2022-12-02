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
  },
  space: [0, 4, 5, 10, 15, 16, 18, 20, 25, 30, 40, 50, 60, 75, 100],
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
    // none: 'none',
    // s: '1px solid',
    // m: '3px solid',
    // l: '5px solid',
  },
  radii: {
    // none: '0',
    // sm: '3px',
    // md: '8px',
    // lg: '16px',
    // round: '50%',
  },
};
