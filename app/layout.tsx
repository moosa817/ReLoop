import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

const siteUrl = "https://reloop.pk";

export const metadata: Metadata = {
  title: "ReLoop Pakistan – Get Paid for Trash",
  description:
    "ReLoop Pakistan turns everyday waste into digital currency. Join the circular economy revolution and earn real money from your recyclable waste.",
  keywords: [
    "ReLoop Pakistan",
    "recycling Pakistan",
    "get paid for trash",
    "circular economy",
    "Karachi waste management",
    "kachra se kamai",
    "EasyPaisa recycling",
    "sustainable Pakistan",
  ],
  authors: [{ name: "ReLoop Pakistan" }],
  creator: "ReLoop Pakistan",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ReLoop Pakistan",
    title: "ReLoop Pakistan – Get Paid for Trash",
    description:
      "Turn your household waste into digital currency. ReLoop Pakistan pays you for recyclables – schedule a pickup, earn points, cash out to EasyPaisa or JazzCash.",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ReLoopPK",
    creator: "@ReLoopPK",
    title: "ReLoop Pakistan – Get Paid for Trash",
    description:
      "Turn your household waste into digital currency. Pakistan's first circular economy platform that pays you for recyclables.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
