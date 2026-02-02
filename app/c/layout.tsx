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
import AppContent from "../components/app-content";
import FooterMini from "../components/footer-mini";

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
    <div className="w-full h-screen flex items-center gap-0 bg-muted">
      <Sidebar />
      <div className="flex-1 flex flex-col w-[calc(100%-88px)] h-screen relative bg-muted pr-2">
        <AppContent>
          <Navbar />
          {children}
        </AppContent>
        <FooterMini />
      </div>
    </div>
  );
}
