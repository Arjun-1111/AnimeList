import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";
// import SearchReducer from "./SearchReducer";
import API from "../Api";

const initialState = {
  topAiring: {},
  searches: {},
};

// create context
export const GlobalContext = createContext(initialState);

// provider

export const GlobalProvider = ({ children }) => {
  // create reducer
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   actions
  const topAiringItems = (data) => {
    dispatch({
      type: "TOP_AIRING_ITEMS",
      payload: data,
    });
  };

  const searchItem = (data) => {
    dispatch({
      type: "SEARCHED_ITEMS",
      payload: data,
    });
  };

  useEffect(() => {
    API.top_items_airing(1).then((data) =>
      // setState({ ...initialState, top: [...data.top] })
      topAiringItems({ ...data })
    );
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        topAiring: state.topAiring,
        topAiringItems,
        searchItem,
        searches: state.searches,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
