"use client";

import { useCurrency } from "@/lib/providers/currency-provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Currency = "USD" | "EUR" | "GBP" | "INR";

export const CurrencySelector = () => {
  const { currency, setCurrency } = useCurrency();

  return (
    <Select onValueChange={(value: Currency) => setCurrency(value)}>
      <SelectTrigger>
        <SelectValue placeholder={currency} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="USD">USD</SelectItem>
        <SelectItem value="INR">INR</SelectItem>
        <SelectItem value="EUR">EUR</SelectItem>
        <SelectItem value="GBP">GBP</SelectItem>
      </SelectContent>
    </Select>
  );
};
