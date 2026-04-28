import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReLoop Pakistan – Get Paid for Trash",
  description:
    "ReLoop Pakistan turns everyday waste into digital currency. Join the circular economy revolution.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
