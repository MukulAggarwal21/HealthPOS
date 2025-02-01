"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Transactions", href: "/transactions" },
  { name: "Analytics", href: "/analytics" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">
            Modern POS
          </Link>
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-black dark:text-white"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}