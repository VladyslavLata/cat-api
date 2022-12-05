import { ReactNode } from "react";

export interface IChildren {
children: ReactNode,
}

interface img {
  src: string;
}

export interface INavLink {
  path: string,
  bgColor: "bgLinkVoting" | "bgLinkBreeds" | "bgLinkGallery",
  img: img,
  text: string,
}