import React from "react";
import "./Resource.scss";
import { VscDebugBreakpointData } from "react-icons/vsc";
const Resource = () => {
  return (
    <div className="res-container">
      <div className="left">
        <h1>Heading</h1>
        <p>subheadings</p>
      </div>
      <div className="center">
        <h1>Resource-Links</h1>
        <div className="resource-links">
          <div className="resource-heading">
            <VscDebugBreakpointData size={26} />
            <h3>resource-heading </h3>
          </div>
          <div className="resourceSubHeading">
            <p>resource-link</p>
            <a href="https://react-icons.github.io/react-icons/icons?name=ci">
              https://react-icons.github.io/react-icons/icons?name=ci
            </a>
          </div>
        </div>
      </div>
      <div className="right">
        <h1>Other resources</h1>
        <p>subheadings</p>
      </div>
    </div>
  );
};

export default Resource;
