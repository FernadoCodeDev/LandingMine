import React from "react";
const CampingTentSVG = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentcolor"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <defs>
          <style>
            {
              ".cls-1{fill:none;stroke:currentcolor;stroke-miterlimit:10;stroke-width:1.91px;}"
            }
          </style>
        </defs>
        <line className="cls-1" x1={0.55} y1={22.5} x2={23.45} y2={22.5} />
        <line className="cls-1" x1={9.14} y1={1.5} x2={21.55} y2={22.5} />
        <line className="cls-1" x1={14.86} y1={1.5} x2={2.45} y2={22.5} />
        <polygon
          className="cls-1"
          points="15.82 22.5 8.18 22.5 12 14.86 15.82 22.5"
        />
      </g>
    </svg>
  );
};

export default CampingTentSVG;
