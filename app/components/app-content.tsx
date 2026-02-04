import React from "react";

interface AppContentProps {
    children: React.ReactNode;
    className?: string;
}

export default function AppContent({ children, className }: AppContentProps) {
    return (
        <main className={`bg-background lg:mx-auto lg:flex h-full w-full mt-2 rounded-t-2xl lg:flex-1 lg:flex-col overflow-y-auto hide-scrollbar ${className}`}>
            {children}
        </main>
    );
}
