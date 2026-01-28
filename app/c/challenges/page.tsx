'use client';

import { Trophy, Target, Clock, Flame, CheckCircle2, Lock } from 'lucide-react';
import Image from 'next/image';

interface Challenge {
    id: number;
    title: string;
    description: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    points: number;
    participants: number;
    timeRemaining: string;
    progress: number;
    category: string;
}

interface Level {
    id: number;
    name: string;
    emoji: string;
    percentage: string;
    isUnlocked: boolean;
    requirement?: string;
}

const mockChallenges: Challenge[] = [
    {
        id: 1,
        title: 'Complete 5 Courses',
        description: 'Finish any 5 courses from the classroom section',
        difficulty: 'Medium',
        points: 500,
        participants: 234,
        timeRemaining: '7 days',
        progress: 60,
        category: 'Learning'
    },
    {
        id: 2,
        title: 'Daily Login Streak',
        description: 'Login for 30 consecutive days',
        difficulty: 'Easy',
        points: 300,
        participants: 567,
        timeRemaining: '23 days',
        progress: 23,
        category: 'Engagement'
    },
    {
        id: 3,
        title: 'Community Helper',
        description: 'Help 10 members by answering their questions',
        difficulty: 'Medium',
        points: 400,
        participants: 189,
        timeRemaining: '14 days',
        progress: 40,
        category: 'Social'
    },
    {
        id: 4,
        title: 'Master Quiz Taker',
        description: 'Score 90% or higher on 10 different quizzes',
        difficulty: 'Hard',
        points: 800,
        participants: 123,
        timeRemaining: '30 days',
        progress: 10,
        category: 'Learning'
    },
    {
        id: 5,
        title: 'Content Creator',
        description: 'Create and share 5 posts in the community',
        difficulty: 'Easy',
        points: 250,
        participants: 445,
        timeRemaining: '10 days',
        progress: 80,
        category: 'Social'
    },
    {
        id: 6,
        title: 'Event Participant',
        description: 'Attend 3 live workshops or webinars',
        difficulty: 'Medium',
        points: 600,
        participants: 312,
        timeRemaining: '21 days',
        progress: 33,
        category: 'Events'
    }
];

const levels: Level[] = [
    {
        id: 1,
        name: 'Level 1 - AI Explorer',
        emoji: '🛠️',
        percentage: '90% of members',
        isUnlocked: true
    },
    {
        id: 2,
        name: 'Level 2 - Automation Novice',
        emoji: '🪛',
        percentage: '3% of members',
        isUnlocked: false,
        requirement: 'Chat with members, Post to feed'
    },
    {
        id: 3,
        name: 'Level 3 - AI Operator',
        emoji: '🛠️',
        percentage: '1% of members',
        isUnlocked: false
    },
    {
        id: 4,
        name: 'Level 4 - Agent Builder',
        emoji: '🤖',
        percentage: '1% of members',
        isUnlocked: false
    },
    {
        id: 5,
        name: 'Level 5 - Agent Orchestrator',
        emoji: '🤖',
        percentage: '1% of members',
        isUnlocked: false
    },
    {
        id: 6,
        name: 'Level 6 - AI Engineer',
        emoji: '🤖',
        percentage: '1% of members',
        isUnlocked: false
    },
    {
        id: 7,
        name: 'Level 7 - AI Visionary',
        emoji: '💎',
        percentage: '1% of members',
        isUnlocked: false
    },
    {
        id: 8,
        name: 'Level 8 - AI Mastermind',
        emoji: '🧠',
        percentage: '1% of members',
        isUnlocked: false
    },
    {
        id: 9,
        name: 'Level 9 - AI Grandmaster',
        emoji: '🚀',
        percentage: '1% of members',
        isUnlocked: false
    }
];

const difficultyColors = {
    Easy: 'bg-green-100 text-green-700',
    Medium: 'bg-yellow-100 text-yellow-700',
    Hard: 'bg-red-100 text-red-700'
};

export default function ChallengesPage() {
    return (
        <div className="py-6 px-4">
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">Challenges</h2>
                        <p className="text-muted-foreground text-sm">Complete challenges to earn points and climb the leaderboard</p>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                        <Flame className="w-5 h-5 text-primary" />
                        <div className="text-sm">
                            <p className="font-semibold text-primary">1,850 pts</p>
                            <p className="text-xs text-muted-foreground">Total Points</p>
                        </div>
                    </div>
                </div>

                {/* Levels Section */}
                <div className="bg-card rounded-xl border p-6">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Profile Card */}
                        <div className="flex flex-col items-center justify-center lg:w-64 flex-shrink-0">
                            <div className="relative">
                                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center relative overflow-hidden border-8 border-background shadow-xl">
                                    <div className="text-white text-6xl font-light">DA</div>
                                </div>
                                <div className="absolute bottom-2 right-2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center border-4 border-background">
                                    <span className="text-white text-2xl font-bold">0</span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mt-4">David Alagwu</h3>
                            <p className="text-primary font-semibold">Level 0</p>
                        </div>

                        {/* Levels Grid */}
                        <div className="flex-1">
                            <h3 className="text-xl font-bold mb-4">Achievement Levels</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {levels.map((level) => (
                                    <div
                                        key={level.id}
                                        className={`flex items-start gap-4 p-4 rounded-lg border transition-colors ${level.isUnlocked
                                                ? 'bg-card hover:bg-muted cursor-pointer'
                                                : 'bg-muted/30 opacity-75'
                                            }`}
                                    >
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${level.isUnlocked ? 'bg-primary/10' : 'bg-muted'
                                            }`}>
                                            {level.isUnlocked ? (
                                                <span className="text-2xl">{level.emoji}</span>
                                            ) : (
                                                <Lock className="w-5 h-5 text-muted-foreground" />
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="font-semibold text-sm mb-1 flex items-center gap-2">
                                                {level.name}
                                            </h4>
                                            {level.requirement ? (
                                                <div className="text-xs mb-1">
                                                    <span className="text-muted-foreground">Unlock: </span>
                                                    <span className="text-primary font-medium">{level.requirement}</span>
                                                </div>
                                            ) : null}
                                            <p className="text-xs text-muted-foreground">{level.percentage}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Target className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">12</p>
                                <p className="text-xs text-muted-foreground">Active</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">8</p>
                                <p className="text-xs text-muted-foreground">Completed</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Trophy className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">#23</p>
                                <p className="text-xs text-muted-foreground">Rank</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                <Flame className="w-5 h-5 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">15</p>
                                <p className="text-xs text-muted-foreground">Day Streak</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Challenges Grid */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Available Challenges</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mockChallenges.map((challenge) => (
                            <div key={challenge.id} className="bg-card rounded-xl border overflow-hidden hover:shadow-md transition-shadow">
                                <div className="p-5">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-lg mb-1">{challenge.title}</h4>
                                            <p className="text-sm text-muted-foreground">{challenge.description}</p>
                                        </div>
                                        <div className="ml-3">
                                            <Trophy className="w-6 h-6 text-yellow-500" />
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[challenge.difficulty]}`}>
                                            {challenge.difficulty}
                                        </span>
                                        <span className="px-2 py-1 bg-muted rounded-full text-xs font-medium">
                                            {challenge.category}
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between text-xs mb-1">
                                            <span className="text-muted-foreground">Progress</span>
                                            <span className="font-medium">{challenge.progress}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary rounded-full transition-all"
                                                style={{ width: `${challenge.progress}%` }}
                                            />
                                        </div>
                                    </div>

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t">
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{challenge.timeRemaining}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Target className="w-4 h-4" />
                                                <span>{challenge.participants}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 font-semibold text-primary">
                                            <Trophy className="w-4 h-4" />
                                            <span>{challenge.points} pts</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
