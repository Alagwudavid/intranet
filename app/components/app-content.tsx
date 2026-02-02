import React from "react";

interface AppContentProps {
    children: React.ReactNode;
}

export default function AppContent({ children }: AppContentProps) {
    return (
        <main className="lg:mx-auto lg:flex h-full w-full lg:flex-1 lg:flex-col lg:gap-4 lg:rounded-xl bg-background overflow-y-auto custom-scrollbar">
            {children}
        </main>
    );
}
