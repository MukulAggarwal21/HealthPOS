"use client";

import React, { createContext, useContext, useState } from 'react';

export type Currency = "USD" | "EUR" | "GBP" | "INR";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertCurrency: (amount: number, fromCurrency: string, toCurrency: string) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const exchangeRates: Record<Currency, number> = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  INR: 83.28,
};

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>("USD");

  const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string): number => {
    if (!(fromCurrency in exchangeRates) || !(toCurrency in exchangeRates)) {
      console.error('Invalid currency');
      return amount;
    }

    const inUSD = amount / exchangeRates[fromCurrency as Currency];
    return inUSD * exchangeRates[toCurrency as Currency];
  };

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency,
      convertCurrency
    }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};