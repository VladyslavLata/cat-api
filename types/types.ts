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

export interface IPath {
  path: string,
  currentpath: string,
}

// export interface ICurrentPath {
//   bgColor: "bgLinkVoting" | "bgLinkBreeds" | "bgLinkGallery",
//   img: img,
//   currentPath: string,
// }