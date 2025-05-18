"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

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

const DUMMY_PROFILE_IMAGE_URL = "https://via.placeholder.com/40";

// --- TYPE DEFINITIONS --- (assuming these are already defined from previous step)
interface MonthStatDetail {
  title: string;
  amount: number;
  description: string;
  iconSymbol?: string;
}

interface BarDataPoint {
  month: string;
  value: number;
  stats?: MonthStatDetail[];
}

interface YearData {
  totalEarned: number;
  data: BarDataPoint[];
}

const yearlyMockData: {
  "2022": YearData;
} = {
  "2022": {
    totalEarned: 905,
    data: [
      {
        month: "Mar",
        value: 80,
        stats: [
          {
            title: "Spring Promo",
            amount: 200,
            description: "Campaign A",
            iconSymbol: "🌸",
          },
        ],
      },
      {
        month: "Apr",
        value: 50,
        stats: [
          {
            title: "Workshop Fees",
            amount: 450,
            description: "Spirituality",
            iconSymbol: "🛠️",
          },
        ],
      }, // No specific stats for April
      {
        month: "May",
        value: 90,
        stats: [
          {
            title: "Workshop Fees",
            amount: 350,
            description: "Advanced",
            iconSymbol: "🛠️",
          },
        ],
      },
      {
        month: "Jun",
        value: 70,
        stats: [
          {
            title: "Group meditation",
            amount: 305,
            description: "Spirituality",
            iconSymbol: "☯️",
          },
          {
            title: "90's Hip-Hop",
            amount: 100,
            description: "HouseF",
            iconSymbol: "🏠",
          },
        ],
      },
      {
        month: "Jul",
        value: 30,
        stats: [
          {
            title: "Workshop Fees",
            amount: 350,
            description: "Advanced",
            iconSymbol: "🛠️",
          },
        ],
      },
      {
        month: "Aug",
        value: 100,
        stats: [
          {
            title: "Summer Special",
            amount: 400,
            description: "Limited Time",
            iconSymbol: "☀️",
          },
        ],
      },
      {
        month: "Sep",
        value: 55,
        stats: [
          {
            title: "Group meditation",
            amount: 305,
            description: "Spirituality",
            iconSymbol: "☯️",
          },
          {
            title: "90's Hip-Hop",
            amount: 100,
            description: "HouseF",
            iconSymbol: "🏠",
          },
        ],
      },
      {
        month: "Oct",
        value: 85,
        stats: [
          {
            title: "Workshop Fees",
            amount: 350,
            description: "Advanced",
            iconSymbol: "🛠️",
          },
        ],
      },
      {
        month: "Nov",
        value: 65,
        stats: [
          {
            title: "Group meditation",
            amount: 305,
            description: "Spirituality",
            iconSymbol: "☯️",
          },
          {
            title: "90's Hip-Hop",
            amount: 100,
            description: "HouseF",
            iconSymbol: "🏠",
          },
        ],
      },
    ],
  },
};

type YearKey = keyof typeof yearlyMockData;
// --- COMPONENTS ---

const Sidebar = () => {
  const navItems = [
    { icon: MyHomeIcon, active: false, label: "Home" },
    { icon: TrophyIconSolid, active: false, label: "Awards" },
    { icon: DocumentTextIcon, active: false, label: "Documents" },
    { icon: ChatBubbleLeftEllipsisIcon, active: false, label: "Chat" },
    { icon: ChartBarIconSolid, active: true, label: "Statistics" },
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
        <img
          src="/logo.png"
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
          onError={(e) => (e.currentTarget.src = DUMMY_PROFILE_IMAGE_URL)}
        />
        <h1 className="text-2xl font-bold text-blue-600 ml-1">Kumele</h1>
      </div>
      <div>
        <img
          src="/profile-pic.png"
          alt="User Profile"
          className="w-10 h-10 rounded-full object-cover"
          onError={(e) => (e.currentTarget.src = DUMMY_PROFILE_IMAGE_URL)}
        />
      </div>
    </header>
  );
};

const PieChart = () => {
  const goldColorPie = "#eab308";
  const bronzeColorPie = "#d97706";
  const silverColorPie = "#9ca3af";

  const gradientStyle = {
    backgroundImage: `conic-gradient(
      ${goldColorPie} 0deg 90deg,
      ${bronzeColorPie} 90deg 210deg,
      ${silverColorPie} 210deg 330deg,
      ${goldColorPie} 330deg 360deg
    )`,
  };

  return (
    <div
      className="w-48 h-48 sm:w-56 sm:h-56 rounded-full"
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
          src="/reward-star.gif"
          alt="Animated reward star"
          width={20}
          height={20}
          className="ml-2"
          unoptimized={true}
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
// --- COMPONENTS ---
// ... (Sidebar, Header, PieChart, RewardRingsSection remain the same)

interface BarChartProps {
  data: BarDataPoint[];
  selectedMonth: string | null; // New prop
}

const BarChart: React.FC<BarChartProps> = ({ data, selectedMonth }) => {
  const maxValue = Math.max(100, ...data.map((d) => d.value)); // Dynamically set maxValue or keep it 100 if preferred
  const chartAreaHeightPx = 160; // Base height for the bars
  const statsDisplayHeightBuffer = 60; // Extra space reserved for stats display above bars

  if (!data || data.length === 0) {
    return (
      <div
        className={`h-[${
          chartAreaHeightPx + statsDisplayHeightBuffer + 28
        }px] flex items-center justify-center text-gray-500`}
      >
        No data available for selected period.
      </div>
    );
  }

  return (
    <div className="mt-6">
      {/* Container for bars and potential stats, includes buffer for stats */}
      <div
        className={`flex items-end justify-around h-[${
          chartAreaHeightPx + statsDisplayHeightBuffer
        }px] space-x-1 sm:space-x-2 px-1 relative`}
      >
        {data.map((barData, index) => {
          const isMonthSelected = barData.month === selectedMonth;
          const barHeight = Math.max(
            0,
            (barData.value / maxValue) * chartAreaHeightPx
          );
          const hasStats =
            isMonthSelected && barData.stats && barData.stats.length > 0;

          // Calculate how many stat cards to show for centering. Max 2 for this layout.
          const numStatCards = hasStats
            ? Math.min(barData.stats!.length, 2)
            : 0;
          // Adjust horizontal positioning based on number of cards for better centering over the bar
          const statCardsHorizontalOffset =
            numStatCards === 1
              ? "-50%" // Center single card
              : numStatCards === 2
              ? `calc(-50% - ${(100 + 4) / 2}px + 50%)` // Center two cards (approx 100px width + 4px space)
              : "-50%";

          return (
            <div
              key={`${barData.month}-${index}`} // Using index for key safety if months can repeat (though unlikely here)
              className="flex-1 flex flex-col justify-end items-center h-full relative"
            >
              {/* Stat display section */}
              {hasStats && (
                <div
                  className="absolute flex flex-col items-center z-10"
                  style={{
                    // Position the entire stats group (cards + line)
                    // 'barHeight' is top of bar, '10px' for dotted line, '5px' gap to cards
                    bottom: `${barHeight + 10 + 5}px`,
                    left: "50%",
                    // Transform to center the group above the bar
                    // This might need fine-tuning based on actual stat card widths
                    transform: `translateX(${statCardsHorizontalOffset})`,
                    minWidth: "100px", // Ensure it has some base width
                  }}
                >
                  {/* Stat cards container (horizontal layout for multiple cards) */}
                  <div className="flex space-x-1 items-end mb-1">
                    {barData.stats!.slice(0, 2).map(
                      (
                        stat,
                        statIndex // Show max 2 stat cards as per image
                      ) => (
                        <div
                          key={statIndex}
                          className="bg-gray-100 p-1.5 rounded text-xs shadow-md w-max min-w-[100px] max-w-[150px] border border-gray-200"
                        >
                          <p className="font-bold text-gray-800 whitespace-nowrap truncate">
                            {stat.title}
                          </p>
                          <div className="flex items-center text-gray-600 text-[11px] mt-0.5">
                            <span className="font-medium text-gray-800">
                              ${stat.amount}
                            </span>
                            {stat.iconSymbol && (
                              <span className="mx-1 text-[10px] leading-none text-gray-500 align-middle">
                                {stat.iconSymbol}
                              </span>
                            )}
                            <span className="text-gray-500 truncate">
                              {stat.description}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  {/* Dotted line connecting stats to the bar */}
                  <div
                    className="w-px" // Vertical line
                    style={{
                      height: "10px", // Height of the dotted line
                      // Dotted line effect
                      backgroundImage:
                        "linear-gradient(to bottom, #cbd5e1 60%, transparent 40%)", // Tailwind's gray-300
                      backgroundSize: "1px 3px", // 1px wide, 3px pattern (dash + gap)
                      backgroundRepeat: "repeat-y",
                    }}
                  ></div>
                </div>
              )}

              {/* The bar itself */}
              <div
                className={`w-full max-w-[28px] sm:max-w-[36px] rounded-t-md transition-all duration-300 ease-out
                  ${
                    isMonthSelected
                      ? "bg-yellow-400"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                style={{
                  height: `${barHeight}px`,
                }}
                title={`${barData.month}: Value ${barData.value}`} // Tooltip for accessibility
              ></div>
            </div>
          );
        })}
      </div>

      {/* Month labels below the chart */}
      <div className="flex justify-around text-xs text-gray-900 mt-2 px-1">
        {data.map((barData, index) => (
          <span
            key={`${barData.month}-label-${index}`}
            className="flex-1 text-center"
          >
            {barData.month}
          </span>
        ))}
      </div>
    </div>
  );
};

import { useEffect, useRef } from "react"; // Add useEffect, useRef
// import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/solid"; // Ensure ChevronDownIcon is imported

// ... (other imports)

const MoneyEarnedSection = () => {
  const [selectedYear, setSelectedYear] = useState<YearKey>("2022");
  // Initial month is "Jun" for 2022 to match the image, otherwise null (overview)
  const [selectedMonth, setSelectedMonth] = useState<string | null>(
    selectedYear === "2022" ? "Jun" : null
  );
  const [isMonthListOpen, setIsMonthListOpen] = useState(false);
  const monthDropdownRef = useRef<HTMLDivElement>(null);

  const currentYearData: YearData = yearlyMockData[selectedYear] || {
    totalEarned: 0,
    data: [],
  };
  const availableMonths = currentYearData.data.map((d) => d.month);

  const handleYearChange = (newYear: YearKey) => {
    setSelectedYear(newYear);
    const newYearMonthsData = yearlyMockData[newYear]?.data;
    // Set a default selected month for the new year, or clear it
    if (
      newYear === "2022" &&
      newYearMonthsData?.find((m) => m.month === "Jun")
    ) {
      setSelectedMonth("Jun"); // Default to Jun for 2022 as per image
    } else {
      setSelectedMonth(null); // Default to overview/no specific month for other years or if Jun not present
    }
    setIsMonthListOpen(false); // Close month list when year changes
  };

  const toggleMonthList = () => setIsMonthListOpen((prev) => !prev);

  const selectMonth = (month: string | null) => {
    setSelectedMonth(month);
    setIsMonthListOpen(false);
  };

  // Effect for closing dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        monthDropdownRef.current &&
        !monthDropdownRef.current.contains(event.target as Node)
      ) {
        setIsMonthListOpen(false);
      }
    };

    if (isMonthListOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMonthListOpen]);

  return (
    <div className="w-full lg:w-3/5 mt-10 lg:mt-0">
      <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-4">
        {" "}
        {/* items-start for alignment */}
        <div>
          <h2 className="text-xl font-medium text-gray-800">
            Money Earned{" "}
            <span className="text-gray-900">
              ${currentYearData.totalEarned}
            </span>
          </h2>
          {/* Simplified Year Selector Buttons */}
          {/* <div className="flex space-x-1 mt-2">
            {(Object.keys(yearlyMockData) as YearKey[]).map((year) => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-2.5 py-1 rounded-md text-xs transition-colors ${
                  selectedYear === year
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {year}
              </button>
            ))}
          </div> */}
        </div>
        {/* Custom Month Dropdown Area */}
        <div className="relative mt-4 sm:mt-0" ref={monthDropdownRef}>
          <button
            onClick={toggleMonthList}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-between min-w-[100px]"
            aria-haspopup="listbox"
            aria-expanded={isMonthListOpen}
            aria-controls="month-list-dropdown"
          >
            <span>{selectedYear}</span>
            {/* Using CheckIcon as per image */}
            <CheckIcon className="w-4 h-4 ml-3 text-gray-600" />
            {/* Alternative: Chevron for more standard dropdown feel
            <ChevronDownIcon
              className={`w-5 h-5 ml-2 text-gray-600 transition-transform duration-200 ${
                isMonthListOpen ? "rotate-180" : ""
              }`}
            /> */}
          </button>

          {isMonthListOpen && (
            <div
              id="month-list-dropdown"
              className="absolute right-0 mt-1 w-24 bg-white rounded-md shadow-xl z-20 border border-gray-200 py-1"
              role="listbox"
            >
              <ul className="overflow-y-auto">
                {/* <li
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${
                    !selectedMonth
                      ? "bg-blue-50 font-semibold text-blue-700"
                      : ""
                  }`}
                  onClick={() => selectMonth(null)} // null for "Overview" or no specific month
                  role="option"
                  aria-selected={!selectedMonth}
                >
                  Overview (All Months)
                </li> */}
                {availableMonths.map((month) => (
                  <li
                    key={month}
                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${
                      selectedMonth === month
                        ? "bg-blue-50 font-semibold text-blue-700"
                        : ""
                    }`}
                    onClick={() => selectMonth(month)}
                    role="option"
                    aria-selected={selectedMonth === month}
                  >
                    {month}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <BarChart data={currentYearData.data} selectedMonth={selectedMonth} />
    </div>
  );
};

// ... (StatisticsPage component remains the same, but will now use the updated components)
// Remember to import ChevronDownIcon if it's not already.
// import { ChevronDownIcon, CheckIcon } from "@heroicons/react/24/solid"; // Ensure CheckIcon is also there

export default function StatisticsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 ml-20 p-6 sm:p-8">
        <Header />
        <div className="mt-6 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <div className="border-b border-gray-200 pb-4 mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
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
