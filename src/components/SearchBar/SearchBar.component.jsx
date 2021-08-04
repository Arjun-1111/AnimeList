import React, { useState, useEffect, useContext } from "react";
import { Wrapper, Content } from "./SearchBar.style";
import searchIcon from "../../images/search-icon.svg";
import API from "../../Api";
import { GlobalContext } from "../../context/GlobalContext";

const SearchBar = () => {
  const { searchItem, searches } = useContext(GlobalContext);
  const [searchState, setSearchState] = useState("");
  const [hasSearchTerm, setHasSearchTerm] = useState(false);
  const [prevSearchTerm, setPrevSearchTerm] = useState();

  // calling the search API Endpoint and passing the data to the global context and waiting for 300ms to request to the API and passing hasSearchTerm  to global Context
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchState === "" || searchState === " ") {
        setHasSearchTerm(false);
        searchItem({ hasSearchTerm });
      } else {
        setHasSearchTerm(true);
        if (searchState.length >= 3 && searchState !== prevSearchTerm) {
          setPrevSearchTerm(searchState);

          API.search(searchState).then((data) =>
            searchItem({ ...data, hasSearchTerm })
          );
        }
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchState, hasSearchTerm, searchItem, searches, prevSearchTerm]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Anime"
          onChange={(e) => setSearchState(e.currentTarget.value)}
          value={searchState}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
