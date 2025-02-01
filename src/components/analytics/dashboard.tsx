import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts"
import { formatCurrency } from "@/lib/utils/format-currency"
import { useTranslations } from 'next-intl'

interface AnalyticsData {
  totalRevenue: number
  servicesSold: number
  topServices: Array<{name: string, sales: number}>
}

export const AnalyticsDashboard: React.FC<{ data: AnalyticsData }> = ({ data }) => {
  const t = useTranslations('Analytics')

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>{t('totalRevenue')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {formatCurrency(data.totalRevenue)}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('servicesSold')}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {data.servicesSold}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('topServices')}</CardTitle>
        </CardHeader>
        <CardContent>
          {data.topServices.map((service, index) => (
            <div 
              key={index} 
              className="flex justify-between border-b py-2 last:border-b-0"
            >
              <span>{service.name}</span>
              <span>{formatCurrency(service.sales)}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}