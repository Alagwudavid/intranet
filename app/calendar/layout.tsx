import { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Calendar | Intranet web",
  description: "Manage your schedule and events",
};

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <Navbar /> */}
      <Sidebar />
      <div className="ml-20 min-h-page bg-background relative border">
        {children}
        <Footer />
      </div>
    </>
  );
}
