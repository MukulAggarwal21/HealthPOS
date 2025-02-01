// 'use client'
// import React, { createContext, useContext, useState } from 'react'

// type Currency = 'USD' | 'EUR' | 'GBP' |'INR'
// type CurrencyContextType = {
//   currency: string
//   setCurrency: (currency: string) => void
//   convertCurrency: (amount: number, from: string, to: string) => number
// }

// const EXCHANGE_RATES = {
//   USD: 1,
//   EUR: 0.96,
//   GBP: 0.80,
//   INR: 86.51
// }

// const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

// export const CurrencyProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
//   const [currency, setCurrency] = useState<Currency>('USD')

//   const convertCurrency = (amount: number, from: Currency, to: Currency) => {
//     return amount * (EXCHANGE_RATES[to] / EXCHANGE_RATES[from])
//   }

//   return (
//     <CurrencyContext.Provider value={{ 
//       currency, 
//       setCurrency, 
//       convertCurrency 
//     }}>
//       {children}
//     </CurrencyContext.Provider>
//   )
// }

// export const useCurrency = () => {
//   const context = useContext(CurrencyContext)
//   if (!context) {
//     throw new Error('useCurrency must be used within a CurrencyProvider')
//   }
//   return context
// }












// import React, { createContext, useContext, useState } from 'react';

// // Define available currencies
// export type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY' | 'INR';

// // Define the shape of our context
// interface CurrencyContextType {
//   currency: Currency;
//   setCurrency: (currency: Currency) => void;
//   convertCurrency: (amount: number, fromCurrency: string, toCurrency: string) => number;
// }

// // Create the context with a default value
// const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// // Exchange rates (simplified example)
// const exchangeRates: Record<Currency, number> = {
//   USD: 1,
//   EUR: 0.85,
//   GBP: 0.73,
//   JPY: 110.5,
//   INR: 74.5,
// };

// export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [currency, setCurrency] = useState<Currency>('USD');

//   const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string): number => {
//     // Validate currencies
//     if (!(fromCurrency in exchangeRates) || !(toCurrency in exchangeRates)) {
//       console.error('Invalid currency');
//       return amount;
//     }

//     // Convert to USD first (base currency)
//     const inUSD = amount / exchangeRates[fromCurrency as Currency];
//     // Convert from USD to target currency
//     const converted = inUSD * exchangeRates[toCurrency as Currency];
    
//     return Number(converted.toFixed(2));
//   };

//   const handleSetCurrency = (newCurrency: Currency) => {
//     setCurrency(newCurrency);
//   };

//   return (
//     <CurrencyContext.Provider value={{
//       currency,
//       setCurrency: handleSetCurrency,
//       convertCurrency
//     }}>
//       {children}
//     </CurrencyContext.Provider>
//   );
// };

// // Custom hook to use the currency context
// export const useCurrency = () => {
//   const context = useContext(CurrencyContext);
//   if (context === undefined) {
//     throw new Error('useCurrency must be used within a CurrencyProvider');
//   }
//   return context;
// };


// src/lib/providers/currency-provider.tsx
"use client";

import React, { createContext, useContext, useState } from 'react';

export type Currency = "USD" | "EUR" | "GBP" | "INR";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertCurrency: (amount: number, fromCurrency: string, toCurrency: string) => number;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Exchange rates relative to USD
const exchangeRates: Record<Currency, number> = {
  USD: 1,
  EUR: 0.85,
  GBP: 0.73,
  INR: 83.28,
};

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>("USD");

  const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string): number => {
    // Validate currencies
    if (!(fromCurrency in exchangeRates) || !(toCurrency in exchangeRates)) {
      console.error('Invalid currency');
      return amount;
    }

    // Convert to USD first (base currency)
    const inUSD = amount / exchangeRates[fromCurrency as Currency];
    // Convert from USD to target currency
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