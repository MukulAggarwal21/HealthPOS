"use client";

import { useState } from "react";
import { useCartStore } from "@/lib/store/cart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useCurrency } from "@/lib/providers/currency-provider";

const paymentSchema = z.object({
  cardNumber: z.string().regex(/^(?:\d{4} ?){3}\d{4}$/ , "Invalid card number"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Invalid expiry date"),
  cvv: z.string().regex(/^\d{3,4}$/, "Invalid CVV"),
  cardholderName: z.string().min(2, "Invalid cardholder name"),
});

interface PaymentFormProps {
  onBack: () => void;
  onSuccess: () => void;
}

export const PaymentForm = ({ onBack, onSuccess }: PaymentFormProps) => {
  const [loading, setLoading] = useState(false);
  const { total } = useCartStore();
  const { currency, convertCurrency } = useCurrency();

  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = async (data: z.infer<typeof paymentSchema>) => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      onSuccess();
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setLoading(false);
    }
  };
const formatCardNumber = (value: string | undefined) => {
    if (!value) return "";
  return value
    .replace(/\D/g, "") 
    .slice(0, 16) 
    .replace(/(\d{4})/g, "$1 ") 
    .trim();
};

 const formatPrice = (price: number) => {
    const convertedPrice = convertCurrency(price, 'USD', currency);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(convertedPrice);
  };



  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="cardholderName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cardholder Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="John Doe" />
                  </FormControl>
                </FormItem>
              )}
            />
           



<FormField
  control={form.control}
  name="cardNumber"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Card Number</FormLabel>
      <FormControl>
        <Input
          {...field}
          placeholder="4111 1111 1111 1111"
          maxLength={19} 
          value={formatCardNumber(field.value)}
          onChange={(e) => field.onChange(formatCardNumber(e.target.value))}
        />
      </FormControl>
    </FormItem>
  )}
/>



            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="expiryDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Expiry Date</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="MM/YY" maxLength={5} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVV</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" maxLength={4} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="pt-4 border-t">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total Amount:</span>
                <span className="font-semibold">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between gap-4">
                <Button type="button" variant="outline" onClick={onBack}>
                  Back
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? "Processing..." : "Pay Now"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};