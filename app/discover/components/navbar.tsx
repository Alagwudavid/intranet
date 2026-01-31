'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ChevronDownCircle, Menu, X, ShoppingBag, GraduationCap, MessagesSquare, FileText, WalletCards, Vault, Puzzle, Brain, ArrowRight, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownItem {
    href: string;
    icon: LucideIcon;
    title: string;
    description: string;
}

const toolsDropdownItems: DropdownItem[] = [
    {
        href: '/marketplace',
        icon: Brain,
        title: 'Beet Ai',
        description: 'Personal ai assistant and chatbot'
    },
    {
        href: '/bitquiz',
        icon: Puzzle,
        title: 'BitQuiz',
        description: 'Create quiz and gradable questionaires for your students'
    },
    {
        href: '/vault',
        icon: Vault,
        title: 'Escrow vault',
        description: 'Lock items for sell with trust'
    },
    {
        href: '/whiteboard',
        icon: FileText,
        title: 'Whiteboard',
        description: 'Your whiteboard for limitless illustrations'
    }
];
const IntranetIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="30px"
      height="33px"
      version="1.1"
      style={{
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        imageRendering: "optimizeQuality",
        fillRule: "evenodd",
        clipRule: "evenodd",
      }}
      viewBox="0 0 12.92 14"
    >
      <g>
        <metadata />
        <g>
          <g>
            <path
              fill="#242526"
              d="M11.26 7.93c0,0 0,0 0,0l0 0zm-11.23 1.43c0.11,1.02 0.68,1.69 1.26,2.09 0.34,0.24 1.63,0.95 2.12,1.24 0.48,0.28 1.73,1.03 2.19,1.17 1.1,0.33 1.84,0.01 2.64,-0.45l3.2 -1.85c0.36,-0.2 0.67,-0.48 0.89,-0.78 0.64,-0.89 0.57,-1.55 0.57,-2.8 0,-0.56 0,-1.11 0,-1.67 0,-1.11 0.14,-1.99 -0.46,-2.92 -0.43,-0.66 -0.75,-0.8 -1.35,-1.16l-2.67 -1.54c-0.83,-0.47 -1.48,-0.86 -2.59,-0.62 -0.69,0.16 -1.6,0.78 -2.23,1.13 -0.36,0.21 -0.7,0.41 -1.06,0.62 -0.76,0.44 -1.52,0.78 -1.95,1.4 -0.66,0.94 -0.58,1.5 -0.58,2.8 0,0.63 -0.03,2.9 0.02,3.34z"
            />
          </g>
          <path fill="white" d="M11.26 7.93c0,0 0,0 0,0z" />
        </g>
        <path
          fill="#FEFEFE"
          d="M8.37 6.64l2.98 -1.74c0.58,-0.34 1.05,0.01 1.05,0.77l0 3.14c0,0.78 -0.48,1.7 -1.06,2.04l-3.01 1.77c-0.59,0.35 -1.06,-0.01 -1.06,-0.8l0.03 -3.16c0.01,-0.78 0.49,-1.68 1.07,-2.02z"
        />
      </g>
    </svg>
  );
};
export function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

    const renderDropdownItems = (items: DropdownItem[], onClose: () => void) => {
        return items.map((item) => {
            const Icon = item.icon;
            return (
                <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-start gap-3 px-4 py-3 transition group"
                    onClick={onClose}
                >
                    <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition">
                        <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold text-sm mb-0.5 group-hover:text-primary">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                </Link>
            );
        });
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <IntranetIcon className="w-8 h-8" />
                    <span className="font-bold text-2xl font-mono text-foreground">Intranet</span>
                </Link>

                {/* Navigation Links - Desktop */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/new-school" className="text-sm font-medium hover:text-primary transition">
                        Create your school
                    </Link>
                    <Link href="/pricing" className="text-sm font-medium hover:text-primary transition">
                        Pricing
                    </Link>
                    <div
                        className="relative"
                        onMouseEnter={() => setToolsDropdownOpen(true)}
                        onMouseLeave={() => setToolsDropdownOpen(false)}
                    >
                        <button
                            className="flex items-center gap-1 text-sm font-medium hover:text-primary transition cursor-pointer"
                            onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                        >
                            Tools
                            <ChevronDownCircle className={`w-4 h-4 transition-transform ${toolsDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <AnimatePresence>
                            {toolsDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg overflow-hidden"
                                >
                                    <div className="py-2">
                                        {renderDropdownItems(toolsDropdownItems, () => setToolsDropdownOpen(false))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-4">
                    <Button asChild className="hidden sm:flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition">
                        <Link href="/#waitlist-form">Join now!</Link>
                    </Button>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-md transition"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden border-t border-border bg-background overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            <Link
                                href="/how-it-works"
                                className="block text-base font-medium hover:text-primary transition py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                How it Works
                            </Link>
                            <Link
                                href="/pricing"
                                className="block text-base font-medium hover:text-primary transition py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/contact-us"
                                className="block text-base font-medium hover:text-primary transition py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>

                            <div className="space-y-2">
                                <div className="text-sm font-semibold text-muted-foreground px-2 py-1">Tools</div>
                                {toolsDropdownItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className="flex items-start gap-3 px-2 py-2 rounded-md transition"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <div className="p-2 bg-primary/10 rounded-md">
                                                <Icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-semibold text-sm mb-0.5">{item.title}</div>
                                                <div className="text-xs text-muted-foreground">{item.description}</div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="pt-4 border-t border-border">
                                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                    <Link href="/#waitlist-form" onClick={() => setMobileMenuOpen(false)}>Join now!</Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
