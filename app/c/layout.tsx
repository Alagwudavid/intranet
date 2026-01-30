"use client";

import { Metadata } from "next";
import Navbar from "../components/navbar";
import Sidebar from "@/app/components/sidebar";
import Footer from "../components/footer";
import { TabNav } from "@/components/ui/tab-nav";
import SideMenu from "./components/sidemenu";
import CommunityNavInfo from "./components/community-nav-info";
import Rightbar from "./components/rightbar";
import { useState, useEffect } from "react";

const tabs = [
  { id: "general", label: "General", href: "/c/general" },
  { id: "chat", label: "Chat", href: "/c/chat" },
  { id: "classroom", label: "Classroom", href: "/c/classroom" },
  { id: "calendar", label: "Calendar", href: "/c/calendar" },
  { id: "members", label: "Members", href: "/c/members" },
  { id: "leaderboards", label: "Leaderboards", href: "/c/leaderboard" },
];

const moreItems = [
  { id: "challenges", label: "Challenges", href: "/c/challenges" },
  // { id: 'shop', label: 'Shop', href: '/c/shop' },
  { id: "faq", label: "FAQ / Moderation", href: "/c/faq" },
  { id: "about", label: "About", href: "/c/about" },
];

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isRightbarVisible, setIsRightbarVisible] = useState(true);

  useEffect(() => {
    // Load initial state from localStorage
    const saved = localStorage.getItem("rightbarVisible");
    if (saved !== null) {
      setIsRightbarVisible(saved === "true");
    }

    // Listen for toggle events
    const handleToggle = (e: CustomEvent) => {
      setIsRightbarVisible(e.detail.visible);
    };

    window.addEventListener("toggleRightbar", handleToggle as EventListener);
    return () =>
      window.removeEventListener(
        "toggleRightbar",
        handleToggle as EventListener,
      );
  }, []);
  return (
    <>
      {/* Sidebar - Global fixed position */}
      <Sidebar />

      {/* Navbar - Sticky at top with pl-20 for sidebar */}
      <Navbar />

      {/* Main layout container */}
      <div className="h-[calc(100vh-3.5rem)] flex flex-col overflow-hidden pl-20">
        {/* InfoNav - Fixed height 32px */}
        {/* <div className="h-8 shrink-0">
          <CommunityNavInfo />
        </div> */}

        {/* Content area - Remaining height with 3 columns */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Menu - Fixed width 320px with internal scroll */}
          <div className="w-80 shrink-0">
            <SideMenu />
          </div>

          {/* Main Content - Flexible width with internal scroll */}
          <div className="flex-1 overflow-y-auto custom-scrollbar min-w-96">
            {children}
          </div>

          {/* Right Bar - Fixed width 288px with internal scroll - Conditionally rendered */}
          {/* {isRightbarVisible && (
            <div className="w-72 shrink-0 hidden lg:block">
              <Rightbar />
            </div>
          )} */}
        </div>
      </div>
    </>
  );
}
