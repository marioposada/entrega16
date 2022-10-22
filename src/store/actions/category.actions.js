import { categoryTypes } from "../types";

const { SELECT_CATEGORY, GET_CATEGORY } = categoryTypes;
import { tecnicos } from "../../constants/data/tecnicos";


export const selectCategory = (id) => ({
  type: SELECT_CATEGORY,
  categoryId: id,
});

export const getCategories = () => {

    return {
    type: GET_CATEGORY,
    categories: tecnicos,
    };
};


