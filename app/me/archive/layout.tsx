import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Archive | Intranet web',
};

export default function ArchiveLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
