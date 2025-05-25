import "./globals.css";
import { PropsWithChildren } from "react";

import { AppWrapper } from "./app-wrapper";
import { getMeSSR } from "@/shared/api/auth/getMeSSR";
import { Sidebar } from "@/widgets/sidebar";

export default async function RootLayout({ children }: PropsWithChildren) {
  const user = await getMeSSR();

  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <AppWrapper user={user}>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1">{children}</main>
          </div>
        </AppWrapper>
      </body>
    </html>
  );
}
