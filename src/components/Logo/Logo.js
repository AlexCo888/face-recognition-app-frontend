import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import logo from "./logo.png";

function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="track-on-window br2 shadow-2"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.75}
        glarePosition="all"
        scale={1.02}
        style={{ maxWidth: "85px", height: "85px" }}
      >
        <img style={{ paddingTop: "5px" }} alt="logo" src={logo} />
      </Tilt>
    </div>
  );
}

export default Logo;
