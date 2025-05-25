"use client";

import { ProfileForm } from "@/widgets/profile";
import { Sidebar } from "@/widgets/sidebar";

export const ProfilePage = () => (
  <div className="flex min-h-screen ">
    <Sidebar />
    <main className="flex-1 p-8">
      <h1 className="text-2xl font-bold mb-6">Профиль</h1>
      <ProfileForm />
    </main>
  </div>
);
