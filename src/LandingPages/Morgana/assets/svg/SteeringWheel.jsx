import React from "react";
const SteeringWheel = (props) => {
  return (
    <svg
      fill="#000000"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      id="steering-wheel"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
      className="m-auto icon flat-color"
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <path
          id="primary"
          d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,2a8,8,0,0,1,7.38,4.92A29.93,29.93,0,0,0,12,8a29.63,29.63,0,0,0-7.4.94A8,8,0,0,1,12,4ZM4,12.67l1.11-.13A4.38,4.38,0,0,1,10,16.89v2.85A8,8,0,0,1,4,12.67Zm10,7.07V16.89a4.38,4.38,0,0,1,4.86-4.35l1.11.13A8,8,0,0,1,14,19.74Z"
          style={{
            fill: "#000000",
          }}
        />
      </g>
    </svg>
  );
};

export default SteeringWheel;
