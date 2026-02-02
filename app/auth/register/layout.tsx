import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Register | Intranet web',
};

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
