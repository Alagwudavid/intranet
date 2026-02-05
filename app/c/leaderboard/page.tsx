'use client';

import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';
import Image from 'next/image';

interface LeaderboardEntry {
    rank: number;
    name: string;
    username: string;
    avatar: string;
    points: number;
    streak: number;
    change: number;
}

const mockLeaderboard: LeaderboardEntry[] = [
    {
        rank: 1,
        name: 'Opeyemi Spending',
        username: '@opeyemi',
        avatar: '/assets/user-1.png',
        points: 2850,
        streak: 42,
        change: 2
    },
    {
        rank: 2,
        name: 'lilycruise',
        username: '@lilycruise',
        avatar: '/assets/user-2.png',
        points: 2720,
        streak: 38,
        change: -1
    },
    {
        rank: 3,
        name: 'John Maker',
        username: '@johnmaker',
        avatar: '/assets/user-3.png',
        points: 2650,
        streak: 35,
        change: 1
    },
    {
        rank: 4,
        name: 'Sarah Design',
        username: '@sarahdesign',
        avatar: '/assets/user-4.png',
        points: 2480,
        streak: 29,
        change: 0
    },
    {
        rank: 5,
        name: 'Tech Community',
        username: '@techcommunity',
        avatar: '/assets/user-5.png',
        points: 2350,
        streak: 26,
        change: 3
    },
    {
        rank: 6,
        name: 'David Code',
        username: '@davidcode',
        avatar: '/assets/user-1.png',
        points: 2180,
        streak: 24,
        change: -2
    },
    {
        rank: 7,
        name: 'Emma Creative',
        username: '@emmacreative',
        avatar: '/assets/user-2.png',
        points: 2050,
        streak: 21,
        change: 1
    },
    {
        rank: 8,
        name: 'Mike Tech',
        username: '@miketech',
        avatar: '/assets/user-3.png',
        points: 1980,
        streak: 19,
        change: 0
    }
];

export default function LeaderboardPage() {
    return (
        <div className="py-6 px-4">
            <div className="max-w-4xl mx-auto shrink-0">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
                    <p className="text-muted-foreground">Top performers this month</p>
                </div>

                {/* Top 3 Podium */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {/* 2nd Place */}
                    <div className="flex flex-col items-center pt-8">
                        <div className="relative">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-400">
                                <Image
                                    src={mockLeaderboard[1].avatar}
                                    alt={mockLeaderboard[1].name}
                                    width={80}
                                    height={80}
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-400 rounded-full p-1">
                                <Medal className="w-5 h-5 text-white" />
                            </div>
                        </div>
                        <h3 className="font-semibold mt-3 text-center">{mockLeaderboard[1].name}</h3>
                        <p className="text-sm text-muted-foreground">{mockLeaderboard[1].points} pts</p>
                        <div className="mt-2 bg-gray-100 rounded-lg px-4 py-8 w-full text-center">
                            <span className="text-2xl font-bold text-gray-600">2</span>
                        </div>
                    </div>

                    {/* 1st Place */}
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400">
                                <Image
                                    src={mockLeaderboard[0].avatar}
                                    alt={mockLeaderboard[0].name}
                                    width={96}
                                    height={96}
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-yellow-400 rounded-full p-1">
                                <Trophy className="w-6 h-6 text-white" />
                            </div>
                        </div>
                        <h3 className="font-semibold mt-3 text-center">{mockLeaderboard[0].name}</h3>
                        <p className="text-sm text-muted-foreground">{mockLeaderboard[0].points} pts</p>
                        <div className="mt-2 bg-yellow-100 rounded-lg px-4 py-10 w-full text-center">
                            <span className="text-3xl font-bold text-yellow-600">1</span>
                        </div>
                    </div>

                    {/* 3rd Place */}
                    <div className="flex flex-col items-center pt-12">
                        <div className="relative">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-orange-400">
                                <Image
                                    src={mockLeaderboard[2].avatar}
                                    alt={mockLeaderboard[2].name}
                                    width={80}
                                    height={80}
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-400 rounded-full p-1">
                                <Award className="w-5 h-5 text-white" />
                            </div>
                        </div>
                        <h3 className="font-semibold mt-3 text-center">{mockLeaderboard[2].name}</h3>
                        <p className="text-sm text-muted-foreground">{mockLeaderboard[2].points} pts</p>
                        <div className="mt-2 bg-orange-100 rounded-lg px-4 py-6 w-full text-center">
                            <span className="text-2xl font-bold text-orange-600">3</span>
                        </div>
                    </div>
                </div>

                {/* Leaderboard List */}
                <div className="bg-card rounded-xl border overflow-hidden">
                    <div className="p-4 border-b bg-muted/50">
                        <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-muted-foreground">
                            <div className="col-span-1">Rank</div>
                            <div className="col-span-5">User</div>
                            <div className="col-span-2">Points</div>
                            <div className="col-span-2">Streak</div>
                            <div className="col-span-2">Change</div>
                        </div>
                    </div>
                    <div className="divide-y">
                        {mockLeaderboard.map((entry) => (
                            <div
                                key={entry.rank}
                                className="p-4 hover:bg-muted/50 transition-colors"
                            >
                                <div className="grid grid-cols-12 gap-4 items-center">
                                    <div className="col-span-1">
                                        <span className="text-lg font-bold text-muted-foreground">
                                            {entry.rank}
                                        </span>
                                    </div>
                                    <div className="col-span-5 flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full overflow-hidden">
                                            <Image
                                                src={entry.avatar}
                                                alt={entry.name}
                                                width={40}
                                                height={40}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{entry.name}</h4>
                                            <p className="text-xs text-muted-foreground">{entry.username}</p>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        <span className="font-semibold">{entry.points}</span>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="flex items-center gap-1">
                                            <span className="text-orange-500">🔥</span>
                                            <span className="font-semibold">{entry.streak}</span>
                                        </div>
                                    </div>
                                    <div className="col-span-2">
                                        {entry.change > 0 ? (
                                            <div className="flex items-center gap-1 text-green-500">
                                                <TrendingUp className="w-4 h-4" />
                                                <span className="font-semibold">+{entry.change}</span>
                                            </div>
                                        ) : entry.change < 0 ? (
                                            <div className="flex items-center gap-1 text-red-500">
                                                <TrendingUp className="w-4 h-4 rotate-180" />
                                                <span className="font-semibold">{entry.change}</span>
                                            </div>
                                        ) : (
                                            <span className="text-muted-foreground">-</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Your Rank */}
                <div className="mt-6 bg-primary/10 rounded-xl p-4 border-2 border-primary">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-muted overflow-hidden">
                                <Image
                                    src="/assets/user-1.png"
                                    alt="You"
                                    width={48}
                                    height={48}
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <h4 className="font-semibold">Your Rank</h4>
                                <p className="text-sm text-muted-foreground">#24 in the leaderboard</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold text-primary">1,850</p>
                            <p className="text-sm text-muted-foreground">points</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
