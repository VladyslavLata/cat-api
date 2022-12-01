import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    red: '#ff0000',
    green: '#00ff7f',
    black: '#000',
    white: '#fff',
    gray: '#929292',
    text: '#2a2a2a',
    bgWhite: '#fff',
    bgPrimary: '#ffebcd',
    bgSecondary: '#deb887',
    primary: '#07c',
    secondary: '#05a',
    accent: '#c71585',
    muted: '#f6f6f6',
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'Jost, sans-serif',
  },
  fontSizes: {
    xs: '10px',
    s: '12px',
    m: '26px',
    l: '20px',
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
