import { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "./components/navbar";
import Sidebar from "@/app/components/sidebar";
import Footer from "../components/footer";
import AppContent from "@/app/components/app-content";

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
    <>
      <Sidebar />
      <div className="pl-20 h-screen bg-muted relative">
        <AppContent>
          <Navbar />
          {children}
          <Footer />
        </AppContent>
      </div>
    </>
  );
}
