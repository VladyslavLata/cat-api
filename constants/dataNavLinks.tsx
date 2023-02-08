import { INavLink, IFavouriteLink } from "../types/types";
import bgVote from "../public/Vote.png";
import bgBreeds from "../public/breeds.png";
import bgGallery from "../public/gallery.png";
import Like from "../public/like.svg";
import Favorite from "../public/fav.svg";
import Dislike from "../public/dislike.svg";

export const dataNavLinks: INavLink[] = [
  {
    path: {
      pathname: "/voting",
      // query: {
      //   order: "RANDOM",
      //   limit: 1,
      // },
    },
    bgColor: "bgLinkVoting",
    img: bgVote,
    text: "voting",
  },
  {
    path: {
      pathname: "/breeds",
      query: {
        order: "ASC",
        has_breeds: 1,
        limit: 10,
        page: "0",
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
        order: "RANDOM",
        limit: 10,
        mime_types: "jpg,png",
        category_ids: "",
        page: "0",
      },
    },
    bgColor: "bgLinkGallery",
    img: bgGallery,
    text: "gallery",
  },
];

export const dataFavoriteLink: IFavouriteLink[] = [
  {
    link: {
      pathname: "/likes",
      query: {
        limit: 10,
        page: "0",
      },
    },
    svg: Like,
  },
  {
    link: {
      pathname: "/favourites",
      query: {
        limit: 10,
        page: "0",
      },
    },
    svg: Favorite,
  },
  {
    link: {
      pathname: "/dislike",
      query: {
        limit: 10,
        page: "0",
      },
    },
    svg: Dislike,
  },
];
