"use client";

import { Suspense } from "react";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";
import Footer from "../components/footer";
import AppContent from "../components/app-content";
import FooterMini from "../components/footer-mini";
import SpecialNavbar from "./components/special-navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex items-center gap-0 bg-muted">
      <Sidebar />
      <div className="flex-1 flex flex-col w-[calc(100%-88px)] h-screen relative bg-muted pr-2">
        <AppContent>
          <SpecialNavbar />
          {children}
        </AppContent>
        <FooterMini />
      </div>
    </div>
  );
}
