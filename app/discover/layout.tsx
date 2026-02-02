import { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "./components/navbar";
import Sidebar from "@/app/components/sidebar";
import AppContent from "@/app/components/app-content";
import FooterMini from "../components/footer-mini";
import { NavbarDiscover } from "./components/navbar-discover";

export const metadata: Metadata = {
  title: "Discover Communities | Intranet web",
  description: "Find and join communities that match your interests",
};

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex items-center gap-0 bg-muted">
      <Sidebar />
      <div className="flex-1 flex flex-col w-[calc(100%-88px)] h-screen relative bg-muted pr-2">
        <AppContent>
          <NavbarDiscover />
          {children}
        </AppContent>
        <FooterMini />
      </div>
    </div>
  );
}
