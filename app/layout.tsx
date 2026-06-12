import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhib Idris — Publisher, Writer, Educator",
  description:
    "Muhib Idris is a publisher, writer and educator based between Kuala Lumpur and Manchester. Author of The Camel to Medina: Essays on Meaning, Migration & Movement, forthcoming 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
