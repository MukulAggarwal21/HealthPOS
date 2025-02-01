"use client";
import { Dashboard } from "@/components/dashboard";
import { AnalyticsDashboard } from "@/components/analytics/dashboard";
import { useCurrency } from "@/lib/providers/currency-provider";
import { Locale } from '@/lib/i18n/navigation';
import { CurrencyProvider } from "@/lib/providers/currency-provider";

import { SalesChart } from "@/components/analytics/sales-chart";
interface Props {
  params: {
    locale: Locale;
  };
}


export default function DashboardPage({ params: { locale } }: Props) {
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
