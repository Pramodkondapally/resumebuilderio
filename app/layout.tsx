"use client";

import "./globals.css";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => setIsSidebarCollapsed((prev) => !prev);

  return (
    <html lang="en">
      <body className="flex bg-gray-50 min-h-screen">
        {/* Sidebar is global */}
        <Sidebar isCollapsed={isSidebarCollapsed} onToggle={handleToggleSidebar} />

        <div
          className={`flex flex-col w-full transition-all duration-300 ${isSidebarCollapsed ? "ml-20" : "ml-64"
            }`}>
          {/* Header is global */}
          <Header />

          {/* Page-specific content */}
          <main>{children}</main>
        </div>
      </body> 
    </html>
  );
}
