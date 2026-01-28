import { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";

export const metadata: Metadata = {
  title: "Room | Bitroot intranet",
  description: "Join video rooms and live sessions",
};

export default function RoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="min-h-page bg-muted pl-20">{children}</div>
    </>
  );
}
