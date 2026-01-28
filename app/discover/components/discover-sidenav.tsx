'use client';

import { Grid3x3, Puzzle, Server, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
    {
        name: 'Communities',
        icon: Grid3x3,
        value: 'commuinities',
    },
    {
        name: 'Rooms',
        icon: Server,
        value: 'rooms',
    },
    {
        name: 'Trivias',
        icon: Puzzle,
        value: 'trivias',
    },
    {
        name: 'Arena',
        icon: Puzzle,
        value: 'arena',
    },
];

export default function DiscoverSidenav() {
    const searchParams = useSearchParams();
    const activeTab = searchParams.get('tab') || 'servers';

    return (
        <>
            {/* Desktop Sidenav - Vertical Left Sidebar */}
            <aside className="hidden lg:flex sticky lg:left-20 top-5 z-20 bg-background border-b">
                <div className="p-6">
                    <nav className="flex gap-2 overflow-x-auto hide-scrollbar">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.value;

                            return (
                                <Link
                                    key={item.value}
                                    href={`/intranet/discover?tab=${item.value}`}
                                    className={cn(
                                        'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap',
                                        isActive
                                            ? 'bg-gray-100 text-gray-900'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    )}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{item.name}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </aside>
        </>
    );
}
