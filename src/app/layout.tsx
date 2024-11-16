import "./globals.css";
import Header from "@/components/Header";

import { regularFont, italicFont, pixelFont } from "../app/fonts/fonts";

export const metadata = {
  title: "Your Portfolio",
  description: "Your portfolio description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${regularFont.variable} ${italicFont.variable} ${pixelFont.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
