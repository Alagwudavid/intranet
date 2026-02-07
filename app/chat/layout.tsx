import { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";
import AppContent from "../components/app-content";
import FooterMini from "../components/footer-mini";
import SideMenu from "../c/components/sidemenu";
import MiniNavbar from "@/components/mini-navbar";

export const metadata: Metadata = {
  title: "Chat | Intranet web",
  description: "Connect and chat with your community",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex items-center gap-0 bg-muted">
      <Sidebar />
      <div className="flex-1 flex flex-col w-[calc(100%-88px)] h-screen relative bg-muted pr-2">
        <AppContent className="gap-0!">
          <MiniNavbar />
          <div className="flex flex-1 overflow-hidden">
            {/* Main Content - Flexible width with internal scroll */}
            <div className="flex-1 overflow-y-auto custom-scrollbar min-w-96">
              {children}
            </div>
          </div>
        </AppContent>
        <FooterMini />
      </div>
    </div>
  );
}
