"use client";
import { Dashboard } from "@/components/dashboard";
import { AnalyticsDashboard } from "@/components/analytics/dashboard";
import { useCurrency } from "@/lib/providers/currency-provider";
import { CurrencyProvider } from "@/lib/providers/currency-provider";

import { SalesChart } from "@/components/analytics/sales-chart";
export default function DashboardPage() {
  const analyticsData = {
    totalRevenue: 15000,
    servicesSold: 200,
    topServices: [
      { name: 'Personal Training', sales: 5000 },
      { name: 'Yoga Class', sales: 3000 }
    ]
  }

  return (
    <>
         <div>
            <Dashboard analyticsData={analyticsData} />
             </div>
    </>
 
  )
}
