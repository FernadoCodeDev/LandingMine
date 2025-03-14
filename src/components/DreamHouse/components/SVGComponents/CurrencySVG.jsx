import React from "react";
const CurrencySVG = (props) => {
  return (
    <svg
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <title>{"currency-dollar-solid"}</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="invisible_box" data-name="invisible box">
          <rect width={48} height={48} fill="none" />
          <rect width={48} height={48} fill="none" />
        </g>
        <g id="icons_Q2" data-name="icons Q2">
          <path d="M26,21.9V10.5a15.4,15.4,0,0,1,5.2,2.1,2.2,2.2,0,0,0,3.1-.7A1.8,1.8,0,0,0,33.9,9,17.1,17.1,0,0,0,26,6.2V4a2,2,0,0,0-4,0V6c-6.3.5-10.8,4.4-10.8,9.7h0c0,6,4.3,8.4,10.8,10V37.6a16.7,16.7,0,0,1-7.3-3.1,2,2,0,0,0-3,.4c-1,1.3-.9,2.3.1,3A19.8,19.8,0,0,0,22,41.8V44a2,2,0,0,0,4,0V41.9c6.5-.5,11-4.4,11-10h0C37,26.7,33.7,23.7,26,21.9ZM16,15.5h0c0-2.8,2.4-4.8,6-5.1V21C17,19.6,16,17.9,16,15.5ZM32.2,32.3c0,2.9-2.5,5-6.2,5.4v-11c5.1,1.4,6.2,3.1,6.2,5.5Z" />
        </g>
      </g>
    </g>
  </svg>
  );
};

export default CurrencySVG;
