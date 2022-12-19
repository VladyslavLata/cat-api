import { INavLink } from "../types/types";
import bgVote from "../public/Vote.png";
import bgBreeds from "../public/breeds.png";
import bgGallery from "../public/gallery.png";

export const dataNavLinks: INavLink[] = [
  {
    path: {
      pathname: "/voting",
      query: {
        page: 0,
        limit: 10,
        order: "ASC",
        has_breeds: 1,
      },
    },
    bgColor: "bgLinkVoting",
    img: bgVote,
    text: "voting",
  },
  {
    path: {
      pathname: "/breeds",
      query: {
        page: 0,
        limit: 10,
        order: "ASC",
        has_breeds: 1,
      },
    },
    bgColor: "bgLinkBreeds",
    img: bgBreeds,
    text: "breeds",
  },
  {
    path: {
      pathname: "/gallery",
      query: {
        page: 0,
        limit: 10,
        order: "ASC",
        has_breeds: 1,
      },
    },
    bgColor: "bgLinkGallery",
    img: bgGallery,
    text: "gallery",
  },
];
