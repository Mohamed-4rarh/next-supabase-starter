import LogoutButton from "@/components/logout-button";

export default async function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <p className="text-gray-600">You&#39;re logged into your dashboard.</p>

      <LogoutButton />
    </div>
  );
}
