"use client";

import Link from "next/link";
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from "react";

// Define the type for a cart item
type CartItem = {
  id: number;
  quantity: number;
};

export default function CartIcon() {
  const { data: cartItems } = useQuery<CartItem[]>({
    queryKey: ['cart'],
    initialData: [],
    // This option tells TanStack Query that the data is always "fresh"
    // and it should never try to refetch it from a server. This fixes the warning.
    staleTime: Infinity, 
  });

  const itemCount = cartItems?.reduce((total, item) => total + item.quantity, 0) ?? 0;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Link
      href="/cart"
      className="relative" // 'relative' is needed for positioning the badge
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      {/* SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white" // Adjust size and color as needed
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      {isClient && itemCount > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-xs text-white">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
