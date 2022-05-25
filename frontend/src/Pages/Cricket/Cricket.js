import React from "react";
import CricSubNavBar from "../../Components/Navbar/CricSubNavBar";
import CricFeaturedMatches from "../../Components/Cricket/CricFeaturedMatches";
import CricketMainContent from "../../Components/Cricket/CricketMainContent";

function Cricket() {
  return (
    <>
      <CricSubNavBar />
      <CricFeaturedMatches></CricFeaturedMatches>
      <CricketMainContent></CricketMainContent>
    </>
  );
}

export default Cricket;
