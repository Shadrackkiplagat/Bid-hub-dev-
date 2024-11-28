import React, { useState } from "react";
import Dashboard from "../../Dashboard/dashboard";
import UserDescription from "../../../components/SUPER-ADMIN/Users/UserDescription";
import UserInfo from "./UserInfo";
import EmailUser from "./EmailUser";

const Users = () => {
  const [openAddUser, setOpenAddUser] = useState(false);

  return (
    <div>
      <Dashboard>
        <div className="cards-section">
          {openAddUser === "USER" ? (
            <UserInfo setOpenAddUser={setOpenAddUser} />
          ) : openAddUser === "INVITE" ? (
            <EmailUser />
          ) : (
            <UserDescription setOpenAddUser={setOpenAddUser} />
          )}
        </div>
      </Dashboard>
    </div>
  );
};

export default Users;
