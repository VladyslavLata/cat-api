import { createMedia } from "@artsy/fresnel";

const ExampleAppMedia = createMedia({
  breakpoints: {
    xs: 0,
    s: 375,
    m: 768,
    l: 1440,
  },
});

// Make styles for injection into the header of the page
export const mediaStyles = ExampleAppMedia.createMediaStyle();

export const { Media, MediaContextProvider } = ExampleAppMedia;
