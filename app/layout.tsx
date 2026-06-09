import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhib Idris — Publisher, Educator, Researcher",
  description:
    "Muhib Idris is a publisher and educator based in Birmingham. He publishes books that go on to become worldwide bestsellers, teaches journaling pedagogy, and consults for charities on campaigns and copy.",
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
