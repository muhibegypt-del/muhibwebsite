import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhib Idris — Writer, Educator, Researcher",
  description:
    "Muhib Idris is a writer, educator and researcher working across journaling pedagogy, charity consultancy and essays on faith and migration.",
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
