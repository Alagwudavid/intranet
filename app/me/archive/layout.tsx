import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Archive | Bitroot intranet',
};

export default function ArchiveLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
