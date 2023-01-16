import { IDataSelect } from "../types/types";

export const selectLimit = [
  { value: "5", option: "Limit: 5" },
  { value: "10", option: "Limit: 10" },
  { value: "15", option: "Limit: 15" },
  { value: "20", option: "Limit: 20" },
];

export const defaultSelectsValue = {
  limit: "10",
  breed_ids: "allBreeds",
  order: "ASC",
  mime_types: "jpg,png",
  category_ids: "allCategories",
};

export const dataSelects: IDataSelect[]  = [
  {
    name: "mime_types",
    label: "Type",
    dataOptions: [
      { value: "", option: "All" },
      { value: "jpg,png", option: "Static" },
      { value: "gif", option: "Animated" },
    ],
  },
  {
    name: "order",
    label: "order",
    dataOptions: [
      { value: "RANDOM", option: "Random" },
      { value: "DESC", option: "Desc" },
      { value: "ASC", option: "Asc" },
    ],
  },
  {
    name: "limit",
    label: "limit",
    dataOptions: selectLimit,
  },
];
