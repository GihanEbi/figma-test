"use client";

import {
  HomeIcon,
  UserGroupIcon,
  PencilIcon,
  ChevronDownIcon,
  StarIcon, // Placeholder for medal
} from "@heroicons/react/24/solid"; // Solid icons
import Image from "next/image"; // If you have the profile image locally

import MyHomeIcon from "@/components/icons/HomeIcon";
import ChartBarIconSolid from "@/components/icons/ChartBarIconSolid";
import FunnelIcon from "@/components/icons/FunnelIcon";
import ChatBubbleLeftEllipsisIcon from "@/components/icons/ChatBubbleLeftEllipsisIcon";
import Cog6ToothIcon from "@/components/icons/Cog6ToothIcon";
import DocumentTextIcon from "@/components/icons/DocumentTextIcon";
import TrophyIconSolid from "@/components/icons/TrophyIconSolid";
import ShoppingCartIcon from "@/components/icons/ShoppingCartIcon";
import InformationCircleIcon from "@/components/icons/InformationCircleIcon";
import CheckIcon from "@/components/icons/CheckIcon";

// Placeholder for profile image
const DUMMY_PROFILE_IMAGE_URL = "https://via.placeholder.com/40"; // Replace with your actual image path or URL

const Sidebar = () => {
  const navItems = [
    { icon: MyHomeIcon, active: false, label: "Home" },
    { icon: TrophyIconSolid, active: false, label: "Awards" },
    { icon: DocumentTextIcon, active: false, label: "Documents" },
    { icon: ChatBubbleLeftEllipsisIcon, active: false, label: "Chat" },
    { icon: ChartBarIconSolid, active: true, label: "Statistics" }, // Active item
    { icon: Cog6ToothIcon, active: false, label: "Settings" },
    { icon: FunnelIcon, active: false, label: "Filter" },
    { icon: ShoppingCartIcon, active: false, label: "Cart" },
  ];

  return (
    <aside className="w-20 bg-white h-screen flex flex-col items-center py-8 space-y-7 shadow-md fixed top-0 left-0">
      {navItems.map((item, index) => (
        <button
          key={index}
          aria-label={item.label}
          className={`p-2 rounded-lg ${
            item.active
              ? "bg-blue-100 text-blue-600"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <item.icon className="w-6 h-6" />
        </button>
      ))}
    </aside>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <div className="flex items-center space-x-2">
        {/* <UserGroupIcon className="w-8 h-8 text-yellow-500" />
        <UserGroupIcon className="w-8 h-8 text-yellow-400 -ml-4 opacity-70" />
        <UserGroupIcon className="w-8 h-8 text-yellow-300 -ml-4 opacity-50" /> */}
        <img
          src="/logo.png" // Assuming you have profile-pic.jpg in your public folder
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
          onError={(e) => (e.currentTarget.src = DUMMY_PROFILE_IMAGE_URL)} // Fallback
        />
        <h1 className="text-2xl font-bold text-blue-600 ml-1">Kumele</h1>
      </div>
      <div>
        {/* Replace with Next/Image if you have the image locally or use a real URL */}
        <img
          src="/profile-pic.png" // Assuming you have profile-pic.jpg in your public folder
          alt="User Profile"
          className="w-10 h-10 rounded-full object-cover"
          onError={(e) => (e.currentTarget.src = DUMMY_PROFILE_IMAGE_URL)} // Fallback
        />
      </div>
    </header>
  );
};
const PieChart = () => {
  // Colors visually matched to the provided cropped pie chart image
  const goldColorPie = "#eab308"; // Visually like Tailwind yellow-500
  const bronzeColorPie = "#d97706"; // Visually like Tailwind amber-600
  const silverColorPie = "#9ca3af"; // Visually like Tailwind gray-400

  // The conic-gradient defines segments:
  // color_A start_A_angle, color_A end_A_angle,
  // color_B start_B_angle, color_B end_B_angle, ...
  // This creates sharp transitions between solid color segments.

  // Angles based on visual inspection (three equal 120-degree segments):
  // Gold: Starts at 330deg (-30deg), goes through 0deg, ends at 90deg.
  // Bronze: Starts at 90deg, ends at 210deg.
  // Silver: Starts at 210deg, ends at 330deg.

  const gradientStyle = {
    backgroundImage: `conic-gradient(
      ${goldColorPie} 0deg 90deg,         /* Gold segment part 1 (East to South) */
      ${bronzeColorPie} 90deg 210deg,    /* Bronze segment (South to WSW) */
      ${silverColorPie} 210deg 330deg,   /* Silver segment (WSW to NNW) */
      ${goldColorPie} 330deg 360deg      /* Gold segment part 2 (NNW to East) */
    )`,
  };

  return (
    <div
      className="w-48 h-48 sm:w-56 sm:h-56 rounded-full" // Original size classes
      style={gradientStyle}
      role="img"
      aria-label="Reward medals pie chart showing Gold, Bronze, and Silver segments"
    ></div>
  );
};

const RewardRingsSection = () => {
  const medals = [
    { color: "bg-yellow-400", name: "Gold", count: 22 },
    { color: "bg-gray-300", name: "Silver", count: 1 },
    { color: "bg-orange-400", name: "Bronze", count: 1 },
  ];

  return (
    <div className="w-full lg:w-2/5">
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Reward Rings</h2>
        <Image
          src="/reward-star.gif" // Path relative to the public folder
          alt="Animated reward star"
          width={20} // Corresponds to w-5 (1.25rem * 16px/rem = 20px)
          height={20} // Corresponds to h-5
          className="ml-2" // Tailwind class for margin.
          // w-5 h-5 can also be added here if you prefer,
          // but width/height props are primary for next/image.
          unoptimized={true} // For GIFs, optimization is often not needed and can sometimes break animation.
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-6">
        <PieChart />
        <div className="space-y-4 mt-4 sm:mt-0">
          {medals.map((medal) => (
            <div key={medal.name} className="flex items-start">
              <span
                className={`w-4 h-4 rounded-full ${medal.color} mt-1 mr-3 shrink-0`}
              ></span>
              <div>
                <div className="flex items-center">
                  <span className="font-medium text-gray-700 mr-2">
                    {medal.name}{" "}
                  </span>
                  <InformationCircleIcon className="w-4 h-4 text-gray-500 ml-1" />
                </div>
                <p className="text-sm text-gray-900">
                  Achieved {medal.count} medals
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Simplified Bar Chart
// const BarChart = () => {
//   const data = [
//     { month: 'Mar', value: 80, color: 'bg-blue-500' },
//     { month: 'Apr', value: 50, color: 'bg-blue-500' },
//     { month: 'May', value: 90, color: 'bg-blue-500' },
//     { month: 'Jun', value: 70, color: 'bg-yellow-400',
//       tooltip: { title: 'Group meditation', amount: '$305', type: 'Spirituality', icon: '🧘' } // Example icon
//     },
//     { month: 'Jul', value: 30, color: 'bg-blue-500' },
//     { month: 'Aug', value: 100, color: 'bg-blue-500',
//       tooltip: { title: "90's Hip-Hop", amount: '$100', type: 'House F', icon: '🎧'} // Example icon
//     },
//     { month: 'Sep', value: 55, color: 'bg-blue-500' },
//     { month: 'Oct', value: 85, color: 'bg-blue-500' },
//     { month: 'Nov', value: 65, color: 'bg-blue-500' },
//   ];
//   const maxValue = 100; // For scaling bar height

//   return (
//     <div className="mt-8">
//       <div className="flex items-end justify-between h-48 space-x-2 px-2">
//         {data.map((bar, index) => (
//           <div key={bar.month} className="flex-1 flex flex-col items-center relative">
//             {bar.tooltip && (
//               <div
//                 className="absolute bg-gray-100 p-2 rounded-md shadow-lg text-xs text-gray-700 whitespace-nowrap z-10"
//                 // Adjust positioning based on which bar it is. This is a bit manual.
//                 style={{
//                   bottom: `${(bar.value / maxValue) * 100 + 15}%`, // Position above bar
//                   left: '50%',
//                   transform: 'translateX(-50%)',
//                 }}
//               >
//                 <p className="font-semibold">{bar.tooltip.title}</p>
//                 <p className="text-gray-500">{bar.tooltip.amount} <span className="text-gray-400">{bar.tooltip.icon} {bar.tooltip.type}</span></p>
//                 {/* Dotted line - very basic */}
//                 {index === 3 && ( /* Show dotted line for June */
//                     <div className="absolute left-1/2 -bottom-2.5 transform -translate-x-1/2 w-px h-2.5 border-l border-dashed border-gray-400"></div>
//                 )}
//               </div>
//             )}
//             <div
//               className={`${bar.color} w-full rounded-t-md hover:opacity-90 transition-opacity`}
//               style={{ height: `${(bar.value / maxValue) * 100}%` }}
//               title={`${bar.month}: ${bar.value}`}
//             ></div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
//         {data.map((bar) => (
//           <span key={bar.month} className="flex-1 text-center">{bar.month}</span>
//         ))}
//       </div>
//     </div>
//   );
// };
// Updated BarChart component
const BarChart = () => {
  const data = [
    { month: "Mar", value: 80 },
    { month: "Apr", value: 50 },
    { month: "May", value: 90 },
    { month: "Jun", value: 70 },
    { month: "Jul", value: 30 },
    { month: "Aug", value: 100 },
    { month: "Sep", value: 55 },
    { month: "Oct", value: 85 },
    { month: "Nov", value: 65 },
  ];
  const maxValue = 100; // Max possible value for scaling bar height
  // Define the chart's drawable area height in pixels.
  // Tailwind's h-40 is 10rem. If 1rem = 16px, then 10rem = 160px.
  const chartAreaHeightPx = 160;

  return (
    <div className="mt-6">
      {" "}
      {/* Adjusted top margin slightly */}
      {/* Bar container:
          - flex: establishes a flex context.
          - items-end: aligns children (bar wrappers) to the bottom of this container.
          - justify-around: distributes space around the bar wrappers.
          - h-[${chartAreaHeightPx}px]: Explicit height for the charting area. Tailwind JIT creates this class.
          - space-x-1 sm:space-x-2: Adds horizontal spacing between bar wrappers.
          - px-1: Small horizontal padding for the overall chart area.
      */}
      <div
        className={`flex items-end justify-around h-[${chartAreaHeightPx}px] space-x-1 sm:space-x-2 px-1`}
      >
        {data.map((barData) => (
          // Bar wrapper:
          // - flex-1: Allows the wrapper to grow and share space along the main axis.
          // - flex flex-col: Makes this a vertical flex container for the bar itself.
          // - justify-end: Pushes the bar (its child) to the bottom of this wrapper.
          // - items-center: Centers the bar horizontally within this wrapper.
          // - h-full: Makes this wrapper take the full height of the parent chart area.
          <div
            key={barData.month}
            className="flex-1 flex flex-col justify-end items-center h-full"
          >
            {/* Actual Bar element:
                - bg-blue-500: Sets the blue background color.
                - w-full: Bar takes full width of its immediate parent (the centered column).
                - max-w-[28px] sm:max-w-[36px]: Constrains bar width for a typical bar chart look. Adjust as needed.
                - rounded-t-md: Rounds the top corners of the bar.
                - hover:bg-blue-600 transition-colors: Adds a slight hover effect.
                - style: Sets the height dynamically based on its value.
            */}
            <div
              className="bg-blue-500 w-full max-w-[28px] sm:max-w-[36px] rounded-t-md hover:bg-blue-600 transition-colors"
              style={{
                height: `${Math.max(
                  0,
                  (barData.value / maxValue) * chartAreaHeightPx
                )}px`,
              }}
              title={`${barData.month}: Value ${barData.value}`} // Basic accessibility
            ></div>
          </div>
        ))}
      </div>
      {/* Month Labels container:
          - flex, justify-around: Similar to the bar container for alignment of labels.
          - text-xs text-gray-500: Styles for the labels.
          - mt-2: Margin above the labels.
          - px-1: Matches padding of bar container.
      */}
      <div className="flex justify-around text-xs text-gray-900 mt-2 px-1">
        {data.map((barData) => (
          <span key={barData.month} className="flex-1 text-center">
            {barData.month}
          </span>
        ))}
      </div>
    </div>
  );
};

// const MoneyEarnedSection = () => {
//   return (
//     <div className="w-full lg:w-3/5 mt-10 lg:mt-0">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-gray-800">Money Earned <span className="text-blue-600">$905</span></h2>
//         <button className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-sm">
//           2022
//           <PencilIcon className="w-3 h-3 ml-2 text-gray-500" />
//           {/* Or use ChevronDownIcon for a dropdown look */}
//           {/* <ChevronDownIcon className="w-4 h-4 ml-1 text-gray-500" /> */}
//         </button>
//       </div>
//       <BarChart />
//     </div>
//   );
// };
// Ensure CheckIcon is imported: import { CheckIcon, ... } from '@heroicons/react/24/solid';

const MoneyEarnedSection = () => {
  return (
    <div className="w-full lg:w-3/5 mt-10 lg:mt-0">
      <div className="flex justify-between items-center mb-4">
        {" "}
        {/* Adjusted margin */}
        <h2 className="text-xl font-medium text-gray-800">
          Money Earned <span className="text-gray-900">$905</span>
        </h2>
        <button className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-sm">
          2022
          <CheckIcon className="w-4 h-4 ml-2 text-gray-700" />{" "}
          {/* Icon changed to CheckIcon */}
        </button>
      </div>
      <BarChart />
    </div>
  );
};
export default function StatisticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 ml-20 p-6 sm:p-8">
        {" "}
        {/* Add ml-20 for sidebar width */}
        <Header />
        <div className="mt-6 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="border-b border-gray-200 pb-4 mb-8">
            {/*
              - border-b border-gray-200: Adds a bottom border to this div, which will be the line.
              - pb-4: Adds padding below the text, creating space between the text and the line.
              - mb-8: Adds margin below this whole title section (including the line), creating space
                      before the chart content starts.
            */}
            <h1 className="text-2xl font-bold text-gray-800">
              {/* The h1 itself no longer needs a bottom margin here */}
              History & Statistics
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <RewardRingsSection />
            <MoneyEarnedSection />
          </div>
        </div>
      </main>
    </div>
  );
}
