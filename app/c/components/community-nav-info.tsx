"use client";

import { ArrowLeft, Bell, Flag, Info, ChevronRight } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CommunityNavInfo() {
  const router = useRouter();
  const pathname = usePathname();
  const [isRightbarVisible, setIsRightbarVisible] = useState(true);

  // Load rightbar visibility state from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("rightbarVisible");
    if (saved !== null) {
      setIsRightbarVisible(saved === "true");
    }
  }, []);

  // Toggle rightbar visibility
  const toggleRightbar = () => {
    const newState = !isRightbarVisible;
    setIsRightbarVisible(newState);
    localStorage.setItem("rightbarVisible", String(newState));
    // Dispatch custom event to notify layout
    window.dispatchEvent(
      new CustomEvent("toggleRightbar", { detail: { visible: newState } }),
    );
  };

  // Extract breadcrumb segments from pathname
  const getBreadcrumbs = () => {
    const segments = pathname?.split("/").filter(Boolean) || [];
    const breadcrumbs = [];

    // Always start with community root
    breadcrumbs.push({
      name: "Intranet Community",
      path: "/c/general",
      isRoot: true,
    });

    // Find the index of 'c' to start from there
    const cIndex = segments.indexOf("c");
    if (cIndex !== -1 && cIndex < segments.length - 1) {
      // Add subsequent segments
      for (let i = cIndex + 1; i < segments.length; i++) {
        const segment = segments[i];
        const path = "/" + segments.slice(0, i + 1).join("/");
        breadcrumbs.push({
          name: segment.charAt(0).toUpperCase() + segment.slice(1),
          path: path,
          isRoot: false,
        });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div className="w-full h-full bg-muted border-b border-background">
      <div className="flex items-center justify-between px-4 h-full">
        {/* Left: Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 justify-center rounded-lg p-1 border cursor-pointer text-sm hover:bg-muted/50 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        {/* Center: Breadcrumb Navigation */}
        <div className="flex items-center gap-1 flex-1 justify-center select-none overflow-x-auto hide-scrollbar">
          {breadcrumbs.map((breadcrumb, index) => (
            <div
              key={`${breadcrumb.path}-${index}`}
              className="flex items-center gap-1"
            >
              {index === 0 && (
                <div className="relative w-5 h-5 rounded overflow-hidden bg-background shrink-0">
                  <Image
                    src="/assets/user-1.png"
                    alt="Community"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <Link
                href={breadcrumb.path}
                className={`text-sm hover:text-primary transition-colors whitespace-nowrap ${
                  index === breadcrumbs.length - 1
                    ? "font-semibold text-foreground"
                    : "font-medium text-muted-foreground"
                }`}
              >
                {breadcrumb.name}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
              )}
            </div>
          ))}
        </div>

        {/* Right: Flag, Bell, Info Icons */}
        <div className="flex items-center gap-2">
          <button
            className="flex items-center justify-center p-1 cursor-pointer rounded-lg hover:bg-muted/50 transition-colors"
            aria-label="Flag"
          >
            <Flag className="w-5 h-5" />
          </button>
          <button
            className="flex items-center justify-center p-1 cursor-pointer rounded-lg hover:bg-muted/50 transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
          </button>
          <button
            onClick={toggleRightbar}
            className={`flex items-center justify-center p-1 cursor-pointer rounded-lg hover:bg-muted/50 transition-colors ${
              isRightbarVisible ? "bg-primary/10 text-primary" : ""
            }`}
            aria-label="Toggle sidebar information"
            title={isRightbarVisible ? "Hide sidebar" : "Show sidebar"}
          >
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
