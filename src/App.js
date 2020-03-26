import React from "react";
import "./App.css";

import Stats from "./components/Stats";
import CountrySelector from "./components/CountrySelector";
import Header from "./components/Header";
import Footer from "./components/Footer";


function IndexPage() {
  return (
    <div className="body">
      <Header />
      <div className="index">
        <Stats url="https://covid19.mathdro.id/api"></Stats>
        <CountrySelector />
        
      </div>
       <Footer /> 
    </div>
  );
}

export default IndexPage;
