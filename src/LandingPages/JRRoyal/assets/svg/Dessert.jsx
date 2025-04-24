import React from "react";
const Dessert = (props) => {
  return (
    <svg
      viewBox="0 0 32 32"
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
              ".cls-1{fill:none;stroke:currentcolor;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}"
            }
          </style>
        </defs>
        <title />
        <g data-name="Layer 2" id="Layer_2">
          <path
            className="cls-1"
            d="M15,1h2a7,7,0,0,1,7,7V25a0,0,0,0,1,0,0H8a0,0,0,0,1,0,0V8a7,7,0,0,1,7-7Z"
          />
          <line className="cls-1" x1={16} x2={16} y1={25} y2={32} />
          <line className="cls-1" x1={19} x2={19} y1={7} y2={19} />
          <line className="cls-1" x1={13} x2={13} y1={7} y2={19} />
        </g>
      </g>
    </svg>
  );
};

export default Dessert;
