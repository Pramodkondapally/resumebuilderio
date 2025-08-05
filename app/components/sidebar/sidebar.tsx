"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FileText,
  PlusCircle,
  Layers,
  Settings,
  LogOut,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

type SidebarProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

const navLinks = [
  { label: "Dashboard", href: "/dashboard", icon: <Home size={20} /> },
  { label: "My Resumes", href: "/resumes", icon: <FileText size={20} /> },
  { label: "Create Resume", href: "/create", icon: <PlusCircle size={20} /> },
  { label: "Templates", href: "/templates", icon: <Layers size={20} /> },
  { label: "Settings", href: "/settings", icon: <Settings size={20} /> },
];

export default function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`h-screen ${
        isCollapsed ? "w-20" : "w-64"
      } bg-gray-100 shadow-md flex flex-col justify-between fixed transition-all duration-300`}
    >
      {/* Toggle Button */}
      <div className="p-4">
        <button
          onClick={onToggle}
          className="text-gray-600 hover:text-gray-800 transition"
        >
          {isCollapsed ? <ChevronsRight /> : <ChevronsLeft />}
        </button>
      </div>

      {/* Nav Links */}
      <div className="p-2 space-y-2 flex-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center ${
              isCollapsed ? "justify-center" : "justify-start"
            } space-x-3 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-200 transition ${
              pathname === link.href ? "bg-gray-300 font-semibold" : ""
            }`}
          >
            {link.icon}
            {!isCollapsed && <span>{link.label}</span>}
          </Link>
        ))}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-300">
        <button
          className={`flex items-center ${
            isCollapsed ? "justify-center" : "justify-start"
          } space-x-2 text-red-600 hover:underline w-full`}
        >
          <LogOut size={20} />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}
