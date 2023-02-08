import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

interface img {
  src: string;
}

export interface INavPath {
  pathname: string;
  query?: {
    page?: string;
    limit?: number;
    order?: "ASC" | "DESC" | "RANDOM";
    has_breeds?: number;
    mime_types?: string;
    category_ids?: string;
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

export interface IFavouriteLink {
  svg: any,
  link: INavPath,
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

export interface ICateory {
  id: number,
  name: string,
}

export interface IDataCat {
  breeds: IBreeds[] | [];
  id: string;
  url: string;
}

export interface IFavouriteDataCat {
  id: number,
  image_id: string,
  image: {
    id: string,
    url: string,
  }
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
  mime_types: string,
  category_ids: string | number,
}

export interface IDataSelect {
  name: "limit" | "breed_ids" | "order" | "mime_types";
  label: string,
  dataOptions: ISelect[],
}

export interface IVotingDataMessage {
  catId: string,
  value?: number,
  favouriteCatId?: number | null,
  date: {
    hours: number,
    minutes: number,
  }
}