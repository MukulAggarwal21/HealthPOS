// import { Inter } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";
// import { CurrencyProvider } from "@/lib/providers/currency-provider";
// import { CurrencySelector } from "@/components/ui/currency-selector";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export default async function RootLayout({
//   children,
//   //  params: { locale }
// }: {
//   children: React.ReactNode;
//     // params: { locale: string };

// }) {
//     // const messages = await getMessages();

//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <CurrencyProvider>
//           <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//           <div className="flex items-center justify-between px-4 p-10 py-3">
//   <h1 className="text-3xl font-bold  dark:text-white pr-4">HealthPOS</h1>
//   <CurrencySelector />
// </div>
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

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CurrencyProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex items-center justify-between px-4 p-10 py-3">
              <h1 className="text-3xl font-bold dark:text-white pr-4">HealthPOS</h1>
              <CurrencySelector />
            </div>
            {children}
          </ThemeProvider>
        </CurrencyProvider>
      </body>
    </html>
  );
}