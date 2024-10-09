import { Suspense, lazy} from 'react'
import '../Items.css'

import house15 from '../../assets/house15.jpg'
import house16 from '../../assets/house16.jpg'
import house17 from '../../assets/house17.jpg'
import house18 from '../../assets/house18.jpg'
import Heart from "../../assets/Vector.svg";
import Agl from "../../assets/bhl.png";
import HandModel from "../../assets/hand-presenting-model-house.png";

import AuctionItems from '../shared/AuctionItems.Component';

const LazyAuctionItems = lazy(() => import("../shared/AuctionItems.Component"));

const auctionItems = [
    {
        img: house15,
        daysLeft: "3 Days left",
        descr: "4 Bedroom Bungalow, own compound, all ensuite",
        location: "Kitisuru,Nairobi, Kenya",
        start: "3rd Oct,2024",
        end: "5th Oct,2024",
    },
    {
        img: house16,
        daysLeft: "3 Days left",
        descr: "4 Bedroom Bungalow, own compound, all ensuite",
        location: "Kitisuru,Nairobi, Kenya",
        start: "3rd Oct,2024",
        end: "5th Oct,2024",
    },
    {
        img: house17,
        daysLeft: "2 Days left",
        descr: "4 Bedroom Bungalow, own compound, all ensuite",
        location: "Kitisuru,Nairobi, Kenya",
        start: "3rd Oct,2024",
        end: "5th Oct,2024",
    }, 
    {
        img: house18,
        daysLeft: "2 Days left",
        descr: "4 Bedroom Bungalow, own compound, all ensuite",
        location: "Kitisuru,Nairobi, Kenya",
        start: "3rd Oct,2024",
        end: "5th Oct,2024",
    }
]

const Items4 = () => {
  return (
    <div>
       <div className="group2">
          <div className="top-group2">
            <img className="agl" src={Agl} alt="" />
            <div className="">
              <p className="p1">Great deals for your money</p>
              <button className="reg-btn">Register Now</button>
            </div>
            <p className="p2">*Terms & Conditions Apply </p>
            <p className="p3">www.agilebidhub.co.ke</p>
            <p className="p4">Own your dream home today! </p>
            <img className="hand-model" src={HandModel} alt="" />
          </div>
        </div>

        <Suspense fallback={<div>Loading please wait...</div>}>
        <LazyAuctionItems title='Saved for later' items={auctionItems} />
        </Suspense>
        

        

    </div>
  )
}

 export default Items4
