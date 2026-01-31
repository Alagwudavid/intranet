'use client';

import { Search, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import CategoryNavigation from '@/components/category-navigation';
import Link from 'next/link';

interface Community {
    id: number;
    rank: number;
    name: string;
    description: string;
    privacy: 'Private' | 'Public';
    members: string;
    price: string;
    image: string;
    avatar: string;
    category: string;
}

const categories = [
    { name: 'All', icon: '🌐' },
    { name: 'Business', icon: '💰' },
    { name: 'Health & Fitness', icon: '❤️' },
    { name: 'Personal development', icon: '🎓' },
    { name: 'Arts & crafts', icon: '🎨' },
    { name: 'Music', icon: '🎵' },
    { name: 'Photo & Video', icon: '📷' },
];

const communities: Community[] = [
    {
        id: 1,
        rank: 1,
        name: 'Digital Growth Community',
        description: 'Welcome to Digital Growth Community! Our Mission: To Help You Build a Daily Pay Customer Base Digitally!',
        privacy: 'Private',
        members: '42.9k Members',
        price: 'Paid',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
        category: 'Business'
    },
    {
        id: 2,
        rank: 2,
        name: 'Adonis Gang',
        description: 'Masculine self improvement.',
        privacy: 'Private',
        members: '157.1k Members',
        price: 'Free',
        image: 'https://images.unsplash.com/photo-1583468982228-19f19164aee2?w=400&h=300&fit=crop',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
        category: 'Health & Fitness'
    },
    {
        id: 3,
        rank: 3,
        name: 'This World is a Simulation',
        description: '#1 Manifestation Community where we teach you how to break the simulation and manifest your dream life!',
        privacy: 'Private',
        members: '984 Members',
        price: '$55/month',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        category: 'Personal development'
    },
    {
        id: 4,
        rank: 4,
        name: 'Mr Addie POD Academy',
        description: 'الأكاديمية رح تُوصّع عنّك أب مجال الطباعة عند الطلب. مع غيرك مصدر ومجتمع نشط يضم أكثر من 1000 طالب',
        privacy: 'Private',
        members: '1k Members',
        price: '$39/month',
        image: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=400&h=300&fit=crop',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        category: 'Business'
    },
    {
        id: 5,
        rank: 5,
        name: 'Fayefilms Academy',
        description: '❤️ A community for anyone that values productivity, academics, mental health and personal growth~',
        privacy: 'Private',
        members: '26k Members',
        price: 'Free',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
        category: 'Personal development'
    },
    {
        id: 6,
        rank: 6,
        name: 'Brotherhood Of Scent',
        description: '#1 Fragrance Community 🏆 Our mission is to help YOU leverage the power of scent to become the man you know yourself to...',
        privacy: 'Private',
        members: '4k Members',
        price: 'Free',
        image: 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?w=400&h=300&fit=crop',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        category: 'Health & Fitness'
    },
];

function DiscoverPage() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredCommunities = communities.filter(community => {
        const matchesCategory = selectedCategory === 'All' || community.category === selectedCategory;
        const matchesSearch = community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            community.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="">
            <div className="max-w-7xl mx-auto p-4">
                {/* Search Section */}
                <div className="py-20 max-lg:pt-6 max-w-xl mx-auto space-y-6 text-center">
                    <h1 className="text-3xl font-bold text-center">Find Schools</h1>
                    <div className='flex items-center justify-center gap-2'>
                        <span>or</span>
                        <Link href="/intranet/new-school" className="text-primary font-medium hover:underline">
                            Create your school
                        </Link>
                    </div>
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Type school name here ..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>
                </div>

                {/* Category Navigation */}
                <CategoryNavigation onCategoryChange={setSelectedCategory} />

                {/* Communities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredCommunities.map((community) => (
                        <Link
                            key={community.id}
                            href={"/c"}
                         >
                            <div
                                className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer border"
                            >
                                {/* Rank Badge */}
                                <div className="relative p-1.5">
                                    <div className="bg-muted rounded-2xl overflow-hidden aspect-[3/1]">
                                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                                            <img
                                                src={community.image}
                                                alt={community.name}
                                                className="w-full h-44 object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex border-5 border-background rounded-full absolute left-5 -bottom-7">
                                        <img
                                            src={community.avatar}
                                            alt={community.name}
                                            className="w-20 h-20 rounded-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 md:px-6">
                                    {/* Avatar and Name */}
                                    <div className="flex flex-col mt-5 mb-3">
                                        <h3 className="font-semibold text-foreground text-lg leading-tight">
                                            {community.name}
                                        </h3>
                                        <p className="font-semibold text-muted-foreground text-sm leading-tight">
                                            @_username
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-foreground text-sm mb-4 line-clamp-3">
                                        {community.description}
                                    </p>

                                    {/* Footer Info */}
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <span className="font-medium">{community.privacy}</span>
                                        <span>•</span>
                                        <span>{community.members}</span>
                                        <span>•</span>
                                        <span className={`font-medium ${community.price === 'Free' ? 'text-green-600' : 'text-foreground'
                                            }`}>
                                            {community.price}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        
                    ))}
                </div>

                {/* No Results */}
                {filteredCommunities.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground text-lg">No communities found. Try adjusting your filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DiscoverPage;