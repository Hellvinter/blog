import React, { useEffect } from "react";
import Link from "next/link";

const Navigation = () => {
  const routs = [
    {
      name: "home",
    },
    {
      name: "blog",
    },
    {
      name: "hire me",
    },
  ];

  return (
    <nav id="navbar" className="navbar">
      <ul className="navbar-ul">
        {routs.map((item) => (
          <li className="navbar-ul-li">{item.name}</li>
        ))}
      </ul>
    </nav>
  );
};

const Humbruger = () => {
  return (
    <div className="hamburger-toggle">
      <div className="hamburger"></div>
    </div>
  );
};

function Header() {
  return (
    <React.Fragment>
      <header className="header">
        <h1 id="logo">Dracula blog</h1>
        <Navigation />
      </header>

      <style jsx>{`
        .header {
          display: flex;
          justify-flex: space-around;
          align-items: center;
          clip-path: circle(0px at top right);
          transition: clip-path ease-in-out 700ms;
        }
        #logo {
          font-size: 1.5rem;
        }
      `}</style>
    </React.Fragment>
  );
}

export default Header;
