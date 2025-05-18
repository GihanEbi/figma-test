// components/icons/MyHomeIcon.tsx
import React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  // You can add custom props here if needed, but className is usually enough
}

const ChatBubbleLeftEllipsisIcon: React.FC<SvgIconProps> = (props) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.35"
      d="M23.1594 17.3994C23.1594 19.1426 21.7465 20.5554 20.0033 20.5554H10.5037C9.843 20.5554 9.20023 20.7616 8.66265 21.1446L5.69598 23.2591C4.1916 24.3322 2.11914 23.2591 2.11914 21.4286V6.8793C2.11914 5.13612 3.53199 3.72327 5.27517 3.72327H20.0033C21.7465 3.72327 23.1594 5.13612 23.1594 6.8793V17.3994Z"
      fill="black"
    />
    <path
      d="M12.6386 13.7182C13.5101 13.7182 14.2166 13.0117 14.2166 12.1402C14.2166 11.2686 13.5101 10.5621 12.6386 10.5621C11.767 10.5621 11.0605 11.2686 11.0605 12.1402C11.0605 13.0117 11.767 13.7182 12.6386 13.7182Z"
      fill="black"
    />
    <path
      d="M17.8983 13.7182C18.7698 13.7182 19.4763 13.0117 19.4763 12.1402C19.4763 11.2686 18.7698 10.5621 17.8983 10.5621C17.0268 10.5621 16.3203 11.2686 16.3203 12.1402C16.3203 13.0117 17.0268 13.7182 17.8983 13.7182Z"
      fill="black"
    />
    <path
      d="M7.3788 13.7182C8.25031 13.7182 8.95681 13.0117 8.95681 12.1402C8.95681 11.2686 8.25031 10.5621 7.3788 10.5621C6.50728 10.5621 5.80078 11.2686 5.80078 12.1402C5.80078 13.0117 6.50728 13.7182 7.3788 13.7182Z"
      fill="black"
    />
  </svg>
);

export default ChatBubbleLeftEllipsisIcon;
