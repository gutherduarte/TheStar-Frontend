import React from "react";

const Header = ({ category, title, image, show, execute }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
    }}
    className="mb-10"
  >
    <div>
      <p className="text-lg text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
    </div>
    {show && (
      <button
        style={{
          width: "35px",
          height: "35px",
        }}
        onClick={execute}
      >
        <img src={image} alt="icon" />
      </button>
    )}
  </div>
);

export default Header;
