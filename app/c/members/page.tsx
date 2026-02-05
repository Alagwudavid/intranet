'use client';

import Image from 'next/image';
import { UserPlus, Mail } from 'lucide-react';

interface Member {
    id: number;
    name: string;
    username: string;
    avatar: string;
    role: string;
    joinedDate: string;
}

const mockMembers: Member[] = [
    {
        id: 1,
        name: 'Opeyemi Spending',
        username: '@opeyemi',
        avatar: '/assets/user-1.png',
        role: 'Admin',
        joinedDate: 'Jan 2024'
    },
    {
        id: 2,
        name: 'lilycruise',
        username: '@lilycruise',
        avatar: '/assets/user-2.png',
        role: 'Member',
        joinedDate: 'Mar 2024'
    },
    {
        id: 3,
        name: 'John Maker',
        username: '@johnmaker',
        avatar: '/assets/user-3.png',
        role: 'Moderator',
        joinedDate: 'Feb 2024'
    },
    {
        id: 4,
        name: 'Sarah Design',
        username: '@sarahdesign',
        avatar: '/assets/user-4.png',
        role: 'Member',
        joinedDate: 'Apr 2024'
    },
    {
        id: 5,
        name: 'Tech Community',
        username: '@techcommunity',
        avatar: '/assets/user-5.png',
        role: 'Member',
        joinedDate: 'May 2024'
    }
];

export default function MembersPage() {
    return (
        <div className="container mx-auto py-6 px-4 shrink-0">
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold">Members</h2>
                        <p className="text-muted-foreground text-sm">Connect with community members</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                        <UserPlus className="w-4 h-4" />
                        <span className="text-sm font-medium">Invite</span>
                    </button>
                </div>

                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-3 space-x-3">
                    {mockMembers.map((member) => (
                        <div key={member.id} className="bg-card p-4 rounded-lg border hover:border-primary/50 transition-all flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-muted overflow-hidden relative flex-shrink-0">
                                    <Image
                                        src={member.avatar}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">{member.name}</h3>
                                    <p className="text-sm text-muted-foreground">{member.role}</p>
                                </div>
                            </div>
                            <button className="p-2.5 rounded-lg border border-border hover:bg-muted/50 transition-colors flex-shrink-0">
                                <Mail className="w-5 h-5 text-muted-foreground" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
