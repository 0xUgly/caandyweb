
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import './global.css'
import React , {Suspense} from "react";
const inter = Inter({ subsets: ["latin"] });
import ConditionalLayout from "@/components/ConditionalLayout";
import Image from "next/image";
import { div } from "framer-motion/client";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const ConditionalLayout = React.lazy(() =>
  //   new Promise<{ default: React.ComponentType<any> }>((resolve) => {
  //     setTimeout(() => resolve(import("@/components/ConditionalLayout")), 5000);
  //   })
  // );

  return (
    <html lang="en" style={{ overflow: "auto", height: "100%" }}>
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={inter.className}
        style={{ overflow: "auto", height: "100%", margin: 0 }}
      >
         <Suspense fallback={
          <div className="h-screen bg-black w-full flex items-center justify-center">
          <Image

          src='/suspense/RlgifWhite.gif'
          alt=""
          height={500}
          width={500}
          />
          </div>
         }>
         <ConditionalLayout>{children}</ConditionalLayout>
         </Suspense>
      </body>
    </html>
  );
}
