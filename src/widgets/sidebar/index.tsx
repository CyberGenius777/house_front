"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ThemeToggle } from "@/features/theme-toggle";

const navItems = [
  { label: "Дашборд", href: "/dashboard" },
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

  return (
    <aside className="w-64 bg-[#1a1a1a] text-gray-300 p-6 flex flex-col">
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
              pathname === href
                ? "bg-[#292929] text-white font-semibold"
                : "hover:text-white",
            )}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-10 space-y-2 text-sm text-gray-500">
        {extraItems.map(({ label, href }) => (
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
        ))}
      </div>
    </aside>
  );
};
