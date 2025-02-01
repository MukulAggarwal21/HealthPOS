"use client";

import { useState } from "react";
import { ServiceList } from "./service-list";
import { Cart } from "./cart";
import { CustomerForm } from "./customer-form";
import { Receipt } from "./receipt";
import { PaymentForm } from "./payment-form";
import { AnalyticsDashboard } from "@/components/analytics/dashboard";
import { SalesChart } from "@/components/analytics/sales-chart";
import type { DashboardProps } from "@/types";


export const Dashboard = ({ analyticsData }: DashboardProps) => {
  const [step, setStep] = useState<"services" | "customer" | "payment" | "receipt">(
    "services"
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl text-blue-900 font-bold">Modern POS System</h1>
        </header>
        
        {step === "services" && (
           <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <ServiceList />
              </div>
              <div className="md:col-span-1">
                <Cart onCheckout={() => setStep("customer")} />
              </div>
            </div>
            
            <div className="mb-8 items-center mt-14">
              <h2 className="text-2xl font-bold mb-4">Business Analytics</h2>
              <AnalyticsDashboard data={analyticsData} />
            </div>

             <div className="pt-4 px-10 pb-9">
              <SalesChart />
            </div>
          </>
        )}
        
        {step === "customer" && (
          <CustomerForm 
            onBack={() => setStep("services")}
            onNext={() => setStep("payment")}
          />
        )}
        
        {step === "payment" && (
          <div className="max-w-xl mx-auto">
            <PaymentForm
              onBack={() => setStep("customer")}
              onSuccess={() => setStep("receipt")}
            />
          </div>
        )}
        
        {step === "receipt" && (
          <Receipt onNewSale={() => setStep("services")} />
        )}
      </div>
    </div>
  );
};