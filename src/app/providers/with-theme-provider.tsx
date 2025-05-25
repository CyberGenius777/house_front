import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

export const WithThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};
