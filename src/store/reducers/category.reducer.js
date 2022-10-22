import { categoryTypes } from "../types";

const { SELECT_CATEGORY, GET_CATEGORY } = categoryTypes;

const initialState = {
  categories: null,
  selected: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const indexCategory = state.categories.findIndex(
        (category) => category.id === action.categoryId
      );
      if (indexCategory === -1) return state;
      return {
        ...state,
        selected: state.categories[indexCategory],
      };

    case GET_CATEGORY:
      return {
        ...state,
        categories: action.categories,
      };

    default:
      return state;
  }
};

export default categoryReducer;
