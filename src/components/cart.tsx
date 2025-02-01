"use client";

import { useCartStore } from "@/lib/store/cart";
import { useCurrency } from "@/lib/providers/currency-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

interface CartProps {
  onCheckout: () => void;
}

export const Cart = ({ onCheckout }: CartProps) => {
  const { items, removeItem, total } = useCartStore();
  const { currency, convertCurrency } = useCurrency();

  const formatPrice = (priceInUSD: number) => {
    const convertedPrice = convertCurrency(priceInUSD, 'USD', currency);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(convertedPrice);
  };

  const convertedTotal = convertCurrency(total, 'USD', currency);

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      <ScrollArea className="h-60">
        {items.map((item) => {
          const itemPrice = convertCurrency(item.price, 'USD', currency);
          
          return (
            <Card key={item.id} className="mb-2">
              <CardContent className="flex justify-between items-center pt-3 pb-[-2]">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    {formatPrice(item.price)} × {item.quantity}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(item.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
        {items.length === 0 && <p className="text-center text-gray-500">No items in cart</p>}
      </ScrollArea>

      <div className="mt-4 flex justify-between items-center font-semibold">
        <span>Total:</span>
        <span>{formatPrice(total)}</span>
      </div>

      <Button className="w-full mt-4" onClick={onCheckout} disabled={items.length === 0}>
        Proceed to Checkout
      </Button>
    </div>
  );
};