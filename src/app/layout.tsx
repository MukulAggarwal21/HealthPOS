import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from 'next-intl/server';
import { CurrencyProvider } from "@/lib/providers/currency-provider";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { CurrencySelector } from "@/components/ui/currency-selector";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
   params: { locale }
}: {
  children: React.ReactNode;
    params: { locale: string };

}) {
    const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CurrencyProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="flex justify-end space-x-4 p-4">
                <LanguageSwitcher />
                <CurrencySelector />
              </div>
              {children}
            </ThemeProvider>
          </CurrencyProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
