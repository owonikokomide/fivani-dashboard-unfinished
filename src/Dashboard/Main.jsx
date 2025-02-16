import React from "react";
import "../CSS/Main.css";
import Header from "../Components/Header";

const Main = ({ isSidebarCollapsed }) => {
  return (
    <div
      className="main"
      style={{ 
        marginLeft: isSidebarCollapsed ? "4rem" : "20vw", 
        transition: "margin-left 0.3s ease",
      }}
    >
     <div className="header">
      <Header />
      <hr />
     </div>
    </div>
  );
};

export default Main;
