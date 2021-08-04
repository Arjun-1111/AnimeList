import React, { useEffect, useState } from "react";
import TopUpComing from "../components/UpComing/UpComing";
import API from "../Api";
import Spinner from "../components/Spinner/Spinner.component";

const UpComing = () => {
  const [upComingList, setUpComingList] = useState({ anime: [] });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    API.upcoming_anime().then((data) =>
      setUpComingList({ anime: [...data.anime] })
    );
  }, [upComingList]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <TopUpComing value={upComingList.anime} title="UP COMING" />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default UpComing;
