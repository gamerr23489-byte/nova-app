import "./globals.css";

export const metadata = {
  title: "NOVA",
  description: "A futuristic social experience.",
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
