import HeaderAuth from "@/components/HeaderAuth/headerAuth";
// import ProfileSection from "@/sections/ProfileSection/profileSection";
// import ResultSection from "@/sections/ResultSection/resultSection";
import SearchSection from "@/sections/SearchSection/searchSection";
import React from "react";

const page = () => {
  return (
    <>
      <HeaderAuth />
      <SearchSection />
      {/* <ResultSection /> */}
    </>
  );
};

export default page;
