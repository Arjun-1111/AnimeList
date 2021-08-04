import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Navbar from "../components/Navbar/Navbar";
import HeroImg from "../components/HeroImg/HeroImg";
import Spinner from "../components/Spinner/Spinner.component";
import SearchBar from "../components/SearchBar/SearchBar.component";
import Footer from "../components/Footer/Footer";
import Results from "./Results";
import TopAiring from "./TopAiring";
import UpComing from "./UpComing";

const HomePage = () => {
  const { searches } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  // set loading time to 1000ms as it require to fetch the data from API end Point
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />

      {searches.hasSearchTerm ? (
        <>
          <SearchBar />
          <Results />
        </>
      ) : loading ? (
        <Spinner />
      ) : (
        <>
          <SearchBar />
          <HeroImg />
          <TopAiring />
          <UpComing />
          <Footer />
        </>
      )}
    </>
  );
};

export default HomePage;
