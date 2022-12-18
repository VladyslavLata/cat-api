import axios from "axios";

const CAT_API_KEY = "live_Sv4k5xsNdGpxtq6QAMZhiPDGUNlns90Li9QIs8b22IT6zFxHsGLJtC5AOuftuzuB";

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = CAT_API_KEY;

export const getCatGallery = async (page: string = "1") => {
  const respons = await axios.get("/images/search", { params: { limit: "5", order: "ASC", page: `${page}` } });
  return respons.data;
}
