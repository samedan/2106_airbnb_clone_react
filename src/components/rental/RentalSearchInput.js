import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const RentalSearchInput = () => {
  const [location, setLocation] = useState("");
  const history = useHistory();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      console.log("location", location);
      handleSearch(event.target.value);
    }
  };

  const handleSearch = (location) => {
    location ? history.push(`/rentals/${location}/homes`) : history.push("/");
  };

  return (
    <div
      className="form-inline my-2 my-lg-0
    "
    >
      <input
        value={location}
        onKeyPress={handleKeyPress}
        onChange={(e) => setLocation(e.target.value)}
        className="form-control 
        mr-sm-2 
        bwm-search"
        type="search"
        placeholder="Search your desired location"
      />
      <button
        className="btn btn-outline-success my-2 my-sm-0 btn-bwm-main"
        type="button"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default RentalSearchInput;
