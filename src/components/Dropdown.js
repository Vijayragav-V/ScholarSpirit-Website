import React from "react";

const Dropdown = ({ items }) => (
  <ul className="absolute z-10 mt-2 space-y-2 bg-slate-900 border rounded-md shadow-lg w-40">
    {items.map((item, index) => (
      <li key={index}>
        <a href={item.link} className="block hover:rounded-md px-4 py-2 text-sm text-white hover:bg-hover transition-all duration-200">
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

export default Dropdown;
