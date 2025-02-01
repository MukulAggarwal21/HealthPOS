// import { Inter } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";
// import { CurrencyProvider } from "@/lib/providers/currency-provider";
// import { CurrencySelector } from "@/components/ui/currency-selector";
// import "./globals.css";
// import { ThemeToggle } from "@/components/ui/theme-toggle";
// const inter = Inter({ subsets: ["latin"] });

// interface RootLayoutProps {
//   children: React.ReactNode;
// }

// export default function RootLayout({ children }: RootLayoutProps) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <CurrencyProvider>
//           <ThemeProvider  attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange>
//             <div className="flex items-center justify-between px-4 p-10 py-3">
//               <h1 className="text-3xl font-bold dark:text-white pr-4">HealthPOS</h1>
//                           <CurrencySelector />
//               <ThemeToggle/>
//             </div>
//             {children}
//           </ThemeProvider>
//         </CurrencyProvider>
//       </body>
//     </html>
//   );
// }


import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { CurrencyProvider } from "@/lib/providers/currency-provider";
import { CurrencySelector } from "@/components/ui/currency-selector";
import "./globals.css";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <CurrencyProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex items-center justify-between px-4 p-10 py-3">
              <h1 className="text-3xl font-bold dark:text-white pr-4">HealthPOS</h1>
              <CurrencySelector />
              <ThemeToggle />
            </div>
            {children}
          </ThemeProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}