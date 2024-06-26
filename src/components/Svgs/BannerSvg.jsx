import React from "react";

const BannerSvg = ({ className, color, current }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="90"
      zoomAndPan="magnify"
      viewBox="0 0 67.5 56.249996"
      height="75"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
    >
      <defs>
        <clipPath id="71caa4ec1a">
          <path
            d="M 0.199219 0 L 66.808594 0 L 66.808594 55.511719 L 0.199219 55.511719 Z M 0.199219 0 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="64078a75ae">
          <path
            d="M 3.898438 0 L 63.109375 0 C 64.089844 0 65.03125 0.390625 65.726562 1.082031 C 66.417969 1.777344 66.808594 2.71875 66.808594 3.699219 L 66.808594 51.808594 C 66.808594 52.789062 66.417969 53.730469 65.726562 54.425781 C 65.03125 55.121094 64.089844 55.511719 63.109375 55.511719 L 3.898438 55.511719 C 2.917969 55.511719 1.976562 55.121094 1.28125 54.425781 C 0.585938 53.730469 0.199219 52.789062 0.199219 51.808594 L 0.199219 3.699219 C 0.199219 2.71875 0.585938 1.777344 1.28125 1.082031 C 1.976562 0.390625 2.917969 0 3.898438 0 Z M 3.898438 0 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="f0866de873">
          <path
            d="M 0.199219 0 L 66.316406 0 L 66.316406 55.511719 L 0.199219 55.511719 Z M 0.199219 0 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="f47807b6d5">
          <path
            d="M 3.898438 0 L 63.105469 0 C 64.085938 0 65.027344 0.390625 65.722656 1.082031 C 66.414062 1.777344 66.804688 2.71875 66.804688 3.699219 L 66.804688 51.804688 C 66.804688 52.785156 66.414062 53.726562 65.722656 54.421875 C 65.027344 55.113281 64.085938 55.503906 63.105469 55.503906 L 3.898438 55.503906 C 2.917969 55.503906 1.976562 55.113281 1.285156 54.421875 C 0.589844 53.726562 0.199219 52.785156 0.199219 51.804688 L 0.199219 3.699219 C 0.199219 2.71875 0.589844 1.777344 1.285156 1.082031 C 1.976562 0.390625 2.917969 0 3.898438 0 Z M 3.898438 0 "
            clip-rule="nonzero"
          />
        </clipPath>
        <clipPath id="d2290c449a">
          <path
            d="M 4.96875 40.441406 L 62.035156 40.441406 L 62.035156 47.375 L 4.96875 47.375 Z M 4.96875 40.441406 "
            clip-rule="nonzero"
          />
        </clipPath>
      </defs>
      <g clip-path="url(#71caa4ec1a)">
        <g clip-path="url(#64078a75ae)">
          <path
            fill={color}
            d="M 0.199219 0 L 66.765625 0 L 66.765625 55.511719 L 0.199219 55.511719 Z M 0.199219 0 "
            fill-opacity="1"
            fill-rule="nonzero"
          />
        </g>
      </g>
      <g clip-path="url(#f0866de873)">
        <g clip-path="url(#f47807b6d5)">
          <path
            stroke-linecap="butt"
            transform="matrix(1.652975, 0, 0, 1.652975, 0.199953, -0.00000197368)"
            fill="none"
            stroke-linejoin="miter"
            d="M 2.237472 0.00000119402 L 38.055942 0.00000119402 C 38.649096 0.00000119402 39.218619 0.236318 39.639262 0.654598 C 40.057542 1.075241 40.293858 1.644763 40.293858 2.237917 L 40.293858 31.340276 C 40.293858 31.93343 40.057542 32.502953 39.639262 32.923596 C 39.218619 33.341876 38.649096 33.578192 38.055942 33.578192 L 2.237472 33.578192 C 1.644318 33.578192 1.074796 33.341876 0.656516 32.923596 C 0.235872 32.502953 -0.000443905 31.93343 -0.000443905 31.340276 L -0.000443905 2.237917 C -0.000443905 1.644763 0.235872 1.075241 0.656516 0.654598 C 1.074796 0.236318 1.644318 0.00000119402 2.237472 0.00000119402 Z M 2.237472 0.00000119402 "
            stroke="#575d68"
            stroke-width="2.686543"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </g>
      </g>
      <g clip-path="url(#d2290c449a)">
        <path
          fill={current ? "rgba(20, 97, 225, 0.93)" : "#ffffff"}
          d="M 4.96875 40.441406 L 62.046875 40.441406 L 62.046875 47.375 L 4.96875 47.375 Z M 4.96875 40.441406 "
          fill-opacity="1"
          fill-rule="nonzero"
        />
      </g>
    </svg>
  );
};

export default BannerSvg;
