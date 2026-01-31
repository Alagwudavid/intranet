'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const creators = [
    {
        id: 1,
        name: 'Simone Smerilli',
        image: '/assets/user-1.png',
        role: 'Gym Instructor',
        rating: 5.0,
        reviews: 13,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48">
                <path fill="currentColor" fillRule="evenodd" d="M10.624 10.107C11.135 9.8 11.922 9.5 13 9.5s1.865.3 2.376.607c.789.472 1.025 1.28 1.037 1.856c.023 1.148.087 4.934.087 12.037s-.064 10.889-.087 12.037c-.012.575-.248 1.384-1.037 1.856c-.511.307-1.298.607-2.376.607s-1.865-.3-2.376-.607c-.789-.472-1.025-1.28-1.037-1.856C9.564 34.89 9.5 31.103 9.5 24s.064-10.889.087-12.037c.012-.575.248-1.384 1.037-1.856m26.752 0C36.865 9.8 36.078 9.5 35 9.5s-1.865.3-2.376.607c-.788.472-1.025 1.28-1.037 1.856C31.564 13.11 31.5 16.897 31.5 24s.064 10.889.087 12.037c.012.575.248 1.384 1.037 1.856c.511.307 1.298.607 2.376.607s1.865-.3 2.376-.607c.788-.472 1.025-1.28 1.037-1.856c.023-1.148.087-4.934.087-12.037s-.064-10.889-.087-12.037c-.012-.575-.249-1.384-1.037-1.856M4.5 14.5c-.66 0-1.189.12-1.594.277c-1.016.394-1.33 1.356-1.345 2c-.02.897-.061 3.197-.061 7.223s.04 6.326.06 7.223c.015.644.33 1.607 1.346 2c.405.157.934.277 1.594.277s1.189-.12 1.594-.277c1.016-.393 1.33-1.356 1.345-2c.02-.897.061-3.197.061-7.223s-.04-6.326-.06-7.223c-.015-.644-.33-1.607-1.346-2A4.4 4.4 0 0 0 4.5 14.5m40.594.277A4.4 4.4 0 0 0 43.5 14.5c-.66 0-1.189.12-1.594.277c-1.015.394-1.33 1.356-1.345 2c-.02.897-.061 3.197-.061 7.223s.04 6.326.06 7.223c.015.644.33 1.607 1.346 2c.405.157.935.277 1.594.277c.66 0 1.189-.12 1.594-.277c1.015-.393 1.33-1.356 1.345-2c.02-.897.061-3.197.061-7.223s-.04-6.326-.06-7.223c-.015-.644-.33-1.607-1.346-2M18.5 26.857v-5.714c0-.948.776-1.446 1.603-1.517q.256-.024.765-.052c.68-.038 1.707-.074 3.132-.074s2.453.036 3.132.074q.509.028.765.052c.827.07 1.603.569 1.603 1.517v5.714c0 .949-.776 1.446-1.603 1.517q-.256.024-.765.052c-.68.038-1.707.074-3.132.074s-2.453-.036-3.132-.074q-.509-.028-.765-.052c-.827-.07-1.603-.569-1.603-1.517" clipRule="evenodd"></path>
            </svg>
        )
    },
    {
        id: 2,
        name: 'Samuel | EMA',
        image: '/assets/user-3.jpg',
        role: 'Backend Engineer',
        rating: 5.0,
        reviews: 20,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m17.09 7.974l.23.23c1.789 1.79 2.684 2.684 2.684 3.796s-.895 2.006-2.684 3.796l-.23.23M13.876 5l-3.751 14M6.91 7.974l-.23.23C4.892 9.994 3.997 10.888 3.997 12s.895 2.006 2.685 3.796l.23.23"></path>
            </svg>
        )
    },
    {
        id: 3,
        name: 'David Emma',
        image: '/assets/user-3.jpg',
        role: 'Math Tutor',
        rating: 5.0,
        reviews: 6,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.5 12.5l.475-.316c.473-.316.71-.474.938-.404c.227.071.333.335.545.864L9 16.5l2.088-6.265c.44-1.32.66-1.98 1.184-2.357s1.22-.378 2.611-.378H18.5M17 12l-1.5 1.5m0 0L14 15m1.5-1.5L17 15m-1.5-1.5L14 12"></path>
                </g>
            </svg>
        )
    },
    {
        id: 4,
        name: 'Lou Attal Studio',
        image: '/assets/user-3.jpg',
        role: 'Tech Ethusiast',
        rating: 5.0,
        reviews: 8,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m17.09 7.974l.23.23c1.789 1.79 2.684 2.684 2.684 3.796s-.895 2.006-2.684 3.796l-.23.23M13.876 5l-3.751 14M6.91 7.974l-.23.23C4.892 9.994 3.997 10.888 3.997 12s.895 2.006 2.685 3.796l.23.23"></path>
            </svg>
        )
    },
    {
        id: 5,
        name: 'Maria Garcia',
        image: '/assets/user-3.jpg',
        role: 'UX Designer',
        rating: 4.9,
        reviews: 45,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m17.09 7.974l.23.23c1.789 1.79 2.684 2.684 2.684 3.796s-.895 2.006-2.684 3.796l-.23.23M13.876 5l-3.751 14M6.91 7.974l-.23.23C4.892 9.994 3.997 10.888 3.997 12s.895 2.006 2.685 3.796l.23.23"></path>
            </svg>
        )
    },
    {
        id: 6,
        name: 'John Smith',
        image: '/assets/user-3.jpg',
        role: 'Marketing Expert',
        rating: 4.8,
        reviews: 32,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m5.5 12.5l.475-.316c.473-.316.71-.474.938-.404c.227.071.333.335.545.864L9 16.5l2.088-6.265c.44-1.32.66-1.98 1.184-2.357s1.22-.378 2.611-.378H18.5M17 12l-1.5 1.5m0 0L14 15m1.5-1.5L17 15m-1.5-1.5L14 12"></path>
                </g>
            </svg>
        )
    },
    {
        id: 7,
        name: 'Emily Chen',
        image: '/assets/user-3.jpg',
        role: 'Content Creator',
        rating: 5.0,
        reviews: 28,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48">
                <path fill="currentColor" fillRule="evenodd" d="M10.624 10.107C11.135 9.8 11.922 9.5 13 9.5s1.865.3 2.376.607c.789.472 1.025 1.28 1.037 1.856c.023 1.148.087 4.934.087 12.037s-.064 10.889-.087 12.037c-.012.575-.248 1.384-1.037 1.856c-.511.307-1.298.607-2.376.607s-1.865-.3-2.376-.607c-.789-.472-1.025-1.28-1.037-1.856C9.564 34.89 9.5 31.103 9.5 24s.064-10.889.087-12.037c.012-.575.248-1.384 1.037-1.856m26.752 0C36.865 9.8 36.078 9.5 35 9.5s-1.865.3-2.376.607c-.788.472-1.025 1.28-1.037 1.856C31.564 13.11 31.5 16.897 31.5 24s.064 10.889.087 12.037c.012.575.248 1.384 1.037 1.856c.511.307 1.298.607 2.376.607s1.865-.3 2.376-.607c.788-.472 1.025-1.28 1.037-1.856c.023-1.148.087-4.934.087-12.037s-.064-10.889-.087-12.037c-.012-.575-.249-1.384-1.037-1.856M4.5 14.5c-.66 0-1.189.12-1.594.277c-1.016.394-1.33 1.356-1.345 2c-.02.897-.061 3.197-.061 7.223s.04 6.326.06 7.223c.015.644.33 1.607 1.346 2c.405.157.934.277 1.594.277s1.189-.12 1.594-.277c1.016-.393 1.33-1.356 1.345-2c.02-.897.061-3.197.061-7.223s-.04-6.326-.06-7.223c-.015-.644-.33-1.607-1.346-2A4.4 4.4 0 0 0 4.5 14.5m40.594.277A4.4 4.4 0 0 0 43.5 14.5c-.66 0-1.189.12-1.594.277c-1.015.394-1.33 1.356-1.345 2c-.02.897-.061 3.197-.061 7.223s.04 6.326.06 7.223c.015.644.33 1.607 1.346 2c.405.157.935.277 1.594.277c.66 0 1.189-.12 1.594-.277c1.015-.393 1.33-1.356 1.345-2c.02-.897.061-3.197.061-7.223s-.04-6.326-.06-7.223c-.015-.644-.33-1.607-1.346-2M18.5 26.857v-5.714c0-.948.776-1.446 1.603-1.517q.256-.024.765-.052c.68-.038 1.707-.074 3.132-.074s2.453.036 3.132.074q.509.028.765.052c.827.07 1.603.569 1.603 1.517v5.714c0 .949-.776 1.446-1.603 1.517q-.256.024-.765.052c-.68.038-1.707.074-3.132.074s-2.453-.036-3.132-.074q-.509-.028-.765-.052c-.827-.07-1.603-.569-1.603-1.517" clipRule="evenodd"></path>
            </svg>
        )
    },
    {
        id: 8,
        name: 'Michael Brown',
        image: '/assets/user-3.jpg',
        role: 'Business Coach',
        rating: 4.9,
        reviews: 52,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m17.09 7.974l.23.23c1.789 1.79 2.684 2.684 2.684 3.796s-.895 2.006-2.684 3.796l-.23.23M13.876 5l-3.751 14M6.91 7.974l-.23.23C4.892 9.994 3.997 10.888 3.997 12s.895 2.006 2.685 3.796l.23.23"></path>
            </svg>
        )
    },
];

export default function SuggestionsPage() {
    const router = useRouter();

    return (
        <div className="max-w-7xl mx-auto p-8">
            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
            >
                <ArrowLeft className="w-5 h-5" />
                Back
            </button>

            <h1 className="text-3xl font-bold text-foreground mb-8">All Suggestions</h1>

            {/* Creators Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {creators.map((creator) => (
                    <div
                        key={creator.id}
                        className="bg-muted hover:bg-muted/50 transition-colors rounded-2xl p-6 cursor-pointer"
                    >
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={creator.image}
                                alt={creator.name}
                                className="w-32 h-32 rounded-full object-cover mb-4"
                            />
                            <h3 className="font-semibold text-foreground text-lg mb-1">
                                {creator.name}
                            </h3>
                            <div className="flex items-center gap-1 text-sm text-purple-500 mb-2">
                                {creator.icon}
                                <span>{creator.role}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm text-foreground">
                                <svg
                                    className="w-4 h-4 text-yellow-500 fill-yellow-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span>
                                    {creator.rating} ({creator.reviews})
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
