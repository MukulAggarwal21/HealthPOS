// 'use client'

// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { Button } from "@/components/ui/button";

// export const ThemeToggle = () => {
//   const { theme, setTheme } = useTheme();

//   return (
//     <Button
//     className="ml-2"
//       variant="ghost"
//       size="sm"
//       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//     >
      
//         {theme === "light" ? (
//         <Sun className="h-5 w-5" />
//       ) : (
//         <Moon className="h-5 w-5" />
//       )}
//     </Button>
//   );
// };


'use client'

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="ghost" size="sm" className="ml-2 w-9 h-9" />;
  }

  return (
    <Button
      className="ml-2"
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
};