"use client";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Define a type for a cart item for type safety
type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export default function AddToCartButton({
  product,
}: {
  product: Omit<CartItem, "quantity">;
}) {
  const queryClient = useQueryClient();

  const handleAddToCart = () => {
    // Update the 'cart' query data
    queryClient.setQueryData<CartItem[]>(["cart"], (oldData = []) => {
      const existingItem = oldData.find((item) => item.id === product.id);
      if (existingItem) {
        // If item exists, increase quantity
        return oldData.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Otherwise, add the new item
      return [...oldData, { ...product, quantity: 1 }];
    });
    toast.success(`${product.title} has been added to your cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-4 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg"
    >
      Add to Cart
    </button>
  );
}
