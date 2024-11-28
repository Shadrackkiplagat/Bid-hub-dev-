import React, { useState } from "react";
import "./UserDescription.css";
import icon from "../../../assets/icon.svg";
import search from "../../../assets/search.svg";
import filter from "../../../assets/Shape/Shape/Status/filter.svg";
import green from "../../../assets/Shape/Shape/Status/green.svg";
import red from "../../../assets/Shape/Shape/Status/red.svg";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import more from "../../../assets/more.svg"; // Assuming this is your "more" icon
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert"; // Importing Material UI 3 dots icon

// Sample data for users
const products = [
  {
    name: "Shadrack Kiplagat",
    userID: "#826G456",
    post: "shaddy@gmail.com",
    role: "Advert Supervisor",
    roleinfo: "Fulltime",
    status: "active",
    addedon: "Added on 16th/Oct/2024",
    company: "shaddiecomp",
    details: "view more",
  },
  {
    name: "Shadrack Kiplagat",
    userID: "#836G456",
    post: "shaddy@gmail.com",
    role: "Advert Supervisor",
    roleinfo: "Fulltime",
    status: "inactive",
    addedon: "Added on 16th/Oct/2024",
    company: "shaddiecomp",
    details: "view more",
  },
  {
    name: "Shadrack Kiplagat",
    userID: "#846G456",
    post: "shaddy@gmail.com",
    role: "Advert Supervisor",
    roleinfo: "Fulltime",
    status: "active",
    addedon: "Added on 16th/Oct/2024",
    company: "shaddiecomp",
    details: "view more",
  },
  {
    name: "Shadrack Kiplagat",
    userID: "#856G456",
    post: "shaddy@gmail.com",
    role: "Advert Supervisor",
    roleinfo: "Fulltime",
    status: " active",
    addedon: "Added on 16th/Oct/2024",
    company: "shaddiecomp",
    details: "view more",
  },
  {
    name: "Shadrack Kiplagat",
    userID: "#866G456",
    post: "shaddy@gmail.com",
    role: "Advert Supervisor",
    roleinfo: "Fulltime",
    status: "inactive",
    addedon: "Added on 16th/Oct/2024",
    company: "shaddiecomp",
    details: "view more",
  },
  {
    name: "Shadrack Kiplagat",
    userID: "#886G456",
    post: "shaddy@gmail.com",
    role: "Advert Supervisor",
    roleinfo: "Fulltime",
    status: "active",
    addedon: "Added on 16th/Oct/2024",
    company: "shaddiecomp",
    details: "view more",
  },
  {
    name: "John Doe",
    userID: "#123A456",
    post: "john.doe@gmail.com",
    role: "Manager",
    roleinfo: "Part-time",
    status: "active",
    addedon: "Added on 10th/Oct/2024",
    company: "exampleco",
    details: "view more",
  },
];

const USERDESCRIPTION = ({ openAddUser, setOpenAddUser }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  // Handle checkbox toggle
  const handleCheckboxChange = (event, userID) => {
    if (event.target.checked) {
      setSelectedUsers((prevSelected) => [...prevSelected, userID]);
    } else {
      setSelectedUsers((prevSelected) =>
        prevSelected.filter((id) => id !== userID)
      );
    }
  };

  return (
    <div className="w-[1085px] h-[1085px] rounded-2xl bg-white">
      <div className="user-top-bar">
        <p className="all-users6">All Users</p>
        <div className="user-add-exp-btn">
          <button className="user-export-btn1">
            <img src={icon} alt="" />
            <p className="user-export-text"> Export</p>
          </button>

          <button className="add-user-btn55">
            <p className="add-user-txt5" onClick={() => setOpenAddUser("USER")}>
              + Add User
            </p>
          </button>
        </div>
      </div>
      <div>
        <ul className="nav-list-roles">
          <li>All</li>
          <li>Managers</li>
          <li>overdue</li>
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
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectedUsers.length === products.length}
                indeterminate={
                  selectedUsers.length > 0 &&
                  selectedUsers.length < products.length
                }
                onChange={(event) => {
                  if (event.target.checked) {
                    setSelectedUsers(products.map((product) => product.userID));
                  } else {
                    setSelectedUsers([]);
                  }
                }}
              />
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                User ID
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Role
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Status
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Company
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Details
                <MoreVertIcon />
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.userID}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedUsers.includes(product.userID)}
                  onChange={(event) =>
                    handleCheckboxChange(event, product.userID)
                  }
                />
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h7"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {product.post}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {product.userID}
                </Typography>
              </TableCell>

              <TableCell>
                <Typography
                  variant="h7"
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  {product.role}
                </Typography>
                <Typography
                  color="textSecondary"
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  {product.roleinfo}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: "600",

                    pl: "2px",
                  }}
                >
                  <div
                    className={`${
                      product.status === "active"
                        ? "status-bar"
                        : "status-bar-two"
                    }`}
                  >
                    <img
                      src={`${product.status === "active" ? green : red}`}
                      alt=""
                      className="color-dot"
                    />

                    {product.status}
                  </div>
                </Typography>

                <Typography
                  color="textSecondary"
                  sx={{
                    fontSize: "13px",
                  }}
                >
                  {product.addedon}
                </Typography>
              </TableCell>

              <TableCell>
                <Typography
                  variant="h7"
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  {product.company}
                </Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    fontSize={"14px"}
                    sx={{
                      fontWeight: "400",
                    }}
                  >
                    {product.details}
                  </Typography>
                  <MoreVertIcon sx={{ marginLeft: "8px", cursor: "pointer" }} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default USERDESCRIPTION;
