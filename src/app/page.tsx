import { Suspense } from "react";
import { Dashboard } from "@/components/dashboard";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function Home() {
  return (
    <Suspense fallback={<LoadingSpinner/>}>
      <Dashboard />
    </Suspense>
  );
}
