import React, { useContext } from "react";
import GridTopAiringUpComing from "../components/GridTopAiring&UpComing/GridTopAiringUpComing";
import { GlobalContext } from "../context/GlobalContext";
import Spinner from "../components/Spinner/Spinner.component";

const TopAiring = () => {
  const { topAiring } = useContext(GlobalContext);
  return (
    <>
      {topAiring.hasOwnProperty("top") ? (
        <GridTopAiringUpComing value={topAiring.top} title="Top Airing" />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default TopAiring;
