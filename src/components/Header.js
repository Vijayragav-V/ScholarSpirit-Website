import React, { useState } from "react";
import logo from "../assets/logo.png";
import Dropdown from "./Dropdown.js";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdownIndex, setDropdownIndex] = useState(null);

  const openDropdown = (index) => {
    setDropdownIndex(index);
  };

  const closeDropdown = () => {
    setDropdownIndex(null);
  };

  const navigationItems = [
    { label: "Home", link: "/" },
    {
      label: "About",
      dropdownItems: [
        { label: "Our Team", link: "/our-team" },
        { label: "Our Impact", link: "/impact" },
      ],
    },
    {
      label: "Our Programs",
      dropdownItems: [
        { label: "Tutoring Program", link: "/tutoring-program" },
        { label: "Care Package Program", link: "/care-package" },
        { label: "ScholarSpirit Fund", link: "/scholarspirit-fund" },
      ],
    },
    {
      label: "Get Involved",
      dropdownItems: [
        { label: "Donation Drives", link: "/donation-drives" },
        { label: "Volunteer", link: "/volunteer" },
      ],
    },
    { label: "Donate", link: "/donate" },
  ];

  return (
    <nav className="flex flex-row justify-between items-center bg-primary h-24 px-8" onMouseLeave={closeDropdown}>
      <div className="flex items-center">
        <img src={logo} alt="Logo" width="70" height="70" />
        <h2 className="ml-4 text-4xl font-heading text-orange-400 font-bold">Scholar</h2>
        <h2 className="text-4xl font-heading text-blue-500 font-bold">Spirit</h2>
        <h2 className="ml-4 text-4xl font-heading text-white"> Foundation</h2>
      </div>

      <ul className="flex flex-row space-x-6 text-white font-body text-xl mr-16">
        {navigationItems.map((item, index) => (
          <li
            key={index}
            className={`relative p-3 rounded-lg hover:bg-hover hover:text-link transition-all duration-200`}
            onMouseEnter={() => openDropdown(index)}
            onMouseLeave={closeDropdown}
          >
            <Link to={item.link} className="hover:underline">
              {item.label}
            </Link>
            {item.dropdownItems && dropdownIndex === index && <Dropdown items={item.dropdownItems} />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;