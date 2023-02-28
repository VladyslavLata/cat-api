import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle<{lightTheme: boolean}>`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: ${p=> p.lightTheme ? p.theme.colors.bgPrimary : p.theme.colors.bgDarkThemeSecondary};
  transition: background-color 300ms cubic-bezier(0.4, 0 , 0.2, 1);
}


body {
  width: 100vw;
  position: relative;
  z-index: -2;
  line-height: 1.5;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

img,
svg {
  display: block;
}

body .carousel.carousel-slider {
  overflow: visible;
}

body .carousel .control-dots {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  display: inline-flex;
  gap: 5px;
  width: auto;
  margin: 0;
  padding: 10px;
  background-color: #fff;
  border-radius: 20px;
}

/* @media (prefers-color-scheme: dark) {
  html {
    color-scheme: dark;
  }
  body {
    color: red;
    background: blue;
  }
} */

.visibility-hidden {
visibility: hidden;
pointer-events: none;
}
` 