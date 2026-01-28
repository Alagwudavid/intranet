'use client';

import { Suspense } from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="min-h-page bg-background relative transition-all duration-300 lg:pl-20">
                <div className="lg:flex-1">
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    );
}
