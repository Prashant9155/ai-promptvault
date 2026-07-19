import DashboardSidebar from "@/features/dashboard/components/sidebar/DashboardSidebar";
import DashboardNavbar from "@/features/dashboard/components/navbar/DashboardNavbar";

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="flex h-screen bg-muted/30">
      <DashboardSidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardNavbar />

        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}