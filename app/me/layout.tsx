import { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";
import Footer from "../components/footer";
import AppContent from "../components/app-content";
import MiniNavbar from "@/components/mini-navbar";
import FooterMini from "../components/footer-mini";

export const metadata: Metadata = {
  title: "My Account | Intranet web",
  description: "Your personal account dashboard",
};

export default function MeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-screen flex items-center gap-0 bg-muted">
      <Sidebar />
      <div className="flex-1 flex flex-col w-[calc(100%-88px)] h-screen relative bg-muted pr-2">
        <AppContent>
          <MiniNavbar />
          {children}
        </AppContent>
        <FooterMini />
      </div>
    </div>
  );
}
