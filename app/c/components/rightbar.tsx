"use client";

import Image from "next/image";
import Link from "next/link";
import { Trophy, Crown, Medal, Home, Globe, Star, ChevronDown, MessageCircleMore, Mic, Hash, CalendarDays, ShieldQuestion, Plus, Settings2, ShoppingBag, EllipsisVertical } from "lucide-react";

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

const ClassroomIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M2 8.25A3.25 3.25 0 0 1 5.25 5h6.5A3.25 3.25 0 0 1 15 8.25v7.5a3.25 3.25 0 0 1-2.455 3.152A6.501 6.501 0 0 0 2 11.811zm17.257 9.438L16 15.44V8.562l3.257-2.249c1.161-.802 2.745.03 2.745 1.44v8.495c0 1.41-1.584 2.242-2.745 1.44M6.501 22.002A5.501 5.501 0 1 0 1.69 19.17l-.666 2.186a.5.5 0 0 0 .624.625l2.187-.666c.79.439 1.7.688 2.667.688m-2-6A.5.5 0 1 1 4.5 15h4a.5.5 0 1 1 0 1zm2 2h-2a.5.5 0 1 1 0-1h2a.5.5 0 1 1 0 1"></path></svg>;
}
const CourseIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25v11.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75zM5.25 4.5A1.75 1.75 0 0 0 3.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75zM9 9.25v5.5a1 1 0 0 0 1.482.876l5-2.75a1 1 0 0 0 0-1.752l-5-2.75A1 1 0 0 0 9 9.251"></path></svg>
);
const SupportIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 19h-.25q-3.55 0-6.025-2.475T3 10.5t2.475-6.025T11.5 2q1.775 0 3.313.662t2.7 1.825t1.824 2.7T20 10.5q0 3.35-1.888 6.225t-4.762 4.5q-.25.125-.5.138t-.45-.113t-.35-.325t-.175-.475zm-.275-3.025q.425 0 .725-.3t.3-.725t-.3-.725t-.725-.3t-.725.3t-.3.725t.3.725t.725.3M9.3 8.375q.275.125.55.013t.45-.363q.225-.3.525-.463T11.5 7.4q.6 0 .975.337t.375.863q0 .325-.187.65t-.663.8q-.625.55-.925 1.038t-.3.987q0 .3.213.513t.512.212t.5-.225t.3-.525q.125-.425.45-.775t.6-.625q.525-.525.788-1.05t.262-1.05q0-1.15-.788-1.85T11.5 6q-.8 0-1.475.388t-1.1 1.062q-.15.275-.038.538t.413.387"></path></svg>
);
export default function SideMenu({ leaderboard = [], showOnMobile = false }: SideMenuProps) {
    const defaultLeaderboard: LeaderboardUser[] = [
        {
            id: "1",
            name: "Sarah Johnson",
            username: "@sarahjohnson",
            points: 2450,
            rank: 1,
            avatar: "/assets/user-1.png"
        },
        {
            id: "2",
            name: "Mike Chen",
            username: "@mikechen",
            points: 2180,
            rank: 2,
            avatar: "/assets/user-2.png"
        },
        {
            id: "3",
            name: "Emma Wilson",
            username: "@emmawilson",
            points: 1920,
            rank: 3,
            avatar: "/assets/user-3.png"
        },
        {
            id: "4",
            name: "David Lee",
            username: "@davidlee",
            points: 1750,
            rank: 4,
            avatar: "/assets/user-4.png"
        },
        {
            id: "5",
            name: "Lisa Brown",
            username: "@lisabrown",
            points: 1680,
            rank: 5,
            avatar: "/assets/user-5.png"
        }
    ];

    const displayLeaderboard = leaderboard.length > 0 ? leaderboard : defaultLeaderboard;

    const getRankIcon = (rank: number) => {
        switch (rank) {
            case 1:
                return <Crown className="w-5 h-5 text-yellow-500" />;
            case 2:
                return <Medal className="w-5 h-5 text-gray-400" />;
            case 3:
                return <Medal className="w-5 h-5 text-orange-600" />;
            default:
                return <span className="text-sm font-semibold text-muted-foreground">#{rank}</span>;
        }
    };

    return (
        <div className="h-full w-full bg-background border-l overflow-y-auto custom-scrollbar">
            <div className="p-4 space-y-4">
                <div className="relative pb-2">
                    <div className="bg-muted rounded-2xl flex flex-col space-y-2 mb-4 overflow-hidden aspect-[3/1]">
                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                            <Image
                                src={"/assets/user-2.jpg"}
                                alt="Community Banner Image"
                                width={720}
                                height={240}
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex border-5 border-background rounded-full absolute left-5 -bottom-5">
                        <img
                            src={"/assets/user-1.png"}
                            alt="User profile image"
                            className="w-20 h-20 rounded-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between gap-3 pt-2">
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold text-foreground">
                            Intranet community
                        </h1>
                        {/* Community Metadata */}
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                                <span>4.32 (644)</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-green-500">
                                <span className="w-1 h-1 bg-green-500 rounded-full p-1"></span>
                                <span>1,002 online</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-10 h-10 rounded-lg hover:bg-muted text-muted-foreground flex items-center justify-center cursor-pointer">
                        <EllipsisVertical className="size-6" />
                    </div>
                </div>

                {/* <div className="flex flex-col bg-muted/70 rounded-2xl p-2 px-4">
                    <h1 className="text-foreground mb-1">
                        Rate this community
                    </h1>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
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
                </div> */}

                <div className="mt-2">
                    I help business owners & productivity enthusiasts master AI automation to save 100+ hours monthly.
                </div>

                {/* Community Metadata */}
                <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Home className="w-4 h-4" />
                        <span>Created Sep 25, 2023</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Globe className="w-4 h-4" />
                        <span>Public</span>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="flex items-center justify-between space-x-4">
                    <div className="text-start">
                        <div className="text-base font-bold text-foreground">222k</div>
                        <div className="text-sm text-muted-foreground">Members</div>
                    </div>
                    {/* <div className="w-px h-8 bg-border"></div> */}
                    <div className="text-start">
                        <div className="text-base font-bold text-foreground">25</div>
                        <div className="text-sm text-muted-foreground">Contributions</div>
                    </div>
                    {/* <div className="w-px h-8 bg-border"></div> */}
                    <div className="text-start">
                        <div className="text-base font-bold text-foreground">12</div>
                        <div className="text-sm text-muted-foreground">Mods</div>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="w-full px-6 py-3 text-primary-foreground bg-primary hover:bg-primary/80 rounded-full text-base font-medium transition-colors">
                        Join community
                    </button>
                </div>

                {/* Rules Section */}
                <div className="hidden border-t pt-4 space-y-2">
                    <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Community rules
                    </h2>
                    <div className="space-y-1">
                        {[
                            { id: 1, title: "Posts must cite relevance" },
                            { id: 2, title: "No reposts" },
                            { id: 3, title: "We enforce quality control" },
                            { id: 4, title: "No circle-jerking" },
                            { id: 5, title: "No racism/sexism/homophobia/etc" },
                            { id: 6, title: "No doxxing/brigading" },
                            { id: 7, title: "No ai bots or scammers" }
                        ].map((rule) => (
                            <details key={rule.id} className="group">
                                <summary className="flex items-center justify-between p-3 rounded-lg hover:bg-muted cursor-pointer list-none">
                                    <div className="flex items-start gap-3">
                                        <span className="text-sm text-muted-foreground font-medium">{rule.id}</span>
                                        <span className="text-sm text-foreground">{rule.title}</span>
                                    </div>
                                    <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-180" />
                                </summary>
                                <div className="px-3 pb-3 pt-1 text-sm text-muted-foreground">
                                    Rule details go here...
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
