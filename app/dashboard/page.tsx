"use client";

import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase"; // make sure this is your firebase setup path

export default function DashboardPage() {
  const router = useRouter();

  // ✅ Check login on mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      router.push("/auth");
    }
  }, [router]);

  // ✅ Logout function
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    router.push("/auth");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}
