"use client";

import { SalesChart } from "./sales-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Analytics() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Analytics</h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$12,345</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Total Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">234</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Average Sale</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$52.75</p>
          </CardContent>
        </Card>
      </div>

      <SalesChart />
    </div>
  );
}