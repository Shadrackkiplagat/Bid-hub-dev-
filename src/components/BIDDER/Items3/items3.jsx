import React from "react";
import { Suspense, lazy } from "react";
import "../Items.css";

import AuctionItems from "../shared/AuctionItems.Component";

import Item5 from "../../../assets/Item5.png";
import Item6 from "../../../assets/Item6.png";
import Item7 from "../../../assets/Item7.png";
import Item8 from "../../../assets/Item8.png";
import Heart from "../../../assets/Vector.svg";
import HandModel from "../../../assets/hand-presenting-model-house.png";
import bhl from "../../../assets/bhl.png";

const LazyAuctionItems = lazy(() => import("../shared/AuctionCard.Component"));
const auctionItems = [
  {
    img: Item6,
    daysLeft: "3 Days left",
    descr: "4 Bedroom Bungalow, own compound, all ensuite",
    location: "Kitisuru,Nairobi, Kenya",
    start: "3rd Oct,2024",
    end: "5th Oct,2024",
  },
  {
    img: Item5,
    daysLeft: "3 Days left",
    descr: "4 Bedroom Bungalow, own compound, all ensuite",
    location: "Kitisuru,Nairobi, Kenya",
    start: "3rd Oct,2024",
    end: "5th Oct,2024",
  },
  {
    img: Item7,
    daysLeft: "3 Days left",
    descr: "4 Bedroom Bungalow, own compound, all ensuite",
    location: "Kitisuru,Nairobi, Kenya",
    start: "3rd Oct,2024",
    end: "5th Oct,2024",
  },
  {
    img: Item8,
    daysLeft: "3 Days left",
    descr: "4 Bedroom Bungalow, own compound, all ensuite",
    location: "Kitisuru,Nairobi, Kenya",
    start: "3rd Oct,2024",
    end: "5th Oct,2024",
  },
];

const Items3 = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading please wait...</div>}>
        <LazyAuctionItems title="Ending soon" items={auctionItems} />
      </Suspense>
    </div>
  );
};

export default Items3;
