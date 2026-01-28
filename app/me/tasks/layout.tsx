import { Metadata } from 'next';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

export const metadata: Metadata = {
    title: 'My Assessments | Bitroot intranet',
    description: 'Your personal assessments',
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <div className="min-h-page bg-muted">
                {children}
            </div>
        </>
    );
}
