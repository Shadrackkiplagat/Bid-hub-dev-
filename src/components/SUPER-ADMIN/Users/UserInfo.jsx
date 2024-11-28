import React, { useState, useRef, useEffect } from "react";
import invitepic from "../../../assets/Shape/Shape/Status/invitepic.svg";
import camera from "../../../assets/Shape/Shape/Status/camera.jpg";
import down from "../../../assets/Shape/Shape/Status/down.svg";

const UserInfo = ({ setOpenAddUser }) => {
  const [role, setRole] = useState(""); // State to hold selected role
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to control dropdown visibility
  const dropdownRef = useRef(null); // Ref to detect clicks outside of the dropdown to close it

  // Handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Function to handle role selection
  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole); // Set the selected role in the state
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const UserInfo = ({ setOpenAddUser }) => {
    // Handle click outside to close the dropdown
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setIsDropdownOpen(false);
        }
      };

      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    });

    // Function to handle role selection
    const handleRoleSelect = (selectedRole) => {
      setRole(selectedRole); // Set the selected role in the state
      setIsDropdownOpen(false); // Close the dropdown after selection
    };

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
    };
  };

  return (
    <div className="w-[1140px] h-[744px] mt-[0px] bg-white ml-[20px]">
      <div className="w-[274px] h-[56px] rounded-[12px] border-[1px] border-gray-200 flex ml-[700px]">
        <button
          className="rounded-[12px] border-[1px] border-solid border-black opacity-[0.9] w-[274px] h-[56px]"
          onClick={() => setOpenAddUser("INVITE")}
        >
          <div className="flex gap-[5px] mt-[5px] ml-[30px]">
            <img src={invitepic} alt="" className="invitepic-email" />
            <p>Invite via Email</p>
          </div>
        </button>
      </div>
      <div>
        <div className="w-[80px] h-[80px] rounded-[40px] ml-[470px] pt-[50px] bg-gray-200">
          <img
            src={camera}
            alt=""
            className=" w-[30px] h-[30px] ml-[24px] -mt-[20px]"
          />
        </div>
        <p className="text-primary ml-[465px]">Upload photo</p>
      </div>

      <div className="ml-[180px]">
        <div className="flex gap-[90px] mt-[40px]">
          <div>
            <p className="flex text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Staff Number
              <p className="text-red-500 font-roboto text-[14px] font-[400]">
                {" "}
                *
              </p>
            </p>
            <input
              placeholder="Enter Staff Number"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
          <div>
            <p className="flex text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Email
              <p className="text-red-500 font-roboto text-[14px] font-[400]">
                {" "}
                *
              </p>
            </p>
            <input
              placeholder="Enter your Email"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
        </div>
        <div className="flex gap-[90px] mt-[40px]">
          <div>
            <p className="text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              First Name
            </p>
            <input
              placeholder="Enter First Name"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
          <div>
            <p className="text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Last Name
            </p>
            <input
              placeholder="Enter last name"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
        </div>
        <div className="flex gap-[90px] mt-[40px]">
          <div>
            <p className="text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Company Url
            </p>
            <input
              placeholder="Enter Company URL"
              className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
            />
          </div>
          <div>
            <p className="text-gray-600 font-roboto text-[14px] font-[400] pb-[10px]">
              Role
            </p>
            <div className="relative inline-block" ref={dropdownRef}>
              <input
                value={role} // Display selected role in the input field
                placeholder="Auctioneering Manager "
                className="w-[360px] h-[52px] rounded-[4px] border-[1px] bg-gray-100 placeholder:font-roboto placeholder:text-[14px] placeholder:pl-[15px]"
                onClick={toggleDropdown} // Toggle dropdown when clicked
                readOnly // Make input readonly to prevent manual typing
              />

              {isDropdownOpen && (
                <div className="absolute mt-[100%] bg-white border-[1px] border-solid border-gray-400 shadow-md z-[10]">
                  <div
                    className=" p-[10px] text-[16px] cursor-pointer"
                    onClick={() => handleRoleSelect("Auctioneers Manager")} // Handle selection of Super Advisor
                  >
                    Auctioneers Manager
                  </div>
                  <div
                    className=" p-[10px] text-[16px] cursor-pointer"
                    onClick={() => handleRoleSelect("Auctions Manager")} // Handle selection of Auction Manager
                  >
                    Auctions Manager
                  </div>
                  <div
                    className=" p-[10px] text-[16px] cursor-pointer"
                    onClick={() => handleRoleSelect("Advert Supervisor")} // Handle selection of Auction Manager
                  >
                    Adverts Supervisor
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <button className="w-[274px] h-[56px] rounded-[12px] bg-primary ml-[350px] mt-[50px]">
        <p className="text-white text-center font-roboto text-[18px] font-[500]">
          Add User
        </p>
      </button>
    </div>
  );
};
export default UserInfo;
