import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Register | Bitroot intranet',
};

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
