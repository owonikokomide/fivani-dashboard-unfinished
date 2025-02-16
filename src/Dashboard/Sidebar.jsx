import React, { useState } from "react";
import PropTypes from "prop-types";
import "../CSS/Sidebar.css";
import Logo from "../assets/logo.jpg";
import Logo2 from "../assets/logo2.jpg";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Sidebar = ({ menuItems, onCollapseChange, isDropdownVisible }) => {
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null); 
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleDropdown = (index) => {
    setActiveDropdownIndex((prevIndex) => (prevIndex === index ? null : index)); 
  };

  const handleCollapseClick = () => {
    const newCollapsedState = !isCollapsed;
    setIsCollapsed(newCollapsedState);
    onCollapseChange(newCollapsedState); // Notify parent about the collapse state
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="logo" style={{ display: "flex", justifyContent: isCollapsed ? "center" : "flex-start", alignItems: "center" }}>
        <img
          src={isCollapsed ? Logo2 : Logo}
          alt="Logo"
          style={{
            width: isCollapsed ? "4rem" : "100%",  // Adjusted size for Logo2
            height: isCollapsed ? "4rem" : "3.5rem",  // Adjusted size for Logo2
            padding: isCollapsed ? "0.5rem" : "1rem", 
            transition: "width 0.3s ease, height 0.3s ease"
          }}
        />
        {!isCollapsed && (
          <hr style={{ height: "1px", backgroundColor: "#ccc", border: "none" }} />
        )}
      </div>
      <ul className="sidebarList">
        {menuItems.map((item, index) => (
          <li key={index} className={`sidebarItem ${activeDropdownIndex === index ? "active" : ""}`}>
            <div className="sideitem" onClick={() => toggleDropdown(index)}>
              <span className="icon">{item.icon}</span>
              {!isCollapsed && (
                <>
                  <span className="label">{item.label}</span>
                  {item.dropdown && (
                    <span className="chevron">
                      {activeDropdownIndex === index ? (
                        <BsChevronUp />
                      ) : (
                        <BsChevronDown />
                      )}
                    </span>
                  )}
                </>
              )}
            </div>
            {item.dropdown && activeDropdownIndex === index && !isCollapsed && (
              <ul className="dropdownMenu">
                {item.dropdown.map((dropdownItem, i) => (
                  <li key={i} className="dropdownItem">
                    {dropdownItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="closedbar" onClick={handleCollapseClick}>
        {isCollapsed ? (
          <FaArrowLeft className="closeicon" />
        ) : (
          <FaArrowRight className="closeicon" />
        )}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      dropdown: PropTypes.array,
    })
  ).isRequired,
  onCollapseChange: PropTypes.func.isRequired, // Callback to notify parent about collapse state
};

export default Sidebar;
