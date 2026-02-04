import { Copyright } from 'lucide-react';
import Link from 'next/link';

export default function FooterMini() {
    const date = new Date()
    const fullYear = date.getFullYear()
    return (
        <footer className="w-full bg-background rounded-b-2xl mb-2 border-t">
            <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between flex-wrap gap-2 lg:gap-4">
                {/* Left Side - Copyright and Links */}
                <div className="flex items-center flex-wrap gap-6 text-sm text-gray-500">
                    {/* <span className="flex items-center gap-1">
                        <Copyright className="w-4 h-4" />
                        Copyright 2025. Techgators, LLC
                    </span> */}
                    <Link href="/documentation" className="hover:text-gray-700 transition-colors">
                        About
                    </Link>
                    <Link href="/blog" className="hover:text-gray-700 transition-colors">
                        Blog
                    </Link>
                    <Link href="/terms" className="hover:text-gray-700 transition-colors">
                        Term & Condition
                    </Link>
                    <Link href="/privacy" className="hover:text-gray-700 transition-colors">
                        Privacy
                    </Link>
                    <Link href="/help" className="hover:text-gray-700 transition-colors">
                        Help
                    </Link>
                </div>

                {/* Right Side - Status Dots */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm">
                        <Copyright className='w-4 h-4'/>
                        <button className="text-foreground transition-colors">
                            2025 - {fullYear}
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
