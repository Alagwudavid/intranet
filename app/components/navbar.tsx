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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
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

  return (
    <nav className="sticky top-0 left-0 right-0 pl-20 px-2 z-header bg-background border-b">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="text-sm font-medium text-muted-foreground px-2 py-1 rounded-md bg-muted/50 capitalize">
            {getRouteName()}
          </div>
          <SearchBar
            isInCommunity={isInCommunity}
            communityName="Intranet"
            communityLink="/intranet/c/general"
          />
          <div className="flex items-center space-x-1 md:space-x-3 ml-2">
            {/* Chat */}
            <Link
              href="/intranet/chat"
              className="relative p-2.5 text-foreground hover:bg-muted rounded-full transition-colors cursor-pointer"
            >
              <ChatIcon className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center border-2 border-background">
                3
              </span>
            </Link>
            {/* Activity/Notification */}
            <Link
              href="/intranet/notification"
              className="relative p-2.5 text-foreground hover:bg-muted rounded-full transition-colors cursor-pointer"
            >
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center border-2 border-background">
                5
              </span>
            </Link>
            {/* Cart */}
            <button className="relative p-2.5 text-foreground hover:bg-background rounded-full transition-colors cursor-pointer">
              {/* <ShoppingCart className="w-5 h-5" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3.018 3.068L3.395 4.5L4.58 9.005a3 3 0 0 0 4.186 1.948l4.518-2.14A3 3 0 0 0 15 6.102V5a2 2 0 0 0-2-2H4.556l-.15-.535A2 2 0 0 0 2.48 1H.75a.75.75 0 0 0 0 1.5h1.73a.5.5 0 0 1 .482.366zm5.106 6.53l4.518-2.14a1.5 1.5 0 0 0 .858-1.356V5a.5.5 0 0 0-.5-.5H4.946L6.03 8.624a1.5 1.5 0 0 0 2.093.973M12 14.75a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5M4.75 13a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"
                  clipRule="evenodd"
                ></path>
              </svg>
              {/* <span className="absolute bottom-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                0
                            </span> */}
            </button>
            {/* Notifications */}
            {/* <button className="relative p-2.5 text-foreground hover:bg-background rounded-full transition-colors cursor-pointer">
                            <Inbox className="w-5 h-5" />
                            <span className="absolute bottom-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                                0
                            </span>
                        </button> */}
            <div className="hidden">
              {/* Login Button */}
              <Link
                href="/intranet/auth"
                className="w-10 h-10 ml-2 bg-muted text-muted-foreground rounded-full flex items-center justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.47 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H4a.75.75 0 0 1 0-1.5h8.19l-1.72-1.72a.75.75 0 0 1 0-1.06"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M11.768 3.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v6.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-2.464c-.813 0-1.469 0-2-.043c-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47c-.043-.531-.043-1.187-.043-2V15a.75.75 0 0 1 1.5 0v.2c0 .852 0 1.447.038 1.91c.037.453.107.714.207.912c.216.423.56.767.984.983c.197.1.458.17.912.207c.462.037 1.056.038 1.909.038h2.4c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207a2.25 2.25 0 0 0 .983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.057.038-1.909V8.8c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.057-.038-1.909-.038h-2.4c-.853 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909V9a.75.75 0 0 1-1.5 0v-.232c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043"
                  ></path>
                </svg>
              </Link>

              {/* Profile Avatar */}
              <div className="relative ml-2 hidden">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all"
                >
                  <User className="w-6 h-6 text-foreground" />
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsProfileOpen(false)}
                    />

                    {/* Dropdown */}
                    <div className="absolute right-0 mt-4 w-72 bg-background border rounded-lg shadow-lg z-50 overflow-hidden">
                      {/* Profile Header */}
                      <div className="p-4 border-b">
                        <div className="flex flex-col gap-3">
                          <div className="relative w-full">
                            <div className="w-full h-22 p-4 bg-muted rounded-xl"></div>
                          </div>
                          <div className="flex flex-row gap-4">
                            <div className="w-12 h-12 bg-muted border-4 rounded-full flex items-center justify-center">
                              <User className="w-7 h-7 text-foreground" />
                            </div>
                            <div>
                              <div className="font-semibold text-foreground line-clamp-1">
                                Multicademy
                              </div>
                              <div className="text-xs text-muted-foreground line-clamp-1">
                                @multicademy
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Amp up your profile */}
                      <div className="p-2 border-b">
                        <div className="text-xs font-medium text-amber-500 rounded-md p-1 px-2 bg-amber-200 flex flex-row gap-2">
                          <Info className="w-4 h-4" />
                          <span>Access all features with premium</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          <button className="flex flex-col items-center justify-center gap-1.5 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-lg text-xs font-medium transition-colors cursor-pointer">
                            <Crown className="size-6" />
                            <span className="text-xs">Premium</span>
                          </button>
                          <button className="flex flex-col items-center justify-center gap-1.5 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-lg text-xs font-medium transition-colors cursor-pointer">
                            <VaultIcon className="size-6" />
                            <span className="text-xs">Vault</span>
                          </button>
                          <button className="flex flex-col items-center justify-center gap-1.5 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-lg text-xs font-medium transition-colors cursor-pointer">
                            <ShoppingCart className="size-6" />
                            <span className="text-xs">Cart</span>
                          </button>
                          <button className="flex flex-col items-center justify-center gap-1.5 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-lg text-xs font-medium transition-colors cursor-pointer">
                            <WhiteBoardIcon className="size-6" />
                            <span className="text-xs">Whiteboard</span>
                          </button>
                          <button className="flex flex-col items-center justify-center gap-1.5 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-lg text-xs font-medium transition-colors cursor-pointer">
                            <Puzzle className="size-6" />
                            <span className="text-xs">Trivia</span>
                          </button>
                          <button className="flex flex-col items-center justify-center gap-1.5 px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-lg text-xs font-medium transition-colors cursor-pointer">
                            <ProfileCardIcon className="size-6" />
                            <span className="text-xs">Profile page</span>
                          </button>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="p-1">
                        <Link
                          href="/intranet/profile"
                          className="w-full flex items-center justify-between text-foreground px-3 py-2.5 hover:bg-muted transition-colors group rounded-lg cursor-pointer"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <div className="flex items-center gap-2">
                            <SquarePen className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-foreground">
                              Edit Profile
                            </span>
                          </div>
                          {/* <span className="text-[10px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded">NEW</span> */}
                        </Link>
                        <button className="w-full flex items-center justify-between text-foreground px-3 py-2.5 hover:bg-muted transition-colors group rounded-lg cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Bolt className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-foreground">
                              Account setting
                            </span>
                          </div>
                          <span className="text-[10px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded">
                            VOID
                          </span>
                        </button>
                        <Link
                          href="/intranet/profile"
                          className="w-full flex items-center justify-between text-foreground px-3 py-2.5 hover:bg-muted transition-colors group rounded-lg cursor-pointer"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-foreground">
                              Create team
                            </span>
                          </div>
                          <span className="text-[10px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded">
                            VOID
                          </span>
                        </Link>
                        <button className="w-full flex items-center justify-between text-red-500 px-3 py-2.5 hover:bg-red-200 transition-colors group rounded-lg cursor-pointer">
                          <div className="flex items-center gap-2">
                            <LogOut className="w-4 h-4" />
                            <span className="text-sm">Log-out</span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
