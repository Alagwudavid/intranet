"use client";

import Image from "next/image";
import Rightbar from "../components/rightbar";
import { ChartPie, Coins, Gem } from "lucide-react";

function UserPage() {
    return (
        <>
            <div className="min-h-page container flex">
                <main className="max-w-3xl mx-auto p-4 md:p-6 lg:p-8 flex-1">
                    {/* Welcome Banner */}
                    <div className="bg-muted border-2 rounded-2xl p-4 mb-6 flex flex-col space-y-2 overflow-hidden">
                        {/* <span className="w-fit text-base bg-muted/30 text-white rounded-2xl px-4 py-2">
                            Complete quests to earn rewards!
                        </span> */}
                        <div className="flex space-x-4">
                            <div className="w-13 h-13 relative">
                                <div className="w-full h-full flex items-center justify-center rounded-full overflow-hidden">
                                    <Image
                                    src={"/assets/user-1.png"}
                                    alt="User profile image"
                                    width={52}
                                    height={52}
                                    />
                                </div>
                                <div className="w-3 h-3 rounded-full bg-green-500 absolute bottom-0 right-0"></div>
                            </div>
                            <div className="">
                                <h1 className="text-2xl font-bold text-foreground">
                                    Good morning, Jane
                                </h1>
                                <div className="flex items-center space-x-2">
                                    <div className="flex items-center space-x-1">
                                        <Coins className="w-4 h-4 text-muted-foreground" />
                                        <p className="text-foreground text-sm">
                                            12,000 bits
                                        </p>
                                    </div>
                                    <div>-</div>
                                    <div className="flex items-center space-x-1">
                                        <Gem className="w-4 h-4 text-muted-foreground" />
                                        <p className="text-foreground text-sm">
                                            Premium user
                                        </p>
                                    </div>
                                    <div>-</div>
                                    <div className="flex items-center space-x-1">
                                        <ChartPie className="w-4 h-4 text-muted-foreground" />
                                        <p className="text-foreground text-sm">
                                            72% space left
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                </main>
                <Rightbar />
            </div>
        </>
    );
}

export default UserPage;