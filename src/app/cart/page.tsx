'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

// The type definition for a cart item remains the same
type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export default function CartPage() {
  // Get the query client instance to manually update the cache
  const queryClient = useQueryClient();
  const { data: cartItems, isLoading } = useQuery<CartItem[]>({
    queryKey: ['cart'],
    initialData: [],
    staleTime: Infinity, // Fixes the warning by preventing refetch attempts
  });
  // --- NEW: Function to handle increasing quantity ---
  const handleIncrease = (id: number) => {
    queryClient.setQueryData<CartItem[]>(['cart'], (oldData = []) =>
      oldData.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // --- NEW: Function to handle decreasing quantity ---
  const handleDecrease = (id: number) => {
    queryClient.setQueryData<CartItem[]>(['cart'], (oldData = []) => {
      const itemToDecrease = oldData.find((item) => item.id === id);

      // If quantity is 1, decreasing removes the item
      if (itemToDecrease && itemToDecrease.quantity === 1) {
        return oldData.filter((item) => item.id !== id);
      }

      // Otherwise, just decrease the quantity
      return oldData.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  // --- NEW: Function to handle removing an item completely ---
  const handleRemove = (id: number) => {
    queryClient.setQueryData<CartItem[]>(['cart'], (oldData = []) =>
      oldData.filter((item) => item.id !== id)
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center">
        {/* ... empty cart message ... */}
      </div>
    );
  }

  
  // Calculate the total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Shopping Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                unoptimized
                className="rounded-md"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* --- NEW: Quantity adjustment buttons --- */}
              <button onClick={() => handleDecrease(item.id)} className="px-3 py-1 border rounded-md hover:bg-gray-100">-</button>
              <span className="min-w-[30px] text-center">{item.quantity}</span>
              <button onClick={() => handleIncrease(item.id)} className="px-3 py-1 border rounded-md hover:bg-gray-100">+</button>
            </div>
            <div className="text-right">
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              {/* --- NEW: Remove button --- */}
              <button onClick={() => handleRemove(item.id)} className="text-red-500 text-sm hover:underline">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right text-2xl font-bold mt-6">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
}