import React from "react";
import withToggle from "../hoc/withToggle";

const SidePanel = ({ isOpen, toggleOpen, children }) => (
  <div>
    <button onClick={toggleOpen}>{isOpen ? "Hide panel" : "Show panel"}</button>
    <div className={`side-panel ${isOpen ? "open" : ""}`}>{children}</div>
  </div>
);

export default withToggle(SidePanel);
