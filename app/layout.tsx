import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weather Forecast",
  description: "7 days weather forecast for any US address",
  icons: {
    icon: '/assets/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-no-repeat bg-cover">{children}</body>
    </html>
  );
}
