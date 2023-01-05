import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      textPrimary: string;
      textSecondary: string;
      testAccentPrimary: string;
      testAccentSecondary: string;
      bgPrimary: string;
      bgSecondary: string;
      bgAccentPrimary: string;
      bgAccentPrimaryTransparent: string;
      bgAccentSecondary: string;
      bgLinkVoting: string;
      bgLinkBreeds: string;
      bgLinkGallery: string;
      bgBorder: string;
     
    };
    space: number[];
    fonts: {
      body: string;
    };
    fontSizes: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    fontWeights: {
      normal: number;
      medium: number;
    };
    lineHeights: {
      body: number;
      heading: number;
      text: number;
    };
    borders: {
      none: string;
      xs: string;
      s: string;
      m: string;
      l: string;
    };
    radii: {
      none: string;
      s: string;
      m: string;
      // lg: string;
      // round: string;
    };
    shadows: {
    boxShadow: string;
  }
  }
}
