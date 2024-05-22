import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";

const workSans = Work_Sans({ 
  subsets: ["latin"],
  variable: '--font-work-sans',
  weight: ['400', '600', '700']
});

export const metadata: Metadata = {
  title: "ERD",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      </head>
      <body className={`${workSans.className} bf-primary-grey-200`}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
