import { useStore } from "../Store/Store";
import queryString from "query-string";

export const useChangeSelectsValue = () => {
  const { changeAllSelectsValue, selectsValue } = useStore();

  const changeGallerySelectsValue = (currentUrl: string) => {
    const { query, url } = queryString.parseUrl(currentUrl);
    if (url !== "/gallery") {
      return;
    }
    console.log(url);
    changeAllSelectsValue({
      ...selectsValue,
      limit: `${query.limit ? query.limit : "10"}`,
      category_ids: `${
        query?.category_ids && query?.category_ids !== ""
          ? query.category_ids
          : "allCategories"
      }`,
      mime_types: `${query?.mime_types ? query.mime_types : ""}`,
      order: `${query?.order ? query.order : "RANDOM"}`,
    });
  };

  const changeBreedsSelectsValue = (currentUrl: string) => {
    const { query, url } = queryString.parseUrl(currentUrl);

    if (url !== "/breeds") {
      return;
    }
    // console.log(url);
    changeAllSelectsValue({
      ...selectsValue,
      limit: `${query.limit ? query.limit : "10"}`,
      breed_ids: `${query?.breed_ids ? query.breed_ids : "allBreeds"}`,
    });
  };

  return { changeGallerySelectsValue, changeBreedsSelectsValue };
};
