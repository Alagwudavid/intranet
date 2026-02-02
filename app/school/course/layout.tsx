import type { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";
import FooterMini from "@/app/components/footer-mini";

export const metadata: Metadata = {
  title: "Course - Intranet",
  description: "Course details and overview",
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
