import { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";

export const metadata: Metadata = {
  title: "Report | Bitroot intranet",
  description: "View your reports and analytics",
};

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="pl-20 min-h-page bg-background relative border">
        {children}
      </div>
    </>
  );
}
