"use client";

import { ArrowLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function SpecialNavbar() {
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

  // Extract breadcrumb segments from pathname
  const getBreadcrumbs = () => {
    const segments = pathname?.split("/").filter(Boolean) || [];
    const breadcrumbs = [];

    // Always start with community root
    breadcrumbs.push({
      name: "Academy",
      path: "/",
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
    <nav className="sticky top-0 left-0 right-0 pl-20 px-2 z-header bg-background border-b">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between h-10 p-2">
          <div className="flex flex-shrink-0 items-center gap-2">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 justify-center rounded-lg p-1 px-4 border cursor-pointer text-sm hover:bg-muted/50 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </div>
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
          <div className="flex items-center space-x-1 md:space-x-3 ml-2">
          </div>
        </div>
      </div>
    </nav>
  );
}
