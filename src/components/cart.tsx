
"use client";

import { useCartStore } from "@/lib/store/cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

interface CartProps {
  onCheckout: () => void;
}

export const Cart = ({ onCheckout }: CartProps) => {
  const { items, removeItem, total } = useCartStore();

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      <ScrollArea className="h-60">
        {items.map((item) => (
          <Card key={item.id} className="mb-2 ">
            <CardContent className="flex justify-between items-center pt-3 pb-[-2]">
              <div>
                <p className="font-medium ">{item.name}</p>
                <p className="text-sm text-gray-500">
                  ${item.price.toFixed(2)} × {item.quantity}
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
        ))}
        {items.length === 0 && <p className="text-center text-gray-500">No items in cart</p>}
      </ScrollArea>

      <div className="mt-4 flex justify-between items-center font-semibold">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <Button className="w-full mt-4" onClick={onCheckout} disabled={items.length === 0}>
        Proceed to Checkout
      </Button>
    </div>
  );
};
