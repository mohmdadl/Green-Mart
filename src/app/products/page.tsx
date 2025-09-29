import Image from "next/image";
import Link from "next/link";
import QuickAddToCartButton from "../components/QuickAddToCartButton";

type Product = {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  image: string;
};

export default async function ProductsList() {
  const res = await fetch(`http://localhost:5000/plants`);
  const products: Product[] = await res.json();

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <Link key={p.id} href={`/products/${p.id}`}>
          {/* --- NEW: Added 'relative' for positioning the button --- */}
          <div className="relative bg-white rounded-lg shadow p-4 hover:shadow-lg cursor-pointer h-full flex flex-col justify-between">
            <div>
              <Image
                src={p.image}
                alt={p.title}
                width={200}
                height={200}
                // --- NEW: Re-enabled Next.js Image optimization ---
                // unoptimized attribute is removed
                className="w-full h-40 object-contain mb-3"
              />
              <h2 className="text-lg font-semibold line-clamp-1 text-black">
                {p.title}
              </h2>
              <p className="text-gray-600">{p.subtitle}</p>
            </div>
            <p className="text-green-600 mt-2">${p.price}</p>
            
            {/* --- NEW: Added the Quick Add to Cart Button --- */}
            {/* We pass the necessary product details as a prop */}
            <QuickAddToCartButton product={{ id: p.id, title: p.title, price: p.price, image: p.image }} />
          </div>
        </Link>
      ))}
    </div>
  );
}
