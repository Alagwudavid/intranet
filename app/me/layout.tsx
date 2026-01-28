import { Metadata } from 'next';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Footer from '../components/footer';

export const metadata: Metadata = {
    title: 'My Account | Bitroot intranet',
    description: 'Your personal account dashboard',
};

export default function MeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* <Navbar /> */}
            <Sidebar />
            <div className="min-h-page bg-background lg:pl-20 pb-12 lg:pb-0">
                {children}
                <Footer />
            </div>
        </>
    );
}