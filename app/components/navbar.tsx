"use client";

import {
  Search,
  Bell,
  X,
  ShoppingCart,
  Plus,
  Flame,
  Inbox,
  User,
  LogOut,
  SquarePen,
  Bolt,
  Crown,
  Info,
  Puzzle,
  Users,
  EllipsisVertical,
  ChevronDown,
  Briefcase,
  Settings2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import SearchBar from "./search-bar";

const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 0.49 0.43"
    xmlSpace="preserve"
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      //   imageRendering: "optimizeQuality",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    {...props}
  >
    <g>
      <path
        d="M0.29 0.3c-0.05,0.02 -0.14,0.09 -0.2,0.05 -0.04,-0.04 -0.02,-0.14 0,-0.19 0.08,-0.15 0.23,-0.13 0.2,0.14zm0.19 -0.18c0.01,-0.02 0.01,-0.02 0.01,-0.04l-0.07 0.01 -0.01 0.03c-0.01,0.06 -0.05,0.1 -0.06,0.12 0,-0.05 0,-0.1 -0.02,-0.15 -0.05,-0.14 -0.24,-0.11 -0.3,0.04 -0.04,0.08 -0.05,0.21 0.02,0.27 0.09,0.08 0.19,-0.01 0.26,-0.03 0.06,0.06 0.1,0.08 0.18,0l-0.04 -0.04c-0.04,0.01 -0.05,0.04 -0.08,0.01 -0.02,-0.04 0.08,-0.1 0.11,-0.22z"
        fill="black"
      />
    </g>
  </svg>
);
const VaultIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 8.25a.75.75 0 0 1 .75.75v.354q.32.09.604.252a.75.75 0 0 1 1.04 1.04q.161.283.252.604H15a.75.75 0 0 1 0 1.5h-.354q-.09.32-.252.604a.75.75 0 0 1-1.04 1.04a2.7 2.7 0 0 1-.604.252V15a.75.75 0 0 1-1.5 0v-.354a2.7 2.7 0 0 1-.604-.252a.75.75 0 0 1-1.04-1.04a2.7 2.7 0 0 1-.252-.604H9a.75.75 0 0 1 0-1.5h.354q.09-.32.252-.604a.75.75 0 0 1 1.04-1.04q.283-.161.604-.252V9a.75.75 0 0 1 .75-.75m-.884 4.634a1.246 1.246 0 0 0 1.768 0a1.25 1.25 0 1 0-1.768 0"
      ></path>
      <path
        fill="currentColor"
        d="M6.25 12a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0M12 7.75a4.25 4.25 0 1 0 0 8.5a4.25 4.25 0 0 0 0-8.5"
      ></path>
      <path
        fill="currentColor"
        d="M14.633 2.25H9.367c-1.092 0-1.958 0-2.655.057c-.714.058-1.317.18-1.868.46a4.75 4.75 0 0 0-2.076 2.077c-.275.54-.398 1.13-.457 1.823A1.5 1.5 0 0 0 1.5 8v1.5a1.5 1.5 0 0 0 .75 1.3v2.4a1.5 1.5 0 0 0-.75 1.3V16c0 .58.33 1.083.81 1.333c.06.694.183 1.284.458 1.824a4.75 4.75 0 0 0 2.076 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057h5.266c1.092 0 1.958 0 2.655-.057c.714-.058 1.317-.18 1.869-.46a4.75 4.75 0 0 0 2.075-2.076c.281-.552.403-1.155.461-1.869c.057-.697.057-1.563.057-2.655V9.367c0-1.092 0-1.958-.057-2.655c-.058-.714-.18-1.317-.46-1.868a4.75 4.75 0 0 0-2.076-2.076c-.552-.281-1.155-.403-1.869-.461c-.697-.057-1.563-.057-2.655-.057M3.81 17.262c.415-.266.69-.732.69-1.262v-1.5a1.5 1.5 0 0 0-.75-1.3v-2.4a1.5 1.5 0 0 0 .75-1.3V8c0-.53-.275-.996-.69-1.262c.053-.565.147-.925.294-1.213a3.25 3.25 0 0 1 1.42-1.42c.305-.156.69-.252 1.31-.303c.63-.051 1.434-.052 2.566-.052h5.2c1.133 0 1.937 0 2.566.052c.62.05 1.005.147 1.31.302a3.25 3.25 0 0 1 1.42 1.42c.155.305.251.69.302 1.31c.051.63.052 1.434.052 2.566v5.2c0 1.133 0 1.937-.052 2.566c-.05.62-.147 1.005-.302 1.31a3.25 3.25 0 0 1-1.42 1.42c-.305.155-.69.251-1.31.302c-.63.051-1.434.052-2.566.052H9.4c-1.132 0-1.937 0-2.566-.052c-.62-.05-1.005-.147-1.31-.302a3.25 3.25 0 0 1-1.42-1.42c-.147-.289-.241-.649-.294-1.214"
      ></path>
    </svg>
  );
};
const WhiteBoardIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M13 15c-2.292 6-8.708 0-11 6m13.5-6h1.501c2.357 0 3.536 0 4.268-.732s.732-1.911.732-4.268V8c0-2.357 0-3.536-.732-4.268S19.36 3 17.001 3h-4c-2.357 0-3.535 0-4.267.732c-.62.62-.716 1.561-.73 3.268"></path>
        <circle cx={7.5} cy={12.5} r={2.5}></circle>
        <path d="M12 7h6m0 4h-3"></path>
      </g>
    </svg>
  );
};
const ChatIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
    >
      <path strokeWidth={2} d="M12.005 10.5h.008m3.987 0h.009m-8 0h.009"></path>
      <path
        strokeWidth={1.5}
        d="M2 10.5c0-.77.013-1.523.04-2.25c.083-2.373.125-3.56 1.09-4.533c.965-.972 2.186-1.024 4.626-1.129A100 100 0 0 1 12 2.5c1.48 0 2.905.03 4.244.088c2.44.105 3.66.157 4.626 1.13c.965.972 1.007 2.159 1.09 4.532a64 64 0 0 1 0 4.5c-.083 2.373-.125 3.56-1.09 4.533c-.965.972-2.186 1.024-4.626 1.129q-1.102.047-2.275.07c-.74.014-1.111.02-1.437.145s-.6.358-1.148.828l-2.179 1.87A.73.73 0 0 1 8 20.77v-2.348l-.244-.01c-2.44-.105-3.66-.157-4.626-1.13c-.965-.972-1.007-2.159-1.09-4.532A64 64 0 0 1 2 10.5"
      ></path>
    </g>
  </svg>
);
const ProfileCardIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path d="M21.5 16.052V7.948a4.14 4.14 0 0 0-1.236-2.945a4.25 4.25 0 0 0-2.985-1.22H6.72a4.25 4.25 0 0 0-2.985 1.22A4.14 4.14 0 0 0 2.5 7.948v8.104c0 1.105.445 2.164 1.236 2.945a4.25 4.25 0 0 0 2.985 1.22H17.28c1.12 0 2.193-.44 2.985-1.22a4.14 4.14 0 0 0 1.236-2.945"></path>
        <path d="M8.552 12.14a2.054 2.054 0 1 0 0-4.108a2.054 2.054 0 0 0 0 4.108m3.081 3.828c0-.812-.324-1.59-.902-2.165a3.09 3.09 0 0 0-4.358 0a3.05 3.05 0 0 0-.902 2.165m9.097-7.049h3.594M14.568 12h1.54m-1.54 3.081h3.594"></path>
      </g>
    </svg>
  );
};
const ExpandIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M13.97 8.53a.75.75 0 1 0 1.06-1.06l-1.948-1.95a5 5 0 0 0-.268-.254a1.3 1.3 0 0 0-.428-.249a1.25 1.25 0 0 0-.772 0a1.3 1.3 0 0 0-.428.249a5 5 0 0 0-.268.254L8.97 7.47a.75.75 0 0 0 1.06 1.06L12 6.56zm-3.94 6.94a.75.75 0 1 0-1.06 1.06l1.948 1.949c.087.086.18.18.268.255c.1.084.239.186.428.248c.25.081.521.081.772 0a1.3 1.3 0 0 0 .428-.248c.088-.075.181-.169.268-.255l1.948-1.949a.75.75 0 1 0-1.06-1.06L12 17.44z"
      ></path>
    </svg>
  );
};


const DashboardIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth={1}>
        <rect
          width={18.5}
          height={18.5}
          x={2.75}
          y={2.75}
          strokeWidth={1.5}
          rx={6}
        ></rect>
        <path
          strokeLinecap="round"
          strokeWidth={1.6}
          d="M7.672 16.222v-5.099m4.451 5.099V7.778m4.205 8.444V9.82"
        ></path>
      </g>
    </svg>
  );
};

export default function Navbar() {
  // const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  const isInCommunity = pathname?.startsWith("/c/");

  // Extract route name for display
  const getRouteName = () => {
    if (!pathname) return "";
    if (pathname.startsWith("/c/")) return "community";
    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1];
    return lastSegment || "home";
  };

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 left-0 right-0 pl-20 px-2 z-header bg-background border-b">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-shrink-0 items-center gap-2">
                <div className="flex rounded-lg overflow-hidden">
                    <img
                        src={"/assets/user-1.png"}
                        alt="User profile image"
                        className="w-10 h-10 rounded-lg object-cover"
                    />
                </div>
                <div className="flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold text-foreground">
                            Intranet community
                        </h1>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <span className="text-green-500">1,002 online</span>
                            •
                            <span>210,200 members</span>
                        </div>
                    </div>
                    <div className="w-10 h-10 rounded-full hover:bg-muted text-muted-foreground flex items-center justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="m12 19.15l3.875-3.875q.3-.3.7-.3t.7.3t.3.713t-.3.712l-3.85 3.875q-.575.575-1.425.575t-1.425-.575L6.7 16.7q-.3-.3-.288-.712t.313-.713t.713-.3t.712.3zm0-14.3L8.15 8.7q-.3.3-.7.288t-.7-.288q-.3-.3-.312-.712t.287-.713l3.85-3.85Q11.15 2.85 12 2.85t1.425.575l3.85 3.85q.3.3.288.713t-.313.712q-.3.275-.7.288t-.7-.288z"></path></svg>
                    </div>
                </div>
          </div>
          {/* <SearchBar
            isInCommunity={isInCommunity}
            communityName="Intranet"
            communityLink="/intranet/c/general"
          /> */}
          <div className="flex items-center space-x-1 md:space-x-3 ml-2">
            {/* Chat */}
            <Link
              href="/intranet/chat"
              className="flex items-center gap-1 relative text-base text-foreground hover:text-muted-foreground transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-7 lg:h-7" width={24} height={24} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9h8m-8 4h6m4-9a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-5l-5 3v-3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"></path></svg>
              <span className="w-2.5 h-2.5 bg-primary rounded-full absolute top-0 right-0" />
            </Link>
            <Link
              href="/intranet/notification"
              className="flex items-center gap-1 relative p-2 text-foreground hover:bg-muted rounded-full transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 1.25A7.75 7.75 0 0 0 4.25 9v.704a3.53 3.53 0 0 1-.593 1.958L2.51 13.385c-1.334 2-.316 4.718 2.003 5.35q1.133.309 2.284.523l.002.005C7.567 21.315 9.622 22.75 12 22.75s4.433-1.435 5.202-3.487l.002-.005a29 29 0 0 0 2.284-.523c2.319-.632 3.337-3.35 2.003-5.35l-1.148-1.723a3.53 3.53 0 0 1-.593-1.958V9A7.75 7.75 0 0 0 12 1.25m3.376 18.287a28.5 28.5 0 0 1-6.753 0c.711 1.021 1.948 1.713 3.377 1.713s2.665-.692 3.376-1.713M5.75 9a6.25 6.25 0 1 1 12.5 0v.704c0 .993.294 1.964.845 2.79l1.148 1.723a2.02 2.02 0 0 1-1.15 3.071a26.96 26.96 0 0 1-14.187 0a2.02 2.02 0 0 1-1.15-3.07l1.15-1.724a5.03 5.03 0 0 0 .844-2.79z" clipRule="evenodd"></path></svg>
              <span className="w-fit h-5 px-1.5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                5+
              </span>
            </Link>
            {/* Profile Dropdown */}
              <div ref={profileRef} className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center p-2 text-base font-medium bg-muted text-muted-foreground rounded-full hover:bg-muted/90 transition-colors cursor-pointer"
                >
                  <User className="w-6 h-6" />
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-background rounded-3xl border shadow-lg overflow-hidden" style={{zIndex: 60}}>
                    <div className="p-4">
                      {/* Profile Header */}
                      <div className="flex flex-row items-center justify-between gap-3 mb-6">
                        <div className="flex flex-row items-center gap-3">
                          <div className="w-15 h-15 bg-muted rounded-full flex items-center justify-center">
                            <User className="w-10 h-10 text-muted-foreground" />
                          </div>
                          <div className="flex flex-col">
                            <h3 className="font-semibold text-lg">Example user</h3>
                            <span className="font-semibold text-muted-foreground text-sm">
                              @example_user
                            </span>
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-lg text-foreground hover:text-muted-foreground flex items-center justify-center cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M13.685 5.25h.03a.75.75 0 0 1 0 1.5c-1.292 0-2.275 0-3.058.063c-.785.063-1.283.183-1.636.371a3.94 3.94 0 0 0-1.677 1.764c-.19.394-.304.88-.363 1.638c-.06.764-.06 1.738-.06 3.094v.11l1.12-1.12a.75.75 0 0 1 1.06 1.06l-2.4 2.4a.75.75 0 0 1-1.086-.027l-2.171-2.4a.75.75 0 0 1 1.112-1.006l.865.956v-.005c0-1.317 0-2.35.065-3.179c.066-.844.202-1.542.509-2.176a5.44 5.44 0 0 1 2.319-2.431c.625-.335 1.37-.476 2.224-.544c.85-.068 1.891-.068 3.147-.068m4.162 2.4a.75.75 0 0 1 .538.247l2.171 2.4a.75.75 0 0 1-1.112 1.006l-.865-.956v.005c0 1.317 0 2.35-.065 3.179c-.066.844-.201 1.542-.509 2.176a5.44 5.44 0 0 1-2.319 2.431c-.625.335-1.37.476-2.224.544c-.85.068-1.891.068-3.146.068h-.03a.75.75 0 0 1 0-1.5c1.291 0 2.274 0 3.057-.063c.785-.063 1.283-.183 1.636-.372a3.94 3.94 0 0 0 1.677-1.763c.19-.394.304-.88.363-1.638c.06-.764.06-1.738.06-3.094v-.11l-1.12 1.12a.75.75 0 0 1-1.06-1.06l2.4-2.4a.75.75 0 0 1 .548-.22"></path></svg>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="">
                        <Link
                          href="/dashboard/setting"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                        >
                          <DashboardIcon className="w-5 h-5" />
                          <span>Dashboard</span>
                        </Link>
                        <Link
                          href="/dashboard"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="m8.962 18.91l.464-.588zM12 5.5l-.54.52a.75.75 0 0 0 1.08 0zm3.038 13.41l.465.59zm-5.612-.588C7.91 17.127 6.253 15.96 4.938 14.48C3.65 13.028 2.75 11.335 2.75 9.137h-1.5c0 2.666 1.11 4.7 2.567 6.339c1.43 1.61 3.254 2.9 4.68 4.024zM2.75 9.137c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16z"
                            ></path>
                          </svg>
                          <span>Wishlist</span>
                        </Link>
                        <Link
                          href="/dashboard"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M13.09 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16c1.11 0 2 .89 2 2v7.81c-.88-.51-1.91-.81-3-.81c-3.31 0-6 2.69-6 6c0 .34.04.67.09 1M18 15v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></path></svg>
                          <span>Subscriptions</span>
                        </Link>
                        <Link
                          href="/dashboard/setting"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors"
                        >
                          <Settings2 className="w-5 h-5" />
                          <span>Settings</span>
                        </Link>
                      </div>

                      <div className="border-t mt-4 pt-4">
                        <button
                          onClick={() => {
                            setIsProfileOpen(false);
                            // Add sign out logic here
                          }}
                          className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg hover:bg-muted transition-colors text-left"
                        >
                          <LogOut className="w-5 h-5" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
