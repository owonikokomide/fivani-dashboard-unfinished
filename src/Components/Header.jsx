import React, { useState } from "react";
import PropTypes from "prop-types";
import { FiSearch, FiBell } from "react-icons/fi";
import { TbFilterSearch } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import "../CSS/Header.css"; 

const Header = ({ userName }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className="dashboardHeader">
      <div className="searchContainer">
        <div className="search">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="searchInput"
        />
         <FiSearch className="headerIcon" />
      </div>
      <div className="filter">
      <div className="actionItemed" onClick={() => console.log("Filter clicked")}>
      <span>Filter</span>
          <TbFilterSearch className="headerIcon" />
        </div>
      </div>
      </div>
      {/* Header Actions */}
      <div className="headerActions">
        {/* Filter */}
       

        {/* Notifications */}
        <div className="actionItem" onClick={() => console.log("Notifications clicked")}>
          <FiBell className="headerIcon" />
        </div>

        {/* Contacts */}
        <div className="actionItem" onClick={() => console.log("Contacts clicked")}>
          <RiContactsLine className="headerIcon" />
        </div>

        {/* User Dropdown */}
        <div className="actionItems" onClick={toggleDropdown}>
          <span>{userName}</span>
          <BsChevronDown
            className={`headerIcon ${isDropdownOpen ? "open" : ""}`}
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="dropdownMenu">
          <ul>
            <li onClick={() => console.log("Profile clicked")}>Profile</li>
            <li onClick={() => console.log("Settings clicked")}>Settings</li>
            <li onClick={() => console.log("Logout clicked")}>Logout</li>
          </ul>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Header;
