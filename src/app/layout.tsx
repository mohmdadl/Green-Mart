// app/layout.tsx
import type { Metadata } from "next";
import { Sen } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import QueryProvider from "./components/QueryProvider";
import AuthProvider from "./components/AuthProvider";
import { Toaster } from 'react-hot-toast';

const inter = Sen({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Plants",
  description: "Find and your favorite plants.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QueryProvider>
            <Toaster position="bottom-center" toastOptions={{ duration: 1000 }} />
            <nav>
              <Navbar />
            </nav>
            <main style={{ padding: "1rem" }}>{children}</main>
            {/* <footer>Footer</footer> */}
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
