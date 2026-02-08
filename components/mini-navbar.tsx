"use client";

import { ArrowLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function MiniNavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean); // Filter out empty segments
  return (
    <nav className="sticky top-0 left-0 right-0 px-2 z-header bg-background border-b">
      <div className="max-w-full mx-auto px-4">
        <div className="flex items-center justify-between h-10 p-2">
          <div className="flex shrink-0 items-center gap-2">
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
          <div className="flex items-center gap-1 flex-1 justify-center text-sm text-muted-foreground">
            {segments.map((segment, index) => (
              <div key={index} className="flex items-center gap-1">
                {
                  index > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground mt-1" />
                }
                <span className="capitalize font-semibold">
                  {segment}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-1 md:space-x-3 ml-2" />
        </div>
      </div>
    </nav>
  );
}
