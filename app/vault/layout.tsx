import { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";

export const metadata: Metadata = {
  title: "Vault | Bitroot intranet",
  description: "Your saved content and bookmarks",
};

export default function VaultLayout({
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
