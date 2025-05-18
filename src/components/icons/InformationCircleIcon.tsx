// components/icons/MyHomeIcon.tsx
import React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  // You can add custom props here if needed, but className is usually enough
}

const InformationCircleIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0807 12.5235C9.73802 12.5235 9.4588 12.2449 9.4588 11.9016V7.5485C9.4588 6.86133 8.90222 6.30475 8.21504 6.30475H5.10567C4.7624 6.30475 4.4838 6.58335 4.4838 6.92662C4.4838 7.2699 4.75866 7.5485 5.10567 7.5485C5.45268 7.5485 5.72755 7.8271 5.72755 8.17037V11.9016C5.72755 12.2449 5.45703 12.5235 5.10567 12.5235C4.75431 12.5235 4.4838 12.8021 4.4838 13.1454C4.4838 13.4886 4.7624 13.7672 5.10567 13.7672H10.0807C10.4239 13.7672 10.7025 13.4886 10.7025 13.1454C10.7025 12.8021 10.4233 12.5235 10.0807 12.5235Z"
      fill="black"
    />
    <path
      opacity="0.35"
      d="M7.59356 5.06139C8.62392 5.06139 9.45919 4.22612 9.45919 3.19576C9.45919 2.16541 8.62392 1.33014 7.59356 1.33014C6.5632 1.33014 5.72794 2.16541 5.72794 3.19576C5.72794 4.22612 6.5632 5.06139 7.59356 5.06139Z"
      fill="black"
    />
  </svg>
);

export default InformationCircleIcon;
