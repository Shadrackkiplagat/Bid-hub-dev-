import React, { useState } from "react";
import "./RolesDescription.css";

const RolesDescription = ({ OpenPermission, setPermission }) => {
  const [toggleStates, setToggleStates] = useState({
    adminAccess: false,
    auctioneerManager: false,
    auctionsManager: false,
    advertsSupervisor: false,
  });

  // Function to toggle the state for each toggle
  const toggleSwitch = (key) => {
    setToggleStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };

  return (
    <div>
      <div className="permission-bar">
        <div className="roles-arrow">
          <h6 className="roles-heading">
            <b> Roles and Permission</b>
          </h6>
          <div className="buttons-position">
            <p className="roles-text">
              Modify what individuals on this row can do
            </p>
            <div className="roles-btn">
              <button className="users-btn">
                <p>All users</p>
              </button>
              <button className="assign-roles-btn">
                <p
                  className="assign-role-text"
                  onClick={() => setPermission("ADD ROLE")}
                >
                  + Assign role
                </p>
              </button>
            </div>
          </div>
        </div>
        <br />
        <hr /> {/* Admin Access Toggle */}
        <div className="admin-access">
          <h2 className="admin-heading">Admin Access</h2>
          {/* <p className="enable-all">
            {toggleStates.adminAccess ? "Enabled" : "Disabled"}
          </p> */}
          <div className="ml-[780px] flex">
            <label className="switch">
              <input
                type="checkbox"
                checked={toggleStates.adminAccess}
                onChange={() => toggleSwitch("adminAccess")}
              />
              <span className="slider"></span>
            </label>
            <p className="-mt-[7px] ml-[5px] text-base font-semibold ">
              {" "}
              Enable all
            </p>
          </div>
          <div className="admin-direction">
            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Add Auctioneers</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>

            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Approve Auctioneers level-1</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>
          </div>
          <div className="admin-direction">
            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] mt-[10px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Add Auctioneers</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>

            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] mt-[10px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Approve Auctioneers level-1</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>
          </div>
        </div>
        <div className="admin-access">
          <h2 className="admin-heading">Auctioneers Manager</h2>
          {/* <p className="enable-all">
            {toggleStates.adminAccess ? "Enabled" : "Disabled"}
          </p> */}
          <div className="ml-[780px] flex">
            <label className="switch">
              <input
                type="checkbox"
                checked={toggleStates.adminAccess}
                onChange={() => toggleSwitch("adminAccess")}
              />
              <span className="slider"></span>
            </label>
            <p className="-mt-[7px] ml-[5px] text-base font-semibold ">
              {" "}
              Enable all
            </p>
          </div>
          <div className="admin-direction">
            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Add Auctioneers</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>

            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Approve Auctioneers level-1</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>
          </div>
          <div className="admin-direction">
            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] mt-[10px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Add Auctioneers</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>

            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] mt-[10px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Approve Auctioneers level-1</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>
          </div>
        </div>
        <div className="admin-access">
          <h2 className="admin-heading">Auctions Manager</h2>
          {/* <p className="enable-all">
            {toggleStates.adminAccess ? "Enabled" : "Disabled"}
          </p> */}
          <div className="ml-[780px] flex">
            <label className="switch">
              <input
                type="checkbox"
                checked={toggleStates.adminAccess}
                onChange={() => toggleSwitch("adminAccess")}
              />
              <span className="slider"></span>
            </label>
            <p className="-mt-[7px] ml-[5px] text-base font-semibold ">
              {" "}
              Enable all
            </p>
          </div>
          <div className="admin-direction">
            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Send Reminders</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>

            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Renewals</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>
          </div>
          <div className="admin-direction">
            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] mt-[10px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Add Auctioneers</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>

            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] mt-[10px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Approve Auctioneers level-1</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>
          </div>
        </div>
        {/* ggggggggggggggggggggggggggggggggggggggggggggg */}
        <div className="admin-access">
          <h2 className="admin-heading">Admin Access</h2>
          {/* <p className="enable-all">
            {toggleStates.adminAccess ? "Enabled" : "Disabled"}
          </p> */}
          <div className="ml-[780px] flex">
            <label className="switch">
              <input
                type="checkbox"
                checked={toggleStates.adminAccess}
                onChange={() => toggleSwitch("adminAccess")}
              />
              <span className="slider"></span>
            </label>
            <p className="-mt-[7px] ml-[5px] text-base font-semibold ">
              {" "}
              Enable all
            </p>
          </div>
          <div className="admin-direction">
            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Add Auctioneers</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>

            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Approve Auctioneers level-1</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>
          </div>
          <div className="admin-direction">
            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] mt-[10px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Add Auctioneers</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>

            <div>
              <h2 className="add-admin">
                <div className=" flex -ml-[35px] gap-[7px] mt-[10px] ">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={toggleStates.adminAccess}
                      onChange={() => toggleSwitch("adminAccess")}
                    />
                    <span className="slider"></span>
                  </label>
                  <p className="-mt-[15px] "> Approve Auctioneers level-1</p>
                </div>
              </h2>
              <p className="pl-[45px] underline decoration-underline -mt-[10px] ">
                This allows access to create new roles for admins.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="advert-supervisor">
          <h2 className="admin-heading">Adverts Supervisor</h2>
        </div> */}
      </div>
    </div>
  );
};

export default RolesDescription;
