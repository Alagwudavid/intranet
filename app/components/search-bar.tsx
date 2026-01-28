"use client";

import {
  Search,
  X,
  TrendingUp,
  Users,
  Calendar,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const LogoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 0.49 0.43"
    xmlSpace="preserve"
    style={{
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      fillRule: "evenodd",
      clipRule: "evenodd",
    }}
    {...props}
  >
    <g>
      <path
        d="M0.29 0.3c-0.05,0.02 -0.14,0.09 -0.2,0.05 -0.04,-0.04 -0.02,-0.14 0,-0.19 0.08,-0.15 0.23,-0.13 0.2,0.14zm0.19 -0.18c0.01,-0.02 0.01,-0.02 0.01,-0.04l-0.07 0.01 -0.01 0.03c-0.01,0.06 -0.05,0.1 -0.06,0.12 0,-0.05 0,-0.1 -0.02,-0.15 -0.05,-0.14 -0.24,-0.11 -0.3,0.04 -0.04,0.08 -0.05,0.21 0.02,0.27 0.09,0.08 0.19,-0.01 0.26,-0.03 0.06,0.06 0.1,0.08 0.18,0l-0.04 -0.04c-0.04,0.01 -0.05,0.04 -0.08,0.01 -0.02,-0.04 0.08,-0.1 0.11,-0.22z"
        fill="black"
      />
    </g>
  </svg>
);

interface SearchBarProps {
  maxWidth?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
  isInCommunity?: boolean;
  communityName?: string;
  communityLink?: string;
}

export default function SearchBar({
  maxWidth = "max-w-xl",
  placeholder = "What are you looking for?",
  onSearch,
  isInCommunity = false,
  communityName = "Intranet-community",
  communityLink = "/c/general",
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Mock trending searches
  const trendingSearches = [
    { id: 1, text: "aws generative ai developer", trend: "up" },
    { id: 2, text: "abhishek veeramalla", trend: "up" },
    { id: 3, text: "stephane maarek", trend: "up" },
    { id: 4, text: "piano", trend: "up" },
    { id: 5, text: "mlops", trend: "up" },
    { id: 6, text: "aws certified ai practitioner", trend: "up" },
  ];

  // Mock search results grouped by category
  const mockSearchResults = (query: string) => ({
    courses: [
      {
        id: 1,
        title: `AI Video Creation with Kling AI: Mind-Blowing Generative AI`,
        author: "Dan Britain",
        image: "👨‍🎨",
      },
      {
        id: 2,
        title: `Create Ai Videos | Kling Ai For Beginners | Step-by-step`,
        author: "FXveda Gen Ai Education App",
        image: "🎬",
      },
      {
        id: 3,
        title: `Klaviyo Automation and Segmentation Masterclass`,
        author: "Jeremy Robinson",
        image: "📧",
      },
      {
        id: 4,
        title: `Master AI Video Generation With KlingAI Generative AI`,
        author: "Faizan Amied",
        image: "🤖",
      },
    ],
    communities: [
      {
        id: 1,
        name: `${query} Community`,
        members: "2.5K members",
        image: "🏘️",
      },
      {
        id: 2,
        name: `${query} Developers`,
        members: "1.8K members",
        image: "💻",
      },
    ],
    users: [
      { id: 1, name: `${query} Expert`, username: "@expert", image: "👤" },
      {
        id: 2,
        name: `${query} Instructor`,
        username: "@instructor",
        image: "👨‍🏫",
      },
    ],
    events: [
      { id: 1, title: `${query} Workshop`, date: "Jan 15, 2026", image: "📅" },
      {
        id: 2,
        title: `${query} Masterclass`,
        date: "Jan 20, 2026",
        image: "🎓",
      },
    ],
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch?.(value);

    // Clear previous timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (value.trim()) {
      setIsSearching(true);
      setSearchResults(null);

      // Debounce search with 2-5 seconds (using 3 seconds as middle ground)
      searchTimeoutRef.current = setTimeout(() => {
        setSearchResults(mockSearchResults(value));
        setIsSearching(false);
      }, 1500);
    } else {
      setSearchResults(null);
      setIsSearching(false);
    }
  };

  const handleFocus = () => {
    setIsDropdownOpen(true);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults(null);
    setIsSearching(false);
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
  };

  return (
    <div className={`flex-1 ${maxWidth} relative`} ref={dropdownRef}>
      <div className="relative flex items-center gap-2">
        <div className="relative flex-1 flex items-center">
          {/* Community Indicator */}
          {isInCommunity ? (
            <div className="flex items-center gap-2 p-1 rounded-xl bg-background text-foreground border absolute left-2 top-1/2 transform -translate-y-1/2 select-none">
              <div className="w-6 h-6 flex items-center justify-center rounded-lg bg-gray-200 text-muted-foreground hover:text-gray-900 transition-all">
                <LogoIcon className="w-4 h-4" />
              </div>
              <span className="font-mono font-bold text-base hidden lg:flex max-w-20 line-clamp-1 text-ellipsis">
                {communityName}
              </span>
              <button className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:bg-muted rounded-full transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          )}
          <input
            type="text"
            placeholder={`${isInCommunity ? "Search in " + communityName : placeholder}`}
            value={searchQuery}
            onChange={handleChange}
            onFocus={handleFocus}
            className={`w-full bg-muted text-foreground ${isInCommunity ? "pl-22 lg:pl-40" : "pl-10"} pr-12 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400`}
          />

          {/* Clear Button or Loading Indicator */}
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            {isSearching ? (
              <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
            ) : searchQuery ? (
              <button
                onClick={handleClearSearch}
                className="p-1.5 rounded-lg transition-colors text-muted-foreground hover:bg-background"
              >
                <X className="w-4 h-4" />
              </button>
            ) : null}
          </div>
        </div>
      </div>

      {/* Search Results Dropdown */}
      {isDropdownOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg z-50 max-h-[600px] overflow-y-auto custom-scrollbar">
          {!searchQuery && !searchResults ? (
            /* Trending Searches */
            <div className="p-3">
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Trending
              </h3>
              <div className="space-y-1">
                {trendingSearches.map((item) => (
                  <button
                    key={item.id}
                    className="w-full flex items-center gap-3 px-3 py-2.5 hover:bg-muted rounded-lg transition-colors text-left"
                    onClick={() => {
                      setSearchQuery(item.text);
                      onSearch?.(item.text);
                    }}
                  >
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">{item.text}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults ? (
            /* Grouped Search Results */
            <div className="p-3">
              {/* Courses */}
              {searchResults.courses.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2 px-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    COURSES
                  </h3>
                  <div className="space-y-1">
                    {searchResults.courses.map((course: any) => (
                      <Link
                        key={course.id}
                        href={`/intranet/course/${course.id}`}
                        className="flex items-start gap-3 px-3 py-2.5 hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="text-2xl flex-shrink-0">
                          {course.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-foreground line-clamp-1">
                            {course.title}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Course • {course.author}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Communities */}
              {searchResults.communities.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2 px-2">
                    <Users className="w-3.5 h-3.5" />
                    COMMUNITIES
                  </h3>
                  <div className="space-y-1">
                    {searchResults.communities.map((community: any) => (
                      <Link
                        key={community.id}
                        href={`/intranet/community/${community.id}`}
                        className="flex items-center gap-3 px-3 py-2.5 hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="text-2xl flex-shrink-0">
                          {community.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-foreground line-clamp-1">
                            {community.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {community.members}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Users */}
              {searchResults.users.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2 px-2">
                    <Users className="w-3.5 h-3.5" />
                    USERS
                  </h3>
                  <div className="space-y-1">
                    {searchResults.users.map((user: any) => (
                      <Link
                        key={user.id}
                        href={`/intranet/profile/${user.id}`}
                        className="flex items-center gap-3 px-3 py-2.5 hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="text-2xl flex-shrink-0">
                          {user.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-foreground line-clamp-1">
                            {user.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {user.username}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Events */}
              {searchResults.events.length > 0 && (
                <div className="mb-2">
                  <h3 className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2 px-2">
                    <Calendar className="w-3.5 h-3.5" />
                    EVENTS
                  </h3>
                  <div className="space-y-1">
                    {searchResults.events.map((event: any) => (
                      <Link
                        key={event.id}
                        href={`/intranet/event/${event.id}`}
                        className="flex items-center gap-3 px-3 py-2.5 hover:bg-muted rounded-lg transition-colors"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <div className="text-2xl flex-shrink-0">
                          {event.image}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium text-foreground line-clamp-1">
                            {event.title}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {event.date}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : isSearching ? (
            /* Loading State */
            <div className="p-8 flex flex-col items-center justify-center">
              <div className="w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-sm text-muted-foreground">Searching...</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
