import { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";
import Footer from "../components/footer";
import DiscoverSidenav from "./components/discover-sidenav";

export const metadata: Metadata = {
  title: "Discover Communities | Bitroot intranet",
  description: "Find and join communities that match your interests",
};

export default function DiscoverLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="pl-20 min-h-page bg-background relative">
        <div className="lg:flex-1">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
