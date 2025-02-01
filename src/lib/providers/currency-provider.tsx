'use client'
import React, { createContext, useContext, useState } from 'react'

type Currency = 'USD' | 'EUR' | 'GBP'
type CurrencyContextType = {
  currency: Currency
  setCurrency: (currency: Currency) => void
  convertCurrency: (amount: number, from: Currency, to: Currency) => number
}

const EXCHANGE_RATES = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export const CurrencyProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [currency, setCurrency] = useState<Currency>('USD')

  const convertCurrency = (amount: number, from: Currency, to: Currency) => {
    return amount * (EXCHANGE_RATES[to] / EXCHANGE_RATES[from])
  }

  return (
    <CurrencyContext.Provider value={{ 
      currency, 
      setCurrency, 
      convertCurrency 
    }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrency = () => {
  const context = useContext(CurrencyContext)
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}