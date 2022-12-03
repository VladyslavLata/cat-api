import { ReactNode } from "react";

export interface IChildren {
children: ReactNode,
}

export interface INavLink {
  path: string,
  bgColor: "bgLinkVoting" | "bgLinkBreeds" | "bgLinkGallery",
  img: string,
  text: string,
}