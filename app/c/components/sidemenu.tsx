"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Trophy,
  Crown,
  Medal,
  Home,
  Globe,
  Star,
  ChevronDown,
  MessageCircleMore,
  Mic,
  Hash,
  CalendarDays,
  ShieldQuestion,
  Plus,
  Settings2,
  ShoppingBag,
  Users,
  EllipsisVertical,
  Folder,
  Ticket,
} from "lucide-react";
import SearchBar from "@/app/components/search-bar";

interface LeaderboardUser {
  id: string;
  name: string;
  username: string;
  points: number;
  rank: number;
  avatar: string;
}

interface SideMenuProps {
  leaderboard?: LeaderboardUser[];
  showOnMobile?: boolean;
}

const GeneralIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 20 20"
  >
    <path fill="currentColor" d="M5.127 3.502L5.25 3.5h9.5q.062 0 .123.002A2.25 2.25 0 0 0 12.75 2h-5.5a2.25 2.25 0 0 0-2.123 1.502M1 10.25A2.25 2.25 0 0 1 3.25 8h13.5A2.25 2.25 0 0 1 19 10.25v5.5A2.25 2.25 0 0 1 16.75 18H3.25A2.25 2.25 0 0 1 1 15.75zM3.25 6.5l-.123.002A2.25 2.25 0 0 1 5.25 5h9.5c.98 0 1.814.627 2.123 1.502L16.75 6.5z"></path>
  </svg>
);
const ClassroomIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M2 8.25A3.25 3.25 0 0 1 5.25 5h6.5A3.25 3.25 0 0 1 15 8.25v7.5a3.25 3.25 0 0 1-2.455 3.152A6.501 6.501 0 0 0 2 11.811zm17.257 9.438L16 15.44V8.562l3.257-2.249c1.161-.802 2.745.03 2.745 1.44v8.495c0 1.41-1.584 2.242-2.745 1.44M6.501 22.002A5.501 5.501 0 1 0 1.69 19.17l-.666 2.186a.5.5 0 0 0 .624.625l2.187-.666c.79.439 1.7.688 2.667.688m-2-6A.5.5 0 1 1 4.5 15h4a.5.5 0 1 1 0 1zm2 2h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1"
      ></path>
    </svg>
  );
};
const CourseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25v11.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75zM5.25 4.5A1.75 1.75 0 0 0 3.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75zM9 9.25v5.5a1 1 0 0 0 1.482.876l5-2.75a1 1 0 0 0 0-1.752l-5-2.75A1 1 0 0 0 9 9.251"
    ></path>
  </svg>
);
const SupportIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M11.75 19h-.25q-3.55 0-6.025-2.475T3 10.5t2.475-6.025T11.5 2q1.775 0 3.313.662t2.7 1.825t1.824 2.7T20 10.5q0 3.35-1.888 6.225t-4.762 4.5q-.25.125-.5.138t-.45-.113t-.35-.325t-.175-.475zm-.275-3.025q.425 0 .725-.3t.3-.725t-.3-.725t-.725-.3t-.725.3t-.3.725t.3.725t.725.3M9.3 8.375q.275.125.55.013t.45-.363q.225-.3.525-.463T11.5 7.4q.6 0 .975.337t.375.863q0 .325-.187.65t-.663.8q-.625.55-.925 1.038t-.3.987q0 .3.213.513t.512.212t.5-.225t.3-.525q.125-.425.45-.775t.6-.625q.525-.525.788-1.05t.262-1.05q0-1.15-.788-1.85T11.5 6q-.8 0-1.475.388t-1.1 1.062q-.15.275-.038.538t.413.387"
    ></path>
  </svg>
);
const RulesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5 22v-8m0 0V4m0 10l2.47-.494a8.7 8.7 0 0 1 4.925.452a8.68 8.68 0 0 0 5.327.361l.214-.053A1.404 1.404 0 0 0 19 12.904V5.537a1.2 1.2 0 0 0-1.49-1.164a8 8 0 0 1-4.911-.334l-.204-.081a8.7 8.7 0 0 0-4.924-.452L5 4m0 0V2"
    ></path>
  </svg>
);
const CupIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M22 8.162v.073c0 .86 0 1.291-.207 1.643s-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958m-20 0v.073c0 .86 0 1.291.207 1.643s.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162"></path><path fill="currentColor" fillRule="evenodd" d="M12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874s.45 1.219.4 2.485c-.172 4.349-1.11 9.78-6.211 10.26V19.5h1.43a1 1 0 0 1 .98.804l.19.946H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.65l.19-.946a1 1 0 0 1 .98-.804h1.43v-3.534c-5.1-.48-6.038-5.912-6.21-10.26c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.4 26.4 0 0 1 12 2m.952 4.199l-.098-.176C12.474 5.34 12.284 5 12 5s-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354" clipRule="evenodd"></path></svg>
);
const LibraryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M22 14v-2.202c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95V14c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14" opacity={0.5}></path><path fill="currentColor" d="M12.25 10a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75"></path></svg>
);

const ChannelIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 256 256"><path fill="currentColor" d="M224 84h-43.8l7.61-41.85a12 12 0 0 0-23.62-4.3L155.8 84h-39.6l7.61-41.85a12 12 0 1 0-23.62-4.3L91.8 84H48a12 12 0 0 0 0 24h39.44l-7.27 40H32a12 12 0 0 0 0 24h43.8l-7.61 41.85a12 12 0 0 0 9.66 14A11.4 11.4 0 0 0 80 228a12 12 0 0 0 11.8-9.86l8.4-46.14h39.6l-7.61 41.85a12 12 0 0 0 9.66 14a11.4 11.4 0 0 0 2.16.2a12 12 0 0 0 11.8-9.86L164.2 172H208a12 12 0 0 0 0-24h-39.44l7.27-40H224a12 12 0 0 0 0-24m-79.83 64h-39.61l7.27-40h39.61Z"></path></svg>
);

const MembershipIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path d="M9 14c0 1.657 2.686 3 6 3s6-1.343 6-3s-2.686-3-6-3s-6 1.343-6 3"></path><path d="M9 14v4c0 1.656 2.686 3 6 3s6-1.344 6-3v-4M3 6c0 1.072 1.144 2.062 3 2.598s4.144.536 6 0S15 7.072 15 6s-1.144-2.062-3-2.598s-4.144-.536-6 0S3 4.928 3 6"></path><path d="M3 6v10c0 .888.772 1.45 2 2"></path><path d="M3 11c0 .888.772 1.45 2 2"></path></g></svg>
);

const CoursesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M4 8H2v12a2 2 0 0 0 2 2h12v-2H4z"></path><path fill="currentColor" d="M20 2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-9 12V6l7 4z"></path></svg>
);

const EventIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 16 16"><path fill="currentColor" d="M6 7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5zM7.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m1 3h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5M10 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"></path><path fill="currentColor" fillRule="evenodd" d="M4.5 0a.5.5 0 0 1 .5.5V1h6V.5a.5.5 0 0 1 1 0V1c1.66 0 3 1.34 3 3v8c0 1.66-1.34 3-3 3H4c-1.66 0-3-1.34-3-3V4c0-1.66 1.34-3 3-3V.5a.5.5 0 0 1 .5-.5M14 4v1H2V4c0-1.1.895-2 2-2v.5a.5.5 0 0 0 1 0V2h6v.5a.5.5 0 0 0 1 0V2c1.1 0 2 .895 2 2M2 12V6h12v6c0 1.1-.895 2-2 2H4c-1.1 0-2-.895-2-2" clipRule="evenodd"></path></svg>
);


export default function SideMenu({
  leaderboard = [],
  showOnMobile = false,
}: SideMenuProps) {
  const [isCommunityOpen, setIsCommunityOpen] = useState(true);
  const [isLearningOpen, setIsLearningOpen] = useState(true);
  const [isResourcesOpen, setIsResourcesOpen] = useState(true);
  // const [isOpen, setIsResourcesOpen] = useState(true);
  const [showCommunityMenu, setShowCommunityMenu] = useState(false);
  const pathname = usePathname();

  const defaultLeaderboard: LeaderboardUser[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      username: "@sarahjohnson",
      points: 2450,
      rank: 1,
      avatar: "/assets/user-1.png",
    },
    {
      id: "2",
      name: "Mike Chen",
      username: "@mikechen",
      points: 2180,
      rank: 2,
      avatar: "/assets/user-2.png",
    },
    {
      id: "3",
      name: "Emma Wilson",
      username: "@emmawilson",
      points: 1920,
      rank: 3,
      avatar: "/assets/user-3.png",
    },
    {
      id: "4",
      name: "David Lee",
      username: "@davidlee",
      points: 1750,
      rank: 4,
      avatar: "/assets/user-4.png",
    },
    {
      id: "5",
      name: "Lisa Brown",
      username: "@lisabrown",
      points: 1680,
      rank: 5,
      avatar: "/assets/user-5.png",
    },
  ];

  const displayLeaderboard =
    leaderboard.length > 0 ? leaderboard : defaultLeaderboard;

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-orange-600" />;
      default:
        return (
          <span className="text-sm font-semibold text-muted-foreground">
            #{rank}
          </span>
        );
    }
  };

  return (
    <div className="relative h-full w-full bg-background border-r">
      <div className="h-full pb-20 overflow-y-auto custom-scrollbar">
        {/* <div className="p-4">
          <SearchBar />
        </div> */}
        <div className="p-4">
          <div className="border rounded-2xl flex flex-col p-3">
            <h1 className="text-foreground mb-1">Rate this community</h1>
            <div className="flex items-center gap-1 text-base text-muted-foreground">
              <div className="flex rounded-full w-6 h-6 overflow-hidden mr-2">
                <img
                  src={"/assets/user-1.png"}
                  alt="User profile image"
                  className="w-6 h-6 rounded-full object-cover"
                />
              </div>
              <Star className="w-5 h-5 text-amber-500" />
              <Star className="w-5 h-5 text-amber-500" />
              <Star className="w-5 h-5 text-amber-500" />
              <Star className="w-5 h-5 text-amber-500" />
              <Star className="w-5 h-5 text-amber-500" />
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col space-y-2">
          <Link
            href="/c/general"
            className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-base cursor-pointer p-1.5 px-2.5 ${pathname === "/c/general" ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : ""}`}
          >
            <GeneralIcon
              className={`size-5 ${pathname === "/c/general" ? "text-primary-foreground" : "text-muted-foreground"}`}
            />
            <span>General</span>
          </Link>
          <div
            onClick={() => setIsCommunityOpen(!isCommunityOpen)}
            className="flex items-center justify-between gap-3 mt-2 cursor-pointer"
          >
            <h1 className="flex items-center gap-1 text-base text-muted-foreground">
              <ChevronDown
                className={`size-5 transition-transform ${isCommunityOpen ? "" : "-rotate-90"}`}
              />
              Community
            </h1>
          </div>
          {isCommunityOpen && (
            <>
              <div className="rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-base cursor-pointer p-1.5 px-2.5">
                <ChannelIcon className={"size-5 text-muted-foreground"} />
                <span>Discussions</span>
              </div>
              <div className="rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-base cursor-pointer p-1.5 px-2.5">
                <ChannelIcon className={"size-5 text-muted-foreground"} />
                <span>FAQ</span>
              </div>
            </>
          )}

          {/* <div
            onClick={() => setIsLearningOpen(!isLearningOpen)}
            className="flex items-center justify-between gap-3 mt-2 cursor-pointer"
          >
            <h1 className="flex items-center gap-1 text-base text-muted-foreground">
              <ChevronDown
                className={`size-5 transition-transform ${isLearningOpen ? "" : "-rotate-90"}`}
              />
              Learning
            </h1>
          </div>
          {isLearningOpen && (
            <>
              <Link
                href="/c/classroom"
                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-base cursor-pointer p-1.5 px-2.5 ${pathname === "/c/classroom" ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : ""}`}
              >
                
                <CoursesIcon className={`size-5 ${pathname === "/c/classroom" ? "text-primary-foreground" : "text-muted-foreground"}`} />
                <span>Courses</span>
              </Link>
              <Link
                href="/c/calendar"
                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-base cursor-pointer p-1.5 px-2.5 ${pathname === "/c/calendar" ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : ""}`}
              >
                <EventIcon className={`size-5 ${pathname === "/c/calendar" ? "text-primary-foreground" : "text-muted-foreground"}`} />
                <span>Events</span>
              </Link>
              <Link
                href="/c/library"
                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-base cursor-pointer p-1.5 px-2.5 ${pathname === "/c/library" ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : ""}`}
              >
                <LibraryIcon className={`size-5 ${pathname === "/c/library" ? "text-primary-foreground" : "text-muted-foreground"}`} />
                <span>Library</span>
              </Link>
            </>
          )} */}

          <div
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            className="flex items-center justify-between gap-3 mt-2 cursor-pointer"
          >
            <h1 className="flex items-center gap-1 text-base text-muted-foreground">
              <ChevronDown
                className={`size-5 transition-transform ${isResourcesOpen ? "" : "-rotate-90"}`}
              />
              Resources
            </h1>
          </div>
          {isResourcesOpen && (
            <>
              <Link
                href="/c/calendar"
                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-base cursor-pointer p-1.5 px-2.5 ${pathname === "/c/calendar" ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : ""}`}
              >
                <Ticket className={`size-5 ${pathname === "/c/calendar" ? "text-primary-foreground" : "text-muted-foreground"}`} />
                <span>Events</span>
              </Link>
              <Link
                href="/c/library"
                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-base cursor-pointer p-1.5 px-2.5 ${pathname === "/c/library" ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : ""}`}
              >
                <Folder className={`size-5 ${pathname === "/c/library" ? "text-primary-foreground" : "text-muted-foreground"}`} />
                <span>Library</span>
              </Link>
              {/* <Link
                href="/c/shop"
                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-base cursor-pointer p-1.5 px-2.5 ${pathname === "/c/shop" ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : ""}`}
              >
                <ShoppingBag className={`size-5 ${pathname === "/c/shop" ? "text-primary-foreground" : "text-muted-foreground"}`} />
                <span>Shop</span>
              </Link> */}
              <Link
                href="/c/members"
                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-base cursor-pointer p-1.5 px-2.5 ${pathname === "/c/members" ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : ""}`}
              >
                <Users className={`size-5 ${pathname === "/c/members" ? "text-primary-foreground" : "text-muted-foreground"}`} />
                <span>Members</span>
              </Link>
              <Link
                href="/c/leaderboard"
                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-base cursor-pointer p-1.5 px-2.5 ${pathname === "/c/leaderboard" ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : ""}`}
              >
                <CupIcon className={`size-5 ${pathname === "/c/leaderboard" ? "text-primary-foreground" : "text-muted-foreground"}`} />
                <span>Leaderboard</span>
              </Link>
              <Link
                href="/c/about"
                className={`rounded-lg hover:bg-muted/50 hover:text-foreground text-muted-foreground flex items-center gap-2 text-base cursor-pointer p-1.5 px-2.5 ${pathname === "/c/about" ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : ""}`}
              >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`size-5 ${pathname === "/c/about" ? "text-primary-foreground" : "text-muted-foreground"}`}
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"
                    ></path>
                  </svg>
                <span>About</span>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center p-3 border-t absolute bottom-0 w-full bg-background">
          <Link href="/c/membership" className="w-full px-5 py-2.5 text-primary-foreground bg-primary hover:bg-primary/80 rounded-full text-lg text-center font-medium transition-colors">
              Join community
          </Link>
      </div>
    </div>
  );
}
