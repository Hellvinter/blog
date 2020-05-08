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
      <ul className="nav">
        {routs.map((item) => (
          <li className="nav-item">{item.name}</li>
        ))}
      </ul>
    </nav>
  );
};

const Humburger = () => {
  return (
    <div className="hamburger-toggle">
      <div className="hamburger"></div>
    </div>
  );
};

function Header() {
  let burger = document.getElementsByClassName("hamburger-toggle");
  burger.classList.toggle("navbar--open");

  return (
    <React.Fragment>
      <header className="header">
        <h1 id="logo">Dracula blog</h1>
        <Navigation />
        <Humburger />
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

        .navbar {
          position: absolute;
          top: 100%;
          right: 0%;
          border: 1px solid #000;
          clip-path: circle(0px at top right);
          transition: clip-path ease-in-out 700ms;
        }

        .navbar--open {
          clip-path: circle(250% at top right);
        }

        .nav {
          margin: 0;
          padding: 0;
        }

        .nav-item {
          margin: 1rem;
          font-size: 1.2em;
          text-align: center;
        }

         {
          /* Humburger button styles */
        }

        .hamburger-toggle {
          width: 1rem;
          height: 1rem;
          position: absolute;
          top: 1.8rem;
          right: 1.5rem;
          cursor: pointer;
        }

        .hamburger,
        .hamburger::before,
        .hamburger::after {
          content: "";
          display: block;
          background: #fff;
          height: 3px;
          width: 1.75em;
          border-radius: 3px;
        }

        .hamburger::before {
          transform: translateY(-6px);
        }

        .hamburger::after {
          transform: translateY(3px);
        }

        .open .hamburger {
          transform: rotate(45deg);
        }

        .open .hamburger::before {
          opacity: 0;
        }

        .open.hamburger::after {
          transform: translateY(-3px) rotate(-90deg);
        }

         {
          /* MEDIA */
        }
      `}</style>
    </React.Fragment>
  );
}

export default Header;
