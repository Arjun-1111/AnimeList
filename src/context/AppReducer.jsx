export const AppReducer = (state, action) => {
  switch (action.type) {
    case "TOP_AIRING_ITEMS":
      return { ...state, topAiring: action.payload };
    case "SEARCHED_ITEMS":
      return {
        ...state,
        searches: action.payload,
      };

    default:
      return state;
  }
};
