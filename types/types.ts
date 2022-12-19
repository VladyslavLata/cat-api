import { ReactNode } from "react";

export interface IChildren {
children: ReactNode,
}

interface img {
  src: string;
}

interface INavPath {
  pathname: string,
  query: {
    page?: number,
    limit?: number,
    order?: "ASC" | "DESC",
    has_breeds?: number,
  }

      
}

export interface INavLink {
  path: INavPath,
  bgColor: "bgLinkVoting" | "bgLinkBreeds" | "bgLinkGallery",
  img: img,
  text: string,
}

export interface IPath {
  path: INavPath,
  currentpath: string,
}

export interface IUrl extends IPath {
  href: INavPath
}
// export interface ICurrentPath {
//   bgColor: "bgLinkVoting" | "bgLinkBreeds" | "bgLinkGallery",
//   img: img,
//   currentPath: string,
// }