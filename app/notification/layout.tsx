import { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";
import Footer from "../components/footer";
import AppContent from "../components/app-content";
import FooterMini from "../components/footer-mini";

export const metadata: Metadata = {
  title: "Notifications | Intranet web",
  description: "View your notifications and activity",
};

export default function NotificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex items-center gap-0 bg-muted">
      <Sidebar />
      <div className="flex-1 flex flex-col w-[calc(100%-88px)] h-screen relative bg-muted pr-2">
        <AppContent className="gap-0!">
          {/* <Navbar /> */}
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
