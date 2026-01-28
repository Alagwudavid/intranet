import { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";

export const metadata: Metadata = {
  title: "Quiz | Bitroot intranet",
  description: "Take quizzes and test your knowledge",
};

export default function QuizLayout({
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
