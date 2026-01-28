import type { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Course - Bitroot",
  description: "Course details and overview",
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="lg:pl-20 min-h-page bg-background relative pb-12 lg:pb-0">
        <div className="lg:flex-1">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
