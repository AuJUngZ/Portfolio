import React from "react";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="container d-flex justify-content-between p-4 align-items-center">
      <div className="logo">
        <Link href="/">AuJung</Link>
      </div>
      <div className="menu d-flex gap-5">
        <div className="menu-options">
          <Link href="/">Home</Link>
        </div>
        <div className="menu-options">
          <Link href="/exp">Experience</Link>
        </div>
        <div className="menu-options">
          <Link href="/myproject">My Project</Link>
        </div>
        <div className="menu-options">
          <Link href="/">Contact</Link>
        </div>
      </div>
    </div>
  );
}
