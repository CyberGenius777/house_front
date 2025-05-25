"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { ThemeToggle } from "@/features/theme-toggle";
import { useEffect, useState } from "react";
import { useLogoutMutation } from "@/shared/api/auth";

const navItems = [
  { label: "Главная", href: "/" },
  { label: "Платежи", href: "/payments" },
  { label: "Запросы", href: "/requests" },
];

const extraItems = [
  { label: "Профиль", href: "/profile" },
  { label: "Документы", href: "/documents" },
  { label: "Выйти", href: "/logout" },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  const [logout] = useLogoutMutation();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleLogout = async () => {
    await logout();
    push("/");
  };

  return (
    <aside className="w-64 min-w-48 bg-[#1a1a1a] text-gray-300 p-6 flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-orange-500 font-bold text-xl">Римский</h1>
        <ThemeToggle />
      </div>
      <nav className="space-y-4">
        {navItems.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "block px-2 py-1 rounded transition",
              mounted && pathname === href
                ? "bg-[#292929] text-white font-semibold"
                : "hover:text-white",
            )}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-10 space-y-2 text-sm text-gray-500">
        {extraItems.map(({ label, href }) =>
          label === "Выйти" ? (
            <button
              key={href}
              onClick={handleLogout}
              className="block w-full text-left px-2 py-1 rounded transition hover:text-white"
            >
              {label}
            </button>
          ) : (
            <Link
              key={href}
              href={href}
              className={clsx(
                "block px-2 py-1 rounded transition",
                pathname === href
                  ? "bg-[#292929] text-white font-semibold"
                  : "hover:text-white",
              )}
            >
              {label}
            </Link>
          ),
        )}
      </div>
    </aside>
  );
};
