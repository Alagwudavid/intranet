import React from "react";

interface AppContentProps {
    children: React.ReactNode;
}

export default function AppContent({ children }: AppContentProps) {
    return (
        <main className="bg-background lg:mx-auto lg:flex h-full w-full mt-2 rounded-t-2xl lg:flex-1 lg:flex-col lg:gap-4 overflow-y-auto hide-scrollbar">
            {children}
        </main>
    );
}
