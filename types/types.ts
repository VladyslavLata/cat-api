import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

interface img {
  src: string;
}

interface INavPath {
  pathname: string;
  query: {
    page?: string;
    limit?: number;
    order?: "ASC" | "DESC" | "RANDOM";
    has_breeds?: number;
    mime_types?: string;
  };
}

export interface INavLink {
  path: INavPath;
  bgColor: "bgLinkVoting" | "bgLinkBreeds" | "bgLinkGallery";
  img: img;
  text: string;
}

export interface IPath {
  path: INavPath;
  currentpath: string;
}

export interface IUrl extends IPath {
  href: INavPath;
}

export interface IBreeds {
    id: string;
    name: string;
    description: string;
    temperament: string;
    origin: string;
    life_span: string;
    weight: {
    metric: string;
  };
}

export interface IDataCat {
  breeds: IBreeds[] | [];
  id: string;
  url: string;
}

export interface ISelect {
  value: string,
  option: string,
}

// export interface ICurrentPath {
//   bgColor: "bgLinkVoting" | "bgLinkBreeds" | "bgLinkGallery",
//   img: img,
//   currentPath: string,
// }

export interface ISelectsValue{
  limit: string,
  breed_ids: string,
  order: string,
  mime_types: string,}