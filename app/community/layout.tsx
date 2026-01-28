import { Metadata } from 'next';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

export const metadata: Metadata = {
    title: 'Community | Bitroot intranet',
    description: 'Your community hub and activities',
};

export default function CommunityLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="min-h-page bg-muted lg:pl-20 pb-12 lg:pb-0">
                {children}
                <Footer />
            </div>
        </>
    );
}