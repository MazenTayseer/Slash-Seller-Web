import type { Metadata } from "next";

import "@styles/globals.css";

import Nav from "@components/Nav";

export const metadata: Metadata = {
  title: "Slash Seller",
  description: "Slash Seller Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
