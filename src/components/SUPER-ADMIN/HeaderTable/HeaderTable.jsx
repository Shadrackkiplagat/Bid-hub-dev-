import React from "react";
import "./HeaderTable.css";
import search from "../../../assets/search.svg";
import { Button } from "@mui/material";
import icon from "../../../assets/icon.svg";
import filter from "../../../assets/Shape/Shape/Status/filter.svg";

const headertable = ({ openAddUser, setOpenAddUser }) => {
  return (
    <div className="companybar">
      <div className="top-bar">
        <p className="allcompanies">All Companies</p>
        <div className="add-exp-btn">
          <button className="w-[125px] h-[40px] gap-3 bg-button rounded-xl ml-[500px] ">
            <p className="add-user-txt" onClick={() => setOpenAddUser("USER")}>
              + Add User
            </p>
          </button>
          <button className="export-btn">
            <img src={icon} alt="" />
            <p className="export-text"> Export</p>
          </button>
        </div>
      </div>

      <div>
        <ul className="nav-list-roles">
          <li>All</li>
          <li>Auction Managers</li>
          <li>Auctioneering Managers</li>
          <li>Advert Supervisors</li>
        </ul>
        <hr />
        <br />
        <div className="filter-search">
          <div className="filter-box">
            <img src={filter} alt="" className="filter-icon" />
            <p className="filter-text">Filter</p>
          </div>
          <div
            className="company-search-container"
            style={{ position: "relative" }}
          >
            <img
              src={search}
              alt=""
              className="search-container-company"
              style={{ position: "absolute", left: "2px", top: "5px" }}
            />
            <input
              placeholder="Search users by Name, Email or Date "
              className="search-input-box"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default headertable;
