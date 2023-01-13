import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Home = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* header */}
      <Header />

      {/* main container */}
      <MainContainer />
    </div>
  );
};

export default Home;
