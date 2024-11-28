import React, { useState } from "react";
import "./dashboard.css";
import logo from "../../assets/logo.jpeg";
import bell from "../../assets/icon/jam-icons/outline & logos/bell.svg";
import home from "../../assets/Shape/Shape/Status/homepic.svg";
import roles from "../../assets/roles.svg";
import users12 from "../../assets/users12.svg";
import listings from "../../assets/listings.svg";
import Reports from "../../assets/Reports.jpg";
import settings from "../../assets/settings.jpg";
import help from "../../assets/help.jpg";
import Cards from "../../components/Dashboard/Cards/cards"; // Ensure correct import for the Cards component
import Usersbox from "../../components/Dashboard/usersbox/usersbox";
import ExTable from "../Dashboard/ExTable/ExTable";
import HeaderTable from "../SUPER-ADMIN/HeaderTable/HeaderTable";
import { Link } from "react-router-dom";
import BottomBar from "../Dashboard/usersbox/BottomBar";
import downarrow from "../../assets/Building Blocks/icon/jam-icons/outline & logos/downarrow.svg";
import pic2 from "../../assets/Building Blocks/icon/jam-icons/outline & logos/pic2.jpg";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ExpandMore, ExpandLess } from "@mui/icons-material"; // Corrected imports
import Collapse from "@mui/material/Collapse";
import manage from "../../assets/manage.svg";
import password from "../../assets/password.svg";
import activity from "../../assets/activity.svg";
import logout from "../../assets/logout.svg";
import menudrawer from "../../assets/Shape/Shape/Status/menudrawer.png";
import { IconButton, Menu } from "@mui/material";

const Dashboard = ({ children }) => {
  const [selected, setSelected] = useState("dashboard"); // Default selection
  const [openPreclaims, setOpenPreclaims] = useState(false);
  const [collapsed, setCollapsed] = useState(true);
  const [navHidden, setNavHidden] = useState(false); // State to control navbar visibility

  const handleClick = (buttonName) => {
    setSelected(buttonName); // Set the clicked button as selected
  };

  const togglePreclaims = () => {
    setOpenPreclaims(!openPreclaims);
  };
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="bg-white overflow-y-hidden fixed">
      {/* Top navigation */}
      <div className="bg-background lg:w-[1400px] md:w-[850px] sm:w-[250px] h-auto">
        <div className="flex justify-between lg:mr-[60%] md:mr-[54%] mr-[74%] lg:ml-[5%] md:ml-[4%] ml-[3%]">
          <img
            src={logo}
            alt="logo"
            // className=" lg:w-[100px] md:w-[80px] sm:w-[10px] lg:h-[100px] md:h-[80px] sm:h-[10px] lg:mt-[18px] md:mt-[14px] sm:mt-[12px]"
            className=" lg:w-[100px] md:w-[80px] w-[40px] lg:h-[100px] md:h-[80px] h-[40px] lg:mt-[18px] md:mt-[14px] mt-[15px] "
          />

          <button className="collapse-toggle" onClick={toggleCollapse}>
            <img
              src={menudrawer}
              alt="Toggle Sidebar"
              className=" h-[24px] w-[24px] lg:ml-[30px] md:ml-[30px] ml-[40px] mt-[30px] lg:ml-[40px] md:ml-[40] -ml-[20px]  "
            />
          </button>
          <div className="md:ml-[30px]">
            <span>
              <p className="text-black font-Roboto  lg:text-[40px] md:text-[30px] sm:text-[30px] font:normal leading-6 lg:mt-10 md:mt-7 mt-[6px] ">
                Nation Media
              </p>
            </span>
            {/* <p className="text-white font-Roboto font-thin leading-6"> */}
            <p className="text-black font-Roboto font-thin lg:mt-[5px] md:mt-[5px] ">
              Friday, 4th Oct 2024
            </p>
          </div>
        </div>
        <div className="lg:h-[58px] md:h-[48px] h-[38px] flex pt-[19px] pr-[11px] justify-center items-center gap-[6px]">
          <div className=" lg:w-[30px] md:w-[30px] w-[20px] lg:h-[30px] md:h-[20px] h-[20px]  md-[400px] lg:ml-[900px] md:ml-[500px] -ml-[750px] ">
            <img
              src={bell}
              alt="bell"
              className=" lg:-mt-[75px] md:-mt-[75px] "
            />
          </div>
          <button className="lg:-mt-[162px] md:-mt-[162px] -mt-[12px] border-2 lg:w-[190px] md:w-[190px] w-[120px] lg:h-[58px] md:h-[58px] h-[38px] rounded-full ml-[20px]  ">
            <div className="flex pl-[20px] gap-[8px] relative ">
              <img
                src={pic2}
                alt=""
                className=" mt-[10px] w-[24px] h-[24px] rounded-full "
              />
              <div>
                <span>
                  <p className="mt-[10px] lg:block md:block hidden color-white Lg:font-serif md:font-serif lg:text-xs md:text-xs normal font-normal ">
                    Good Afternoon!
                  </p>
                </span>
                <h4 className="lg:block md:block hidden color-black font-serif text-sm normal font-bold -pl-[20px]">
                  SuperAdmin
                </h4>
              </div>
              {/* Dropdown trigger */}
              <ListItem button onClick={togglePreclaims}>
                {openPreclaims ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
            </div>
            <div className="bg-white w-[200px] ">
              {/* Dropdown list */}
              <Collapse in={openPreclaims} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button>
                    <img src={manage} alt="" className="admin-action-pic" />
                    <ListItemText primary="Manage Account" />
                  </ListItem>
                  <ListItem button>
                    <img src={password} alt="" className="admin-action-pic" />
                    <ListItemText primary="Change Password" />
                  </ListItem>
                  <ListItem button>
                    <img src={activity} alt="" className="admin-action-pic" />
                    <ListItemText primary="Activity Log" />
                  </ListItem>
                  <ListItem button>
                    <img src={logout} alt="" className="admin-action-pic" />
                    <ListItemText primary="Log out" />
                  </ListItem>
                </List>
              </Collapse>
            </div>
          </button>
        </div>
      </div>

      {/* Main content container for side-nav and cards-section */}
      <div className="main-content">
        {/* Side navigation */}
        {collapsed && (
          <div
            className={`bg-white w-[160px] h-[auto] overflow-hidden  ${
              collapsed ? "w-[160px] " : ""
            }`}
          >
            <Link to="/dashboard">
              <button
                className={`lg:w-[130px] md:w-[130px] w-[120px] h-[56px] lg:px-[8px] px-[2px] py-[8px] gap-[12px] flex mt-[30px] ml-[27px] rounded-xl`}
                style={{
                  backgroundColor:
                    selected === "dashboard" ? "rgba(20, 120, 163, 1)" : "",
                  color: selected === "dashboard" ? "white" : "black",
                }}
                onClick={() => handleClick("dashboard")}
              >
                <img
                  src={home}
                  alt="home"
                  className="flex w-[24px] h-[24px] justify-center items-center mt-[5px] "
                />
                <p className=" font-serif text-base font-normal pt-[8px] leading-6">
                  Dashboard
                </p>
              </button>
            </Link>
            <Link to="/roles">
              <button
                className={`w-[120px] lg:h-[56px] h-[46px] px-[8px] py-[12px] gap-[12px] flex mt-[30px] ml-[27px] rounded-xl`}
                style={{
                  backgroundColor:
                    selected === "roles" ? "rgba(20, 120, 163, 1)" : "",
                  color: selected === "roles" ? "white" : "black",
                }}
                onClick={() => handleClick("roles")}
              >
                <img src={roles} alt="roles" className="w-[24px] h-[24px] " />
                <p>Roles</p>
              </button>
            </Link>
            <Link to="/users">
              <button
                className={`lg:w-[120px] w-[120px] lg:h-[56px] h-[46px] px-[8px] py-[12px] gap-[12px] flex mt-[30px] ml-[27px] rounded-xl`}
                style={{
                  backgroundColor:
                    selected === "users" ? "rgba(20, 120, 163, 1)" : "",
                  color: selected === "users" ? "white" : "black",
                }}
                onClick={() => handleClick("users")}
              >
                <img src={users12} alt="users" className="w-[24px] h-[24px] " />
                <p>Users</p>
              </button>
            </Link>

            <Link to="/listings">
              <button
                className={`w-[120px] lg:h-[56px] h-[46px] px-[8px] py-[12px] gap-[12px] flex mt-[30px] ml-[27px] rounded-xl`}
                style={{
                  backgroundColor:
                    selected === "listings" ? "rgba(20, 120, 163, 1)" : "",
                  color: selected === "listings" ? "white" : "black",
                }}
                onClick={() => handleClick("listings")}
              >
                <img src={listings} alt="listings" className="listings-pic" />
                <p>Listings</p>
              </button>
            </Link>

            <button
              className={`w-[120px] lg:h-[56px] h-[46px] px-[8px] py-[12px] gap-[12px] flex mt-[30px] ml-[27px] rounded-xl`}
              style={{
                backgroundColor:
                  selected === "reports" ? "rgba(20, 120, 163, 1)" : "",
                color: selected === "reports" ? "white" : "black",
              }}
              onClick={() => handleClick("reports")}
            >
              <img src={Reports} alt="Reports" className="W-[24px] h-[24px] " />
              <p>Reports</p>
            </button>

            <div className="flex gap-3 mt-[14px] ">
              <div className="settings">
                <img
                  src={settings}
                  alt="settings"
                  className="w-[20px] h-[20px] "
                />
                <p>Settings</p>
              </div>
              <div className="help">
                <img src={help} alt="help" className="w-[20px] h-[20px] " />
                <p>Help</p>
              </div>
            </div>
          </div>
        )}

        <div className="" style={{ overflowY: "auto", maxHeight: "600px" }}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
