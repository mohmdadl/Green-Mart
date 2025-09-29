'use client';

import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

// تعريف أنواع البيانات التي سنستخدمها
type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

export default function QuickAddToCartButton({ product }: { product: Product }) {
  const queryClient = useQueryClient();

  // --- مهم جدًا: منع الانتقال إلى صفحة المنتج ---
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    // هذه الدالة تمنع حدث النقر من الوصول إلى الرابط <Link> الذي يحيط بالبطاقة
    e.preventDefault();
    e.stopPropagation();

    // نفس منطق الإضافة للسلة الذي استخدمناه من قبل
    queryClient.setQueryData<CartItem[]>(['cart'], (oldData = []) => {
      const existingItem = oldData.find((item) => item.id === product.id);
      if (existingItem) {
        return oldData.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...oldData, { ...product, quantity: 1 }];
    });

    toast.success(`${product.title} added to cart!`);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="absolute top-2 right-2 z-10 p-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-transform duration-200 hover:scale-110"
      aria-label={`Add ${product.title} to cart`}
    >
      {/* SVG Icon for the '+' symbol */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </button>
  );
}