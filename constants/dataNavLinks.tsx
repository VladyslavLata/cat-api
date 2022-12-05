import { INavLink } from "../types/types";
import bgVote  from "../public/Vote.png";
import bgBreeds from "../public/breeds.png";
import bgGallery from "../public/gallery.png";

export const dataNavLinks: INavLink[] = [
  {
    path: "/voting",
    bgColor: "bgLinkVoting",
    img: bgVote,
    text: "voting",
  },
  {
    path: "/breeds",
    bgColor: "bgLinkBreeds",
    img: bgBreeds,
    text: "breeds",
  },
  {
    path: "/gallery",
    bgColor: "bgLinkGallery",
    img: bgGallery,
    text: "gallery",
  },
];
