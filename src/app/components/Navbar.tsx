// app/components/Navbar.tsx
"use client"; // This directive makes it a Client Component
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartIcon from "./CartIcon";
import dynamic from 'next/dynamic'; 
// A simple CSS module for styling (optional, but good practice)
import styles from "./Navbar.module.css";
import Logo from "./Logo";

// type CartItem = {
//   id: number;
//   quantity: number;
//   // ... other properties like price, title etc. exist but we only need quantity here
// };

// --- FIX: Use dynamic import to prevent SSR for this component ---
const AuthStatus = dynamic(() => import('./AuthStatus'), {
  ssr: false, // This is the key: disable server-side rendering
  loading: () => <div className="h-8 w-20 bg-gray-700 rounded-md animate-pulse"></div>, // Optional loading skeleton
});

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  return (
    <nav className={styles.nav}>
      <div className="flex items-center gap-6">
        <Logo />
        <Link
          className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${styles.link} ${pathname === '/products' ? styles.active : ''}`}
          href="/products"
        >
          Products
        </Link>
        <Link
          className={`${styles.link} ${pathname === '/category' ? styles.active : ''}`}
          href="/category"
        >
          Category
        </Link>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <CartIcon />
        <AuthStatus /> {/* Render the dynamically imported component */}
      </div>
    </nav>
  );
}
