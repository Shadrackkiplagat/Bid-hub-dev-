import React, { useState } from "react";

// import "./AddListings.css";
// import backicon from "../../../../assets/Shape/Shape/Status/backicon.svg";
import backicon from "../../../assets/Shape/Shape/Status/backicon.svg";
import num1 from "../../../assets/Shape/Shape/Status/num1.svg";
import num2 from "../../../assets/Shape/Shape/Status/num2.svg";
import num3 from "../../../assets/Shape/Shape/Status/num3.svg";
import num4 from "../../../assets/Shape/Shape/Status/num4.svg";
import help from "../../../assets/Shape/Shape/Status/help.svg";
import arrow from "../../../assets/Shape/Shape/Status/arrow.svg";
import calendar from "../../../assets/Shape/Shape/Status/calendar.svg";

const AddListings = ({ openAddListings, setOpenAddListings, setData }) => {
  const [listings, setListings] = useState({
    productName: "",
    // auctionDate: "",
    ReasonForAuction: "",
    Location: "",
    OwnersName: "",
    OwnerPhoneNo: "",
    AuctioneerId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListings({ ...listings, [name]: value });
    setData({ ...listings, [name]: value });
  };

  const handleSubmit = async () => {
    const apiUrl = "https://localhost:7071/api/Products";

    try {
      const response = await axios.post(apiUrl, listings, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201 || response.status === 200) {
        alert("Listing added successfully!");
        setListings({
          productName: "",
          // auctionDate: "",
          ReasonForAuction: "",
          Location: "",
          OwnersName: "",
          OwnerPhoneNo: "",
          AuctioneerId: "",
        });
      } else {
        alert("Something went wrong while adding the listing.");
      }
    } catch (error) {
      console.log(listings);
      console.error("Error posting data:", error);
      //  alert("Failed to add listing. Please try again.");
    }
  };

  return (
    <div>
      <div className="w-[1085px] h-[200px] bg-white mt-[20px] ml-[30px] rounded-[10px]">
        <div
          className="roles-back-icon"
          onClick={() => setOpenAddListings(false)}
        ></div>
        <div className="flex gap-[10px] pt-[10px]">
          <img src={backicon} alt="" className=" w-[24px] h-[24px] ml-[60px]" />
          <p className="text-[18px] font-[400] leading-[24px]">Listings</p>
        </div>
        <h1 className="text-[24px] font-[600] ml-[60px] mt-[10px]">
          Create New Listing
        </h1>
        <div className=" mt-[20px] flex">
          <div>
            <img src={num1} alt="" className="ml-[90px]" />
          </div>
          <div className=" w-[133px] h-[1px] bg-gray-500 mt-[15px] ml-[5px]"></div>
          <div>
            <img src={num2} alt="" className="ml-[12px]" />
          </div>
          <div className=" w-[133px] h-[1px] bg-gray-500 mt-[15px] ml-[5px]"></div>
          <div>
            <img src={num3} alt="" className="ml-[5px]" />
          </div>
          <div className=" w-[133px] h-[1px] bg-gray-500 mt-[15px] ml-[5px]"></div>
          <div>
            <img src={num4} alt="" className="ml-[15px]" />
          </div>
        </div>
        <div className="flex gap-[95px]">
          <p className="ml-[80px]">Basic Info</p>
          <p className="permissions-list">Upload photos</p>
          <p className="-ml-[30px]">Upload Documents</p>
          <p className="preview-list">Preview</p>
        </div>
      </div>
      <div className=" w-[1085px] h-[644px] bg-white mt-[20px] ml-[30px] rounded-[10px]">
        <div className="pt-[40px] ml-[60px] font-[500]">
          <h2>Create New Listing</h2>
        </div>
        <p className=" font-[400] ml-[60px] text-[14px] mt-[10px]">
          Add details about property.
        </p>
        <div className=" w-[967px] border-[1px] border-gray-300 mt-[30px] ml-[50px]"></div>
        <div className="flex">
          <div>
            <div>
              <label className="absolute pt-[35px] pb-[10px] pl-[55px] ml-[20px] opacity-[0.5] text-[13px]">
                Property
              </label>
              <input
                className="placeholder:font-[400] pt-[35px] pb-[15px] placeholder:pl-[25px] placeholder:text-gray-600 w-[410px] h-[73px] border-[1px] border-gray-200 bg-gray-100 rounded-[8px] ml-[60px] mt-[30px]"
                type="text"
                name="productName"
                value={listings.productName}
                onChange={handleChange}
                placeholder="3 Bedroom Apartment"
              ></input>
            </div>
            <div>
              <label className="absolute ml-[80px] mt-[40px] opacity-[0.5] flex">
                <p className="text-[15px]">Reasons for Auction</p>
                <img src={help} alt="" className="ml-[200px]" />
              </label>
              <input
                name="ReasonForAuction"
                value={listings.ReasonForAuction}
                onChange={handleChange}
                placeholder="Loan Repayment"
                className="w-[410px] h-[160px] placeholder:font-[500] placeholder:ml-[20px] placeholder:mt-[20px] pt-[35px] pb-[15px] placeholder:pl-[25px] placeholder:text-gray-600 border-[1px] border-gray-200 bg-gray-100 rounded-[8px] ml-[60px] mt-[20px]"
                type="text"
              ></input>
            </div>
            <div>
              <label className="absolute pt-[35px] pb-[10px] pl-[55px] ml-[20px] opacity-[0.5] text-[13px]">
                Property Owner
              </label>
              <input
                name="OwnersName"
                value={listings.OwnersName}
                onChange={handleChange}
                className="placeholder:font-[400] pt-[35px] pb-[15px] placeholder:pl-[25px] placeholder:text-gray-600 w-[410px] h-[73px] border-[1px] border-gray-200 bg-gray-100 rounded-[8px] ml-[60px] mt-[30px]"
                type="text"
                placeholder="Wilfred Kamau"
              ></input>
            </div>
          </div>
          <div>
            <div>
              <label className="absolute ml-[40px] mt-[30px] opacity-[0.5] flex">
                <p className="text-[15px]">Auction date and time</p>
                <img src={calendar} alt="" className="ml-[160px]" />
              </label>
              <input
                name="auctionDate"
                // value={listings.auctionDate}
                onChange={handleChange}
                type="datetime-local"
                className="w-[350px] h-[73px] pt-[35px] pb-[15px] pl-[15px] placeholder:text-gray-600 border-[1px] border-gray-200 bg-gray-100 rounded-[8px] ml-[20px] mt-[30px]"
                aria-label="Date and time"
              />
            </div>
            <div>
              <label className="absolute pt-[35px] pb-[10px] ml-[40px] opacity-[0.5] text-[14px]">
                Location
              </label>
              <input
                name="Location"
                value={listings.Location}
                onChange={handleChange}
                className=" pt-[35px] pb-[15px] w-[350px] h-[73px] border-[1px] border-gray-200 bg-gray-100 rounded-[8px] ml-[20px] mt-[20px]"
                type="text"
              ></input>
            </div>
            <div>
              <label className="absolute pt-[35px] pb-[10px] ml-[40px] opacity-[0.5] text-[14px]">
                Owners Phone Number
              </label>
              <input
                name="OwnerPhoneNo"
                value={listings.OwnerPhoneNo}
                onChange={handleChange}
                className=" pt-[35px] pb-[15px] w-[350px] h-[73px] border-[1px] border-gray-200 bg-gray-100 rounded-[8px] ml-[20px] mt-[20px]"
                type="text"
              ></input>
            </div>
            <div>
              <label className="absolute pt-[35px] pb-[10px] ml-[40px] opacity-[0.5] text-[14px]">
                Auctioneer Id
              </label>
              <input
                name="AuctioneerId"
                value={listings.AuctioneerId}
                onChange={handleChange}
                className=" pt-[35px] pb-[15px] w-[350px] h-[73px] border-[1px] border-gray-200 bg-gray-100 rounded-[8px] ml-[20px] mt-[20px]"
                type="text"
              ></input>
            </div>
          </div>
        </div>

        <div className="flex gap-[10px] ml-[780px]">
          <button onClick={handleSubmit}>Submit</button>
          <button className="w-[84px] h-[40px] rounded-[10px] border-[1px] border-black">
            Cancel
          </button>
          <button className="w-[97px] h-[40px] bg-primary rounded-[10px]">
            <p
              className="text-white"
              onClick={() => setOpenAddListings("UPLOAD")}
            >
              Continue
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddListings;
