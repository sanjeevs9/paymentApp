import "./globals.css";
import "../../../packages/ui/styles.css"
import { RecoilRoot } from "recoil";
import { Providers } from "../provider";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body>
          {children}
        </body>
      </Providers>
    </html>
  );
}
