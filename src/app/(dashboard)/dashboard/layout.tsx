"use client";

import SidebarComponent from "@/app/components/sidebar";

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-dvh w-full">
      <SidebarComponent />
      <div className="w-full flex-1 flex-col p-4 h-full">{children}</div>
    </div>
  );
}
