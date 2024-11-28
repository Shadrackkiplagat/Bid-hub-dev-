import React, { useState } from "react";
import Dashboard from "../../Dashboard/dashboard";
import ListingsDescription from "../../SUPER-ADMIN/Listings/ListingsDescription";
import AddListings from "./AddListings";
import ListingDocuments from "./ListingDocuments";
import ListingPhotos from "./ListingPhotos";
import ListingPreview from "./ListingPreview";

const LISTINGS = () => {
  const [openAddListings, setOpenAddListings] = useState("BASIC");
  return (
    <div>
      <Dashboard>
        <div className="cards-section">
          {openAddListings === "BASIC" ? (
            <ListingsDescription setOpenAddListings={setOpenAddListings} />
          ) : openAddListings === "PHOTOS" ? (
            <AddListings setOpenAddListings={setOpenAddListings} />
          ) : openAddListings === "UPLOAD" ? (
            <ListingPhotos setOpenAddListings={setOpenAddListings} />
          ) : openAddListings === "DETAILS" ? (
            <ListingDocuments setOpenAddListings={setOpenAddListings} />
          ) : openAddListings === "PREVIEW" ? (
            <ListingPreview setOpenAddListings={setOpenAddListings} />
          ) : (
            <RolesDescription setOpenAddListings={setOpenAddListings} />
          )}
        </div>
      </Dashboard>
    </div>
  );
};

export default LISTINGS;
