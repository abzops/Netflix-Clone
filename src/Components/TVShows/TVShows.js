import React from "react";
import Banner from "./Banner/Banner";
import OnTheAir from "./RowPost/OnTheAir";
import Popular from "./RowPost/Popular";
import TopRated from "./RowPost/TopRated";
function TVShows() {
  return (
    <div>
      <Banner />
      <OnTheAir title="Now on LIVE" />
      <TopRated title="Top Rated"/>
      <Popular title="Popular"/>
    </div>
  );
}

export default TVShows;
