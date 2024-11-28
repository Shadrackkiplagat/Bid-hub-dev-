import React from "react";
// import Heading2 from './headings folder/Heading2/Heading2'
// import Heading3 from './headings folder/Heading3/Heading3'
// import Heading4 from './headings folder/Heading4/Heading4'
import ImageSlider from "../BIDDER/Imageslider/Imageslider";

import Items2 from "../BIDDER/Items2/items2";

import Items3 from "../BIDDER/Items3/items3";

import Items4 from "../BIDDER/Items4/items4";
import Nav2 from "../BIDDER/Nav2/Nav2";
import Navbar from "../BIDDER/Navbar/Navbar";
// import Tittle from './Tittle/Tittle'

import Items from "../BIDDER/Items/items";
import Footer from "../BIDDER/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider />
      <Nav2 />
      <div className="container">
        {/* <Tittle /> */}
        <Items />
        {/* <Heading2/> */}
        <Items2 />
        {/* <Heading3/> */}
        <Items3 />
        {/* <Heading4/> */}
        <Items4 />

        {/* <House120/> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
