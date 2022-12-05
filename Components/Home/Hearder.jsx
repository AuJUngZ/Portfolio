import React from "react";
import Nav from "./Nav";
// import { Link } from "@nextui-org/react";

export default function Hearder() {
  return (
    <>
      <div className="Header">
        <Nav />
        {/* text section */}
        <div className="aboutme">
          <h1 className="">Hi, I'm AuJung</h1>
          <div className="aboutme-text">
            Hi, I'm AuJung. I'm a web developer. I'm a student at Chiang Mai
            University. This is my first project website. I hope you enjoy it.
            You can give me feedback or advice. I'm not very good at design. But
            I try to do it as best as I can.
          </div>
          <button className="btn btn-light">GET STARTED</button>
        </div>
      </div>
    </>
  );
}
