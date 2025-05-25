"use client";

import { Sidebar } from "@/widgets/sidebar";

export const DashboardPage = () => (
  <div className="flex min-h-screen">
    <Sidebar />
    <main className="flex-1 p-8 space-y-8">Dashboard Main</main>
  </div>
);
