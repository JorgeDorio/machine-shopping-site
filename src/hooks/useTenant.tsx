"use client";

import { usePathname } from "next/navigation";

export function useTenant() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const tenant = segments[0] || "";

  return tenant;
}
