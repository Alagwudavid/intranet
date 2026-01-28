import { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";

export const metadata: Metadata = {
  title: "Courses | Bitroot intranet",
  description: "Browse and manage your courses",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-page bg-background relative border">{children}</div>
    </>
  );
}
