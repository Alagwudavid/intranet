'use client';

import { Heart, MessageCircle, Share2, MoreHorizontal, Pin, GlobeLock, ChartNoAxesColumn, Share } from 'lucide-react';
import Image from 'next/image';

interface Post {
    id: number;
    author: {
        name: string;
        username: string;
        avatar: string;
        verified: boolean;
    };
    title: string;
    content: string;
    media?: {
        type: 'image' | 'video';
        url: string;
    };
    timestamp: string;
    reactions: {
        emoji: string;
        count: number;
    }[];
    comments: number;
}

interface PinnedPost {
    id: number;
    title: string;
    votes: number;
    comments: number;
    tag?: string;
    thumbnail?: string;
}

const pinnedPosts: PinnedPost[] = [
    {
        id: 1,
        title: 'The Community Discord Server is Live!...',
        votes: 4,
        comments: 0,
        tag: 'Announcement'
    },
    {
        id: 2,
        title: 'How Do I Get Into Cybersecurity?...',
        votes: 5,
        comments: 2,
        thumbnail: '/assets/post-image-1.png'
    }
];

const mockPosts: Post[] = [
    {
        id: 1,
        author: {
            name: 'Opeyemi Dev',
            username: '@opeyemi',
            avatar: '/assets/user-1.png',
            verified: true
        },
        title: '2026 New Year Celebration',
        content: 'me and my bro 2026 more cash out more blessing more money 💰',
        media: {
            type: 'video',
            url: '/assets/post-video-1.png'
        },
        timestamp: '27m ago',
        reactions: [
            { emoji: '👍', count: 6 },
            { emoji: '🎉', count: 3 },
            { emoji: '😍', count: 1 }
        ],
        comments: 0
    },
    {
        id: 2,
        author: {
            name: 'lilycruise',
            username: '@lilycruise',
            avatar: '/assets/user-2.jpg',
            verified: false
        },
        title: 'Happy New Year 2026!',
        content: 'A very much love 💕💕 happy new year welcome to 2026 wonders without Number shall never seize from your home 🤞',
        media: {
            type: 'image',
            url: '/assets/post-image-1.png'
        },
        timestamp: '1h ago',
        reactions: [
            { emoji: '❤️', count: 28 },
            { emoji: '🎉', count: 12 },
            { emoji: '👍', count: 5 }
        ],
        comments: 3
    },
    {
        id: 3,
        author: {
            name: 'John Maker',
            username: '@johnmaker',
            avatar: '/assets/user-3.jpg',
            verified: true
        },
        title: 'New Project Launch 🚀',
        content: '🚀 Just launched our new project! Excited to share this journey with you all. Stay tuned for more updates! #NewBeginnings #2026Goals',
        timestamp: '3h ago',
        reactions: [
            { emoji: '🚀', count: 45 },
            { emoji: '👏', count: 38 },
            { emoji: '🔥', count: 32 },
            { emoji: '❤️', count: 12 }
        ],
        comments: 15
    },
    {
        id: 4,
        author: {
            name: 'Sarah Design',
            username: '@sarahdesign',
            avatar: '/assets/user-2.jpg',
            verified: false
        },
        title: 'Sneak Peek of New Design',
        content: 'Creating magic pixel by pixel ✨ Here\'s a sneak peek of what I\'ve been working on. What do you think?',
        media: {
            type: 'image',
            url: '/assets/post-image-2.png'
        },
        timestamp: '5h ago',
        reactions: [
            { emoji: '😍', count: 34 },
            { emoji: '✨', count: 28 },
            { emoji: '🎨', count: 18 },
            { emoji: '👍', count: 9 }
        ],
        comments: 12
    },
    {
        id: 5,
        author: {
            name: 'Tech Community',
            username: '@techcommunity',
            avatar: '/assets/user-3.jpg',
            verified: true
        },
        title: 'Tech Tip of the Day 💡',
        content: '💡 Tip of the day: Always keep learning and growing. The tech world moves fast, and staying curious is key to success!',
        timestamp: '8h ago',
        reactions: [
            { emoji: '💡', count: 98 },
            { emoji: '👍', count: 76 },
            { emoji: '🙌', count: 42 },
            { emoji: '❤️', count: 18 }
        ],
        comments: 28
    }
];

export default function CommunityPage() {
    return (
        <div className="max-w-3xl mx-auto p-4">
            {/* Event Announcement */}
            <div className="border rounded-2xl shadow-sm mb-4 overflow-hidden">
                <div className="relative w-full h-48 bg-gradient-to-r from-slate-400 to-slate-700">
                    <Image
                        src="/assets/event-bg-2.png"
                        alt="Event banner"
                        fill
                        className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700/80 to-slate-900/80 flex items-center justify-center">
                        <div className="text-white text-center px-4">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-medium">Beginner</span>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                    <GlobeLock className="w-4 h-4" />
                                    <span>GMT+1</span>
                                </div>
                            </div>
                            <h1 className="text-xl md:text-3xl line-clamp-2 font-bold mb-4">
                                How to create widgets in WordPress [The Easy Way]
                            </h1>
                            <div className="flex items-center justify-center flex-wrap space-x-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden">
                                        <Image
                                            src="/assets/user-1.png"
                                            alt="Author"
                                            width={24}
                                            height={24}
                                            className="object-cover"
                                        />
                                    </div>
                                    <span>Abid Hasan</span>
                                </div>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    <span>May 5, 2025</span>
                                </div>
                                <span>•</span>
                                <div className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    <span>1 Hr, 30 Mins</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Create Post Form */}
            <div className="bg-background border p-4 rounded-2xl shadow-sm mb-4">
                <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted overflow-hidden relative flex-shrink-0">
                        <Image
                            src="/assets/user-1.png"
                            alt="Your avatar"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1 space-y-3">
                        <input
                            type="text"
                            placeholder="Post something..."
                            className="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-semibold"
                        />
                    </div>
                </div>
            </div>

            {/* Community Highlights */}
            {/* <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="m16.243 2.932l4.825 4.826a2.75 2.75 0 0 1-.715 4.404l-4.87 2.435a.75.75 0 0 0-.374.426l-1.44 4.166a1.25 1.25 0 0 1-2.065.476L8.5 16.561L4.06 21H3v-1.062L7.44 15.5l-3.105-3.104a1.25 1.25 0 0 1 .476-2.066l4.166-1.439a.75.75 0 0 0 .426-.374l2.435-4.87a2.75 2.75 0 0 1 4.405-.715m3.765 5.886l-4.826-4.825a1.25 1.25 0 0 0-2.002.324l-2.435 4.871a2.25 2.25 0 0 1-1.278 1.12l-3.789 1.31l6.705 6.704l1.308-3.788a2.25 2.25 0 0 1 1.12-1.278l4.872-2.436a1.25 1.25 0 0 0 .325-2.002"></path></svg>
                        <h2 className="font-semibold text-base">Community highlights</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pinnedPosts.map((pinnedPost) => (
                        <div key={pinnedPost.id} className="border rounded-xl p-4 bg-background transition-colors cursor-pointer">
                            <div className="flex gap-3">
                                {pinnedPost.thumbnail && (
                                    <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                        <Image
                                            src={pinnedPost.thumbnail}
                                            alt={pinnedPost.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                                <div className="flex-1">
                                    <h3 className="font-semibold text-base mb-2 line-clamp-2">{pinnedPost.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <span>{pinnedPost.votes} votes</span>
                                        <span>•</span>
                                        <span>{pinnedPost.comments} comments</span>
                                    </div>
                                    {pinnedPost.tag && (
                                        <div className="mt-2">
                                            <span className="inline-flex items-center gap-1 text-sm font-medium">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M19 4.741V8a3 3 0 1 1 0 6v3c0 1.648-1.881 2.589-3.2 1.6l-2.06-1.546A8.66 8.66 0 0 0 10 15.446v2.844a2.71 2.71 0 0 1-5.316.744l-1.57-5.496a4.7 4.7 0 0 1 3.326-7.73l3.018-.168a9.34 9.34 0 0 0 4.19-1.259l2.344-1.368C17.326 2.236 19 3.197 19 4.741M5.634 15.078l.973 3.407A.71.71 0 0 0 8 18.29v-3.01l-1.56-.087a5 5 0 0 1-.806-.115M17 4.741L14.655 6.11A11.3 11.3 0 0 1 10 7.604v5.819c1.787.246 3.488.943 4.94 2.031L17 17zM8 7.724l-1.45.08a2.7 2.7 0 0 0-.17 5.377l.17.015l1.45.08zM19 10v2a1 1 0 0 0 .117-1.993z"></path></g></svg>
                                                {pinnedPost.tag}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* Posts Feed */}
            <div className="space-y-4">
                {mockPosts.map((post) => (
                    <div key={post.id} className="bg-background border p-4 rounded-2xl shadow-sm overflow-hidden">
                        {/* Post Header */}
                        <div className="pb-2 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-muted overflow-hidden relative">
                                    <Image
                                        src={post.author.avatar}
                                        alt={post.author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-sm">{post.author.name}</h3>
                                        {post.author.verified ? (
                                            <svg className="w-4 h-4 text-blue-500" viewBox="0 0 22 22" fill="currentColor">
                                                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path>
                                            </svg>
                                        ) : (
                                            <span className='text-xs p-0.5 px-2 rounded-2xl bg-yellow-500/30 text-yellow-500 font-medium'>Level 3</span>
                                        )}
                                        •
                                        <span className="text-sm text-muted-foreground">{post.timestamp}</span>
                                    </div>
                                    <span className="flex items-center text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M19 4.741V8a3 3 0 1 1 0 6v3c0 1.648-1.881 2.589-3.2 1.6l-2.06-1.546A8.66 8.66 0 0 0 10 15.446v2.844a2.71 2.71 0 0 1-5.316.744l-1.57-5.496a4.7 4.7 0 0 1 3.326-7.73l3.018-.168a9.34 9.34 0 0 0 4.19-1.259l2.344-1.368C17.326 2.236 19 3.197 19 4.741M5.634 15.078l.973 3.407A.71.71 0 0 0 8 18.29v-3.01l-1.56-.087a5 5 0 0 1-.806-.115M17 4.741L14.655 6.11A11.3 11.3 0 0 1 10 7.604v5.819c1.787.246 3.488.943 4.94 2.031L17 17zM8 7.724l-1.45.08a2.7 2.7 0 0 0-.17 5.377l.17.015l1.45.08zM19 10v2a1 1 0 0 0 .117-1.993z"></path></g></svg>
                                        Announcement
                                    </span>
                                </div>
                            </div>
                            {/* <button className="text-muted-foreground hover:text-foreground flex items-center gap-1">
                                <Pin className="w-4 h-4" />
                                <span className="text-xs hidden sm:inline">Pinned</span>
                            </button> */}
                        </div>

                        {/* Post Content and Media - Side by side on large screens */}
                        <div className={`flex flex-col ${post.media ? 'sm:flex-row sm:gap-4' : ''}`}>
                            {/* Post Media */}
                            {post.media && (
                                <div className="relative w-full sm:w-[220px] sm:flex-shrink-0 sm:order-1 aspect-[3/2] h-fit bg-muted rounded-2xl overflow-hidden mx-auto">
                                    <Image
                                        src={post.media.url}
                                        alt="Post media"
                                        fill
                                        className="z-1 w-full rounded-12 object-cover h-full sm:max-h-40 sm:w-40 lg:max-h-56 lg:w-56"
                                    />
                                    {post.media.type === 'video' && (
                                        <button className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 12a1 1 0 0 1-.5.866l-8 4.5A1 1 0 0 1 9 16.5v-9a1 1 0 0 1 1.5-.866l8 4.5A1 1 0 0 1 19 12z" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                            )}
                            <div className={`flex flex-col justify-between ${post.media ? 'sm:flex-1 sm:order-2' : 'w-full'}`} >
                                {/* Post Content */}
                                <div className="py-2 pb-3" >
                                    <p className="text-lg font-bold leading-relaxed">{post.title}</p>
                                    <p className="text-base leading-relaxed">{post.content}</p>
                                </div>
                            </div>

                        </div>

                        {/* Post Actions */}
                        <div className="px-4 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 bg-muted border rounded-2xl p-2">
                                    <div className="flex items-center">
                                        {post.reactions.map((reaction, idx) => (
                                            <button
                                                key={idx}
                                                className="flex items-center gap-1 hover:scale-110 transition-transform px-1.5 py-0.5 rounded-lg hover:bg-background"
                                                title={`${reaction.count} reactions`}
                                            >
                                                <span className="text-lg">{reaction.emoji}</span>
                                                <span className="text-xs font-medium text-muted-foreground">{reaction.count}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <button className="flex items-center justify-center w-7 h-7 hover:scale-110 transition-transform text-muted-foreground hover:text-primary rounded-lg hover:bg-background">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2q.825 0 1.625.125t1.55.375q.575.2.725.588t.025.762t-.462.588t-.763.037q-.65-.225-1.312-.35T12 4Q8.675 4 6.337 6.338T4 12t2.338 5.663T12 20t5.663-2.337T20 12q0-.45-.05-.9t-.15-.875q-.125-.475.125-.775t.625-.375t.738.113t.487.712q.125.5.175 1.025T22 12q0 2.075-.787 3.9t-2.138 3.175t-3.175 2.138T12 22m8-17h-1q-.425 0-.712-.288T18 4t.288-.712T19 3h1V2q0-.425.288-.712T21 1t.713.288T22 2v1h1q.425 0 .713.288T24 4t-.288.713T23 5h-1v1q0 .425-.288.713T21 7t-.712-.288T20 6zm-4.5 6q.625 0 1.063-.437T17 9.5t-.437-1.062T15.5 8t-1.062.438T14 9.5t.438 1.063T15.5 11m-7 0q.625 0 1.063-.437T10 9.5t-.437-1.062T8.5 8t-1.062.438T7 9.5t.438 1.063T8.5 11m3.5 6.5q1.45 0 2.675-.7t1.975-1.9q.15-.3-.025-.6T16.1 14H7.9q-.35 0-.525.3t-.025.6q.75 1.2 1.988 1.9t2.662.7"></path></svg>
                                    </button>
                                </div>
                                <button className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors">
                                    {/* <MessageCircle className="w-5 h-5" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5}><path strokeLinejoin="round" d="M8 13.5h8m-8-5h4"></path><path d="M6.099 19q-1.949-.192-2.927-1.172C2 16.657 2 14.771 2 11v-.5c0-3.771 0-5.657 1.172-6.828S6.229 2.5 10 2.5h4c3.771 0 5.657 0 6.828 1.172S22 6.729 22 10.5v.5c0 3.771 0 5.657-1.172 6.828S17.771 19 14 19c-.56.012-1.007.055-1.445.155c-1.199.276-2.309.89-3.405 1.424c-1.563.762-2.344 1.143-2.834.786c-.938-.698-.021-2.863.184-3.865"></path></g></svg>
                                    <span className="text-sm font-medium">{post.comments}</span>
                                </button>
                            </div>
                            <div className="flex items-center gap-6">
                                <button className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors">
                                    <ChartNoAxesColumn className="w-5 h-5" />
                                    <span className="text-sm font-medium">{post.comments}</span>
                                </button>
                                <button className="flex items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors">
                                    <Share className="w-5 h-5" />
                                    <span className="text-sm font-medium">Share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            <div className="py-8 text-center">
                <button className="px-6 py-2 bg-muted hover:bg-muted/80 rounded-full text-sm font-medium transition-colors">
                    Load More Posts
                </button>
            </div>
        </div>
    );
}
