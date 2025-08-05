"use client";

import "./globals.css";
// import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import { useState } from "react";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Add weights as needed
  variable: "--font-dm-sans",   // Optional: use as CSS variable
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  // const handleToggleSidebar = () => setIsSidebarCollapsed((prev) => !prev);

  return (
    <html lang="en" className={dmSans.className}>
      <body className="flex bg-gray-50 min-h-screen">
        {/* <Sidebar isCollapsed={isSidebarCollapsed} onToggle={handleToggleSidebar} /> */}

        <div
          className={`flex flex-col w-full transition-all duration-300 `}>
          {/* <Header /> */}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
