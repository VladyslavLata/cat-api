import axios from "axios";
import { ParsedUrlQuery } from "querystring";

const CAT_API_KEY =
  "live_183pPOLZ0OGHbYCapJSCCPb9hi7Z47z9fXbSEuadBnv6yVR3qwa40g5vYyDYfLoA";

axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] = CAT_API_KEY;


export const getCatGallery = async (param: ParsedUrlQuery) => {
  const respons = await axios.get("/images/search", { params: param });
  return {
    catsData: respons.data,
    amountCats: respons.headers["pagination-count"],
  };
};

export const getImgForVoting = async () => {
  const respons = await axios.get("/images/search", {
    params: { order: "RANDOM", limit: 1 },
  });
  return respons.data;
};

export const getVotedCat = async (param: ParsedUrlQuery) => {
  const respons = await axios.get("/votes", { params: param });
  return {
    likeCatsData: respons.data,
    amountCats: respons.headers["pagination-count"],
  };
}

export const addVoteForCat = async (id: string, voteValue: number) => {
  await axios.post("/votes", { image_id: id, value: voteValue });
};

export const getAllBreeds = async () => {
  const respons = await axios.get("/breeds");
  return respons.data;
};

export const getBreedInfo = async (param: ParsedUrlQuery) => {
  const respons = await axios.get("/images/search", { params: param });
  return respons.data;
};

export const getCategories = async () => {
  const respons = await axios.get("/categories");
  return respons.data;
};

export const addFovouriteCat = async (id: string) => {
  const respons = await axios.post("/favourites", { image_id: id });
  return respons.data;
};

export const removeFavouriteCat = async (id: number) => {
  await axios.delete(`/favourites/${id}`);
};

export const getFavouritesCats = async (param: ParsedUrlQuery) => {
  const respons = await axios.get("/favourites", { params: param });
  return {
    favouriteCatsData: respons.data,
    amountCats: respons.headers["pagination-count"],
  };
};

export const uploadCatImage = async (fileCat: File) => {
  const respons = await axios({
    url: "/images/upload",
    method: "POST",
    data: { file: fileCat },
    headers: { "Content-Type": "multipart/form-data" },
  });
  return respons.data;
};
