import { Suspense } from "react";
import { Dashboard } from "@/components/dashboard";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { redirect } from 'next/navigation'

export default function Home() {
 
  redirect('/dashboard')

}
