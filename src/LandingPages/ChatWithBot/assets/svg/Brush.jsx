import React from "react";
const Brush = (props) => {
  return (
    <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
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
        d="M7.5 5H5V11H19V5H16.5V8C16.5 8.27614 16.2761 8.5 16 8.5C15.7239 8.5 15.5 8.27614 15.5 8V5H14V9.5C14 9.77614 13.7761 10 13.5 10C13.2239 10 13 9.77614 13 9.5V5H8.5V7C8.5 7.27614 8.27614 7.5 8 7.5C7.72386 7.5 7.5 7.27614 7.5 7V5Z"
        fill="currentcolor"
      />
      <path
        d="M5 13V12H19V13C19 14.1046 18.1046 15 17 15H14V18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18V15H7C5.89543 15 5 14.1046 5 13Z"
        fill="currentcolor"
      />
    </g>
  </svg>
  );
};

export default Brush;
