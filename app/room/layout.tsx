import { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";
import { NavbarDiscover } from "../discover/components/navbar-discover";
import AppContent from "../components/app-content";
import FooterMini from "../components/footer-mini";

export const metadata: Metadata = {
  title: "Room | Intranet web",
  description: "Join video rooms and live sessions",
};

export default function RoomLayout({
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
