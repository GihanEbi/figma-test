// components/icons/MyHomeIcon.tsx
import React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  // You can add custom props here if needed, but className is usually enough
}

const CheckIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1_62)">
      <path
        opacity="0.35"
        d="M13.7682 18.5316C13.1121 17.8756 6.58733 11.3508 5.93127 10.6947C4.61915 9.3826 2.49311 9.3826 1.18099 10.6947C-0.131131 12.0068 -0.131131 14.1329 1.18099 15.445C1.83705 16.1011 8.36182 22.6258 9.01788 23.2819C10.33 24.594 12.456 24.594 13.7682 23.2819C15.0803 21.9698 15.0803 19.8426 13.7682 18.5316Z"
        fill="black"
      />
      <path
        d="M13.7681 23.2808C14.4241 22.6247 20.9489 16.0999 21.605 15.4439C22.9171 14.1318 22.9171 12.0057 21.605 10.6936C20.2928 9.38149 18.1668 9.38149 16.8547 10.6936C16.1986 11.3497 9.67384 17.8744 9.01778 18.5305C7.70566 19.8426 7.70566 21.9687 9.01778 23.2808C10.3299 24.5929 12.4571 24.5929 13.7681 23.2808Z"
        fill="black"
      />
    </g>
  </svg>
);

export default CheckIcon;
