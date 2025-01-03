import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "../CSS/Dashboard.css";
import { BsMenuApp } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { LuPencilOff } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";
import { RiFileListLine } from "react-icons/ri";
import { LuFileInput } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";

const Dashboard = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Manage sidebar state

  const handleSignatureClick = () => {
    setDropdownVisible((prev) => !prev); // Toggle dropdown visibility
  };

  const sidebarItems = [
    { label: "Dashboard", icon: <BsMenuApp size={24} /> },
    { label: "Template", icon: <CgFileDocument size={24} /> },
    {
      label: "Signature",
      icon: <LuPencilOff size={24} />,
      dropdown: ["Type Signature", "Draw Signature", "Upload Signature"],
    },
    { label: "Active Contract", icon: <FaRegFileAlt size={24} /> },
    { label: "Signed Contract", icon: <RiFileListLine size={24} /> },
    { label: "History", icon: <LuFileInput size={24} /> },
    { label: "Settings", icon: <IoSettingsOutline size={24} /> },
  ];

  // Function to update the sidebar collapse state
  const handleSidebarCollapseChange = (collapsed) => {
    setIsSidebarCollapsed(collapsed);
  };

  return (
    <div className="dashboardContainer">
      <Sidebar
        menuItems={sidebarItems}
        onSignatureClick={handleSignatureClick}
        isDropdownVisible={isDropdownVisible}
        onCollapseChange={handleSidebarCollapseChange} // Pass collapse handler to Sidebar
      />
      <Main isSidebarCollapsed={isSidebarCollapsed} /> {/* Pass collapse state to Main */}
    </div>
  );
};

export default Dashboard;
