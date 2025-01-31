"use client";

import { useCartStore } from "@/lib/store/card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Printer } from "lucide-react";

interface ReceiptProps {
  onNewSale: () => void;
}

export const Receipt = ({ onNewSale }: ReceiptProps) => {
  const { items, total, clearCart } = useCartStore();
  const receiptNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  const handlePrint = () => {
    window.print();
  };

  const handleNewSale = () => {
    clearCart();
    onNewSale();
  };

  return (
    <div className="max-w-xl mx-auto">
      <Card className="receipt-card">
        <CardHeader className="text-center border-b">
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle>Payment Successful</CardTitle>
        </CardHeader>
        <CardContent className="mt-6">
          <div className="space-y-6">
            <div className="flex justify-between text-sm">
              <span>Receipt Number:</span>
              <span>{receiptNumber}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Date:</span>
              <span>{date}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Time:</span>
              <span>{time}</span>
            </div>
            
            <div className="border-t pt-4 mt-4">
              <h3 className="font-semibold mb-2">Items</h3>
              <div className="space-y-2">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span>${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between gap-4 mt-8">
              <Button
                variant="outline"
                className="w-full"
                onClick={handlePrint}
              >
                <Printer className="mr-2 h-4 w-4" />
                Print Receipt
              </Button>
              <Button
                className="w-full"
                onClick={handleNewSale}
              >
                New Sale
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};